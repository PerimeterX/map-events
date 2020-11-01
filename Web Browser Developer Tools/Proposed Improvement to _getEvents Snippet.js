//Proposed Improvement to function _getEvents JS snippet
//Read the blog at https://www.perimeterx.com/tech-blog/2019/list-every-event-that-exists-in-the-browser

//Stage 1: Extract all of the supported events of an object's prototype

function _isEvent(prop) {
    return 0 === prop.indexOf("on");
}

function _getEvents(obj) {
    const result = [];

    for (var prop in obj) {
        if (_isEvent(prop)) {
            prop = prop.substr(2); // remove "on" at the beginning
            result.push(prop);
        }
    }

    return result;
}

console.log(JSON.stringify(_getEvents(XMLHttpRequest.prototype)));