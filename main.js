//#region includes
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const imports = require('./imports')
const mute = require('./mute')
//#endregion
//#region main
client.on('ready', () => {
    client.user.setStatus('dnd');
})
client.on('message', msg =>{
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {type: "WATCHING"}); //long long line...
    
    if(msg.member == null||!msg.member.hasPermission('ADMINISTRATOR')) return;
    
    if(msg.content == '!nuke') imports.nuke(msg); //nuke

    else if(msg.content == '!mutes') imports.mutes(msg); // get muted list

    else if(msg.content.startsWith('!mute')) imports.mute(msg); // mute person
    
    else if(msg.content.startsWith('!unmute')) imports.unmute(msg); //unmute person
  
    else if(msg.content.startsWith('!nigger'))
    {
        
    }
})

client.login(config.token)

//#endregion

