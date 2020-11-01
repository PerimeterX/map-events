function _isEvent(prop) {
    if (0 !== prop.indexOf('on')) {
        return false;
    }

    return true;
}

function _getEvents(obj, hasOwnProperty = true) {
    const result = [];

    for (const prop in obj) {
        if (!obj.hasOwnProperty(prop) && hasOwnProperty) {
            continue;
        }

        if (_isEvent(prop)) {
            // remove "on" at the beginning
            result.push(prop.substr(2));
        }
    }

    return result;
}


function getEvents(filter = '*', hasOwnProperty = true,  noEmptyArrays = false, debug = false) {
    const result = {};

    const arr = Object.getOwnPropertyNames(window);

    if ('*' === filter) {
        filter = ''; // would always exist in any string possible
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (-1 === element.indexOf(filter)) {
            continue;
        }

        let resultArray = [];

        try {
            const obj = window[element];

            if (!obj || !obj['prototype']) {
                continue;
            }

            proto = obj['prototype'];

            resultArray = _getEvents(proto, hasOwnProperty);

        } catch (err) {
            if (debug) {
                console.error(`failed to get events of %o`, element);
            }
        }

        if (resultArray.length === 0 && noEmptyArrays) {
            continue;
        }

        result[element] = resultArray;
    }

    if (-1 !== 'window'.indexOf(filter)) {
        const resultArray = _getEvents(window, hasOwnProperty);

        if (resultArray.length === 0 && noEmptyArrays) {
            return result;
        }

        result['window'] = resultArray;
    }

    return result;
}

module.exports = getEvents;
