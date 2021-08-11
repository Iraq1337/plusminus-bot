
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const imports = require('./imports')

client.on('ready', () => {
    client.user.setStatus('dnd');
})
client.on('message', msg =>{
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {type: "WATCHING"}); //long long line...
    if(msg.content.startsWith('!gay')) imports.gay(msg);
    
    else if(msg.content == ('!commands')) imports.commands(msg);
    
    else if(msg.content == '!mutes') imports.mutes(msg); // get muted list
    //publicly accessible commands go before this message
    if(msg.member == null||!msg.member.hasPermission('ADMINISTRATOR')) return;
    
    if(msg.content == '!nuke') imports.nuke(msg); //nuke


    else if(msg.content.startsWith('!mute')) imports.mute(msg); // mute person
    
    else if(msg.content.startsWith('!unmute')) imports.unmute(msg); //unmute person
  
    else if(msg.content.startsWith('!lock')) imports.lock(msg); //lock channel
    
    else if(msg.content.startsWith('!unlock')) imports.unlock(msg); //unlock channel
    

})

client.on('guildMemberAdd', member => {
    client.guilds.cache.find(plusminus => plusminus.name == "plusminus private")

})
client.login(config.token)


