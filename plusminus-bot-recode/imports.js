const mute = require('./mute')
const unmute = require('./unmute')
const mutes = require('./mutes')
const nuke = require('./nuke')
const lock = require('./lock')
const unlock = require('./unlock')
const gay = require('./gay')
const commands = require('./commands')

module.exports.commands = commands.commands;
module.exports.unlock = unlock.unlock;
module.exports.lock = lock.lock;
module.exports.nuke = nuke.nuke;
module.exports.unmute = unmute.unmute;
module.exports.mute = mute.mute;
module.exports.mutes = mutes.mutes;
module.exports.gay = gay.gay;