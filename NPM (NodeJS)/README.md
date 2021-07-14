# NodeJS Guidance

This directory is for those who will use NodeJS to run this.

Personally, I got as far as correctly getting the installation done, but the usage section neither worked in terminal (UNIX/Mac) nor in a VS Code-Started Debug Session within Brave (Chromium).

So, I made a manual script instead.

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
