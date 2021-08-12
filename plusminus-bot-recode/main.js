
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const imports = require('./imports')
const axios = require('axios');
sixhourmute(client)
function sixhourmute(client)
{
    

}
client.on('ready', () => {
    client.user.setStatus('dnd');
    /*var date = new Date()
    console.log(`hours: ${date.getHours()} && minutes ${date.getMinutes()}`)
    if(date.getHours() == "18")
    {
        var server = client.guilds.cache.find(lmao => lmao.name == "plusminus private")
        var aa = server.channels.cache.find(lmao => lmao.name == "chat").clone().then(idk => {
            idk.setPosition(aa.position)
            aa.delete();
            
        })
    }*/
})
client.on('message', msg =>{
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {type: "WATCHING"}); //long long line...
    if(msg.channel.id == "875195664684961902"||msg.member.hasPermission('ADMINISTRATOR'))
    {
        if(msg.content.startsWith('!gay')) imports.gay(msg);
    
        else if(msg.content.startsWith('!nigger')) msg.channel.send(`${msg.mentions.members.first()||msg.author} is ${msg.author.id == "509073024503250944" ? 0 : Math.floor(Math.random() * 100)}% nigger`)
    
        else if(msg.content == ('!commands')) imports.commands(msg);
        
        else if(msg.content == '!mutes') {imports.mutes(msg); return;}// get muted list
    }

    //publicly accessible commands go before this message
    if(msg.member == null||!msg.member.hasPermission('ADMINISTRATOR')) return;
    
    if(msg.content == '!nuke') imports.nuke(msg); //nuke


    else if(msg.content.startsWith('!mute')) imports.mute(msg); // mute person
    
    else if(msg.content.startsWith('!unmute')) imports.unmute(msg); //unmute person
  
    else if(msg.content.startsWith('!lock')) imports.lock(msg); //lock channel
    
    else if(msg.content.startsWith('!unlock')) imports.unlock(msg); //unlock channel

    else if(msg.content.startsWith('!resethwid')) imports.resethwid(msg); //reset hwid (test)

})

client.on('guildMemberAdd', member => {
    if(member.guild.id != "867712371262488587") return;
    imports.autorole(member, client)
})
client.login(config.token)


