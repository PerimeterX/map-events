# Browser Developer Tools / Console Guidance

This directory is for those who will use their Browser's Developer Tools' "Console" section to run this.

This is the [manually-run script](Output%20Browser%20Events%20from%20all%20Prototype%20Objects%20for%20Every%20Browser.js) I have created to obtain a JSON of all JS Browser Events from all Objects in all Browsers.

## Usage

Open your Developer Tools in your browser, copy the contents of [the script](Output%20Browser%20Events%20from%20all%20Prototype%20Objects%20for%20Every%20Browser.js), and paste the results from your clipboard (already on the clipboard thanks to the script's logic), into your favorite IDE.

From there, I suggest something like [VSCode](https://code.visualstudio.com/) with any tooling or extension to [make JSON pretty](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json) to further format and organise the results in preparation to add it to [the Website's Datafile](https://github.com/alexwiegmanpx/map-events-website/blob/master/data.json).

## Output

A map of all events in the browser shows in a JSON format:

```JSON
{
    "window": [
        "search",
        "abort",
        "blur",
        "cancel",
        "canplay",
        "canplaythrough",
        "change",
        "click",
        "close",
        "contextmenu",
        "cuechange",
        "dblclick",
        "drag",
        "dragend",
        "dragenter",
        "dragleave",
        "dragover",
        "dragstart",
        "drop",
        "durationchange",
        "emptied",
        "ended",
        "error",
        "focus",
        "formdata",
        "input",
        "invalid",
        "..."
    ],
    "Object": [],
    "Function": [],
    "Array": [],
    "Number": [],
    "Boolean": [],
    "String": [],
    "Symbol": [],
    "Date": [],
    "Promise": [],
    "RegExp": [],
    "..."
        }
```

## Example

The script can be seen in action on [JSFiddle](https://jsfiddle.net/4jcazrf8/1/) and in the screenshot GIF sample on Firefox 82.0.2 (Macintosh macOS Catalina 10.15.7)

![Screenshot GIF of example of script being run](Example.gif)

## Improvements

1. The biggest improvement made was to cast the array result from the original version of the code to a direct JSON output by using the `JSON.stringify` call.

```javascript
var consoleOutput = JSON.stringify(getEvents());
```

2. Another feature imporvement made was to add a method to copy the JSON output to clipboard && a function to associate with the method so that JS linter tools would be happy.

```javascript
//Copy a JSON of the output of all events in the browser
var consoleOutput = JSON.stringify(getEvents());

copy(consoleOutput);

//optional couple of lines, it helps suppress a few linter errors
function copy(consoleOutput) {
}
```

3. A much more minor, but regardless, elegant change made was in the formatting of the `_isEvent` function at the top of the script. The return and property statements were merged together into a single line as follows:

```javascript
function _isEvent(prop) {
    return 0 === prop.indexOf("on");
}
```

The change above is largely cosmetic. Additionally, there were a couple of trivial changes of `var` to `let` to define scope better, but this is so trivial that pointing out each such instance here with examples is of no importance.