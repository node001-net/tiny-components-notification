# Tiny Components - Notification

Created with [Riot.js](https://riot.js.org)

Handle notification by using [Plain-UI](https://plain-ui.com) and [Observable](https://github.com/riot/observable)

## Install

```
npm install @tiny-components\notification --save
```

## You can use it like this

Add to your App once, don't forget to register and mount,

```
<tiny-notification></tiny-notification>
```

Call function anywhere, to run through the store and display a notification.

```
import notificationStore from './@tiny-components/notification/src/notificationStore.js'
notificationStore.danger('Error! Something is wrong')
```

## Options

| attribute | values |
|---|---|
| wrapper-class |   |
| timeout  |   |

