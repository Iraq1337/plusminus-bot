
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
    var lmao = client.guilds.cache.find(n => n.name == "plusminus private").channels.cache.find(laaa => laaa.name == "create-ticket")
    lmao.bulkDelete(10)
    lmao.send(new Discord.MessageEmbed()
    .setDescription('React with 🤡 to open a ticket.')
    .setTitle('Tickets')
    .setTimestamp(new Date)
    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')).then( reactions => {
    reactions.react('🤡')
    })
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

    else if(msg.content == "!delete") 
    {
        if(!msg.channel.name.startsWith('ticket')) return;
        msg.channel.send('Deleting ticket in 5 seconds!').then(function(){
            setTimeout(() => {
                msg.channel.delete();
            }, 5050);
        })
    }

})

client.on('guildMemberAdd', member => {
    if(member.guild.id != "867712371262488587") return;
    imports.autorole(member, client)
})
client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name != "🤡") return;
    if(user.id == client.user.id) return;
    var yes = client.guilds.cache.find(nigger => nigger.name == "plusminus private");
    client.guilds.cache.find(nigger => nigger.name == "plusminus private").channels.create('ticket-' + user.username, {type: "text", permissionOverwrites:
    [
        {
            id: yes.id,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
            id: '875743439914958858',
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        }
    ],
    }).then(idk => {
        idk.send(new Discord.MessageEmbed()    
        .setDescription('Support will be with you shortly.')
        .setTitle('Tickets')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png'))
    })

    reaction.users.remove(user);
})
client.login(config.token)


