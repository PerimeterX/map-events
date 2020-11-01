// Title: Output Browser Events from all Prototype Objects for Every Browser
// Purpose: Snippet to insert into Browser Console to output all events of all prototypes for every browser
// Authors: Alexander Wiegman (PerimeterX San Mateo), Gal Weizman (PerimterX Tel Aviv)
// Time of Creation (most recent version): 01 November 2020 03:08 [UTC]
// Extra: Handily adds a function to format the output directly as JSON and put the result into your clipboard, for easy export to file.
// Web: On the web @ JSFiddle -- https://jsfiddle.net/4jcazrf8/1/

//Write guidance to the webpage -- if you want to overwrite DOM, uncomment the below
//document.body.innerHTML = `<h1>${'Open the Console in the Developer Tools to see the result'}</h1>`;

//Optional Console Logging - Descriptive Description is Descriptive?
//console.log('Every event supported by every object in the browser:')

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

function getEvents() {
    const result = {};

    result["window"] = _getEvents(window, hasOwnProperty);

    const arr = Object.getOwnPropertyNames(window);

    let proto;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        let resultArray = [];

        try {
            const obj = window[element];

            if (!obj || !obj["prototype"]) {
                continue;
            }

            proto = obj["prototype"];

            resultArray = _getEvents(proto);

        } catch (err) {
            // console.error(`failed to get events of %o`, element);
        }

        result[element] = resultArray;
    }

    return result;
}

function hasOwnProperty() {
}

//show the result in your browser
console.log(JSON.stringify(getEvents()));

//Copy a JSON of the output of all events in the browser
var consoleOutput = JSON.stringify(getEvents());

copy(consoleOutput);

//optional couple of lines, it helps suppress a few linter errors
function copy(consoleOutput) {
}