import * as riot from 'riot'

import TinyNotification from './notification.riot'
import ExampleActionButton from './example-action-button.riot'

riot.register('tiny-notification', TinyNotification)
riot.register('example-action-button', ExampleActionButton)

riot.mount('tiny-notification')
riot.mount('example-action-button')