const mute = require('./mute')
const unmute = require('./unmute')
const mutes = require('./mutes')
const nuke = require('./nuke')
const lock = require('./lock')
const unlock = require('./unlock')

module.exports.unlock = unlock.unlock;
module.exports.lock = lock.lock;
module.exports.nuke = nuke.nuke;
module.exports.unmute = unmute.unmute;
module.exports.mute = mute.mute;
module.exports.mutes = mutes.mutes;