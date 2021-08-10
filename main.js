//#region includes
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./config.json');
const randomcolor = require('randomcolor')
//#endregion

//#region main

client.on('message', msg =>{
    if(!msg.author.id == '509073024503250944'||!msg.author.id == '867824566155870289') return; //check if author is Iraq or OOM
    if(msg.content == '!nuke')
    {
        msg.channel.clone().then(new_channel =>{
            new_channel.setPosition(msg.channel.position)
            new_channel.send('https://tenor.com/view/nuke-automic-boom-boom-nuked-gif-19961792')
            msg.channel.delete();
        })
    }  
    else if(msg.content.startsWith('!mute'))
    {
        var user = msg.mentions.members.first();
        var role = msg.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.add(role)
        msg.channel.send(new Discord.MessageEmbed().setColor(randomcolor()).setDescription(`Successfully muted ${user}!`).setTitle('Mute').setTimestamp(new Date))
    }
    else if(msg.content == '!mutes')
    {
        var ppl = msg.guild.roles.cache.get('874661566656684082').members.map().id
        msg.reply('RESULT: ' + ppl)
    }

})

client.login(config.token)
//#endregion

