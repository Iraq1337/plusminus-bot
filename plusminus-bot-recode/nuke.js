const Discord = require('discord.js');
const randomcolor = require('randomcolor');
function nuke(msg)
{
    msg.channel.clone().then(new_channel =>{
        new_channel.setPosition(msg.channel.position)
        new_channel.send('https://tenor.com/view/nuke-automic-boom-boom-nuked-gif-19961792')
        msg.channel.delete();
    })
}
function sixhournuke(client)
{

}
module.exports.nuke = nuke;