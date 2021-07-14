//Sample Code Snippets from the Tech Blog on PerimeterX, No. 1
//Read the blog at https://www.perimeterx.com/tech-blog/2019/list-every-event-that-exists-in-the-browser

//Stage 1: Extract all of the supported events of an object's prototype

function _isEvent(prop) {
	if (0 !== prop.indexOf("on")) {
	return false;
	}

	return true;
}

function _getEvents(obj) {
    var result = [];

    for (var prop in obj) {
        if (_isEvent(prop)) {
            prop = prop.substr(2); // remove "on" at the beginning
            result.push(prop);
        }
    }

    return result;
}

//XMLHttpRequest's supported events (on Chrome 75)
console.log(_getEvents(XMLHttpRequest.prototype));
// ["readystatechange", "loadstart", "progress", "abort", "error", "load", "timeout", "loadend"]