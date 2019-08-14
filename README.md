# map-events

Events mapped out [completely](https://perimeterx.github.io/map-events-website/) - cross browsers

Using this powerful little tool will map out for you all Events in any browser you'd wish to execute it on.

## installation

`npm install px-map-events --save`

## usage

```javascript
const getEventsMap = require('map-events');

const EventsMap = getEventsMap();
```

## output

a map of all events in the browser in the following format:

```javascript
{
    'OBJECT': [
        'EVENT1',
        'EVENT2',
        'EVENT3'
    ]
}
```

# example

```javascript
const getEventsMap = require('map-events');

const webSocketEventsMap = getEventsMap('WebSocket');

(webSocketEventsMap == {
  "WebSocket": [
    "open",
    "error",
    "close",
    "message"
  ] // results in true
});
```

here's an example of how to register with your own listener to every event that exists on `window`!

```javascript

const windowEventsMap = getEventsMap('window')['window'];

for (let i = 0; i < windowEventsMap.length; i++) {
  const event = windowEventsMap[i];
  window[event] = (event) => { console.log(event) });
}
```

## options

1. `filter` (first optional argument)

allows you to pass a string that must exist within the object in order for it to make it to the final result map:

```javascript
const getEventsMap = require('map-events');

const EventsMap = getEventsMap('*'); // will return a non-filtered map
const EventsMap = getEventsMap('HTML'); // will return a map that only contains objects that contain the string 'HTML' (such as 'HTMLBodyElement')
const EventsMap = getEventsMap('Doc'); // will return a map that only contains objects that contain the string 'Doc' (such as 'Document')
```

default value: `'*'`

2. `hasOwnProperty` (second optional argument)

allows you to pass a boolean that indicates whether iterated object must has iterated property as its own property or not:

```javascript
const getEventsMap = require('map-events');

const EventsMap = getEventsMap('*', true); // will return a map with objects and  events properties that are the object's own properties
const EventsMap = getEventsMap('*', false); // will return a map with objects and  events properties - whether the properties are the object's own properties or not
```

default value: `true`

3. `noEmptyArrays` (third optional argument)

allows you to pass a boolean that indicates whether final result object should contain objects that have zero events or not:

```javascript
const getEventsMap = require('map-events');

const EventsMap = getEventsMap('*', true, true); // will return a map with objects and events properties only if the object even has any events
const EventsMap = getEventsMap('*', true, false); // will return a map with objects and events properties whether the object has any events or not
```

default value: `false`

4. `debug` (fourth optional argument)

allows you to pass a boolean that indicates whether to run module in debug mode or not. debug mode just logs errors in case any are thrown:

```javascript
const getEventsMap = require('map-events');

const EventsMap = getEventsMap('*', true, true, true); // will run in debug mode
const EventsMap = getEventsMap('*', true, false, false); // will not run in debug mode
```

default value: `false`

## contribution

in addition to this project there is a [website](https://perimeterx.github.io/map-events-website/) that
should show the events map of every (os + browser) combination that ever existed.
in reality however, it shows most of the existing combinations, but not all of them.
the maps were extracted using every existing combination in [browserstack](https://browserstack.com), but even
in browserstack many automatic combinations have failed.
also, the extraction script is not automatic and does not run every
time there's a new browser/os.
contributing to the [JSON](https://github.com/perimeterx/map-events-website/blob/master/data.json) could help a lot with maintaining the map and keeping it as updated and as accurate as possible.
highly appreciated!
