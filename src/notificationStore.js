import observable from '@riotjs/observable'

/**
 *  NotificationService
 *
 *  @author Björn Hase
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/tiny-components/notification
 *
 */
export default observable({

    SUCCESS: 'success',
    DANGER:  'danger',
    INFO:    'info',

    /**
     *  adding success notification
     *
     */
    success(message) {
        this._add(message, this.SUCCESS)
    },

    /**
     *
     *
     */
    danger(message) {
        this._add(message, this.DANGER)
    },

    /**
     *
     *
     */
    info(message) {
        this._add(message, this.INFO)
    },

    /**
     *
     *  @param {[type]} message  [description]
     *  @param {[type]} type     [description]
     */
    _add(message, type) {
        this.trigger('append', {
            message: message,
            type: type
        })
    }
})