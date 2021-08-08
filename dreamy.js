const Discord = require('discord.js');
const client = new Discord.Client();
const randomcolor = require('randomcolor');
const dreamy = require('./dreamy.json')
//#region joins
client.on('guildMemberAdd', member => {
    var joins = client.channels.cache.find(idk => idk.id == "872965690133475329")
    var testyvesty = member;
    joins.send(`${testyvesty}`)
    joins.send(new Discord.MessageEmbed()
        .setTitle('**A new player joined!**')
        .setDescription(`Welcome to Dreamys Palace, ${testyvesty}!`)
        .setColor('#66FF33')
        .setTimestamp(new Date)
        .setFooter(`There are currently ${member.guild.memberCount} members in this discord!`,'https://cdn.discordapp.com/icons/872558370568167485/c4e996f6d31000dec61431e514e6dc65.webp?size=128'))
})
client.on('guildMemberRemove',member => {
    var joins = client.channels.cache.find(idk => idk.id == "872965690133475329")
    var testyvesty = member;
    joins.send(`${testyvesty}`)
    joins.send(new Discord.MessageEmbed()
        .setTitle('**A player left the server!**')
        .setDescription(`Goodbye, ${testyvesty.displayName}!`)
        .setColor('ff0000')
        .setTimestamp(new Date)
        .setFooter(`There are currently ${member.guild.memberCount} members in this discord!`,'https://cdn.discordapp.com/icons/872558370568167485/c4e996f6d31000dec61431e514e6dc65.webp?size=128'))
})
//#endregion

client.on('message', async (msg) => {
    if(msg.content == '!tickets update')
    {
        var ticketchannel = client.channels.cache.find(idk => idk.name == "tickets")
        try {
            ticketchannel.bulkDelete(10);
        }
        catch (error)
        {
            console.log('ERROR: ' + error)
        }
        ticketchannel.send(new Discord.MessageEmbed()
        .setColor('#66FF33')
        .setTitle('Tickets')
        .setDescription('To open a ticket react with "🎟️".')
        .setFooter('Dreamys Palace','https://cdn.discordapp.com/icons/872558370568167485/c4e996f6d31000dec61431e514e6dc65.webp?size=128')).then(abc =>{
            abc.react('🎟️')
        })
    }
    if(msg.content == '!close')
    {
        if(msg.channel.name.includes('ticket'))
        {
            msg.channel.send(new Discord.MessageEmbed()
            .setColor(randomcolor())
            .setTitle('Delete')
            .setDescription('Deleting ticket in 5 seconds!')).then( () => {
                setTimeout(function() {
                    msg.channel.delete();
                }, 5000)
            })
        }
    }
    if(msg.content == '!nuke')
    {
        msg.channel.clone().then(newchan =>{
            newchan.setPosition(msg.channel.position)
            msg.channel.delete()
            newchan.send('nuked.')
        })
    }
})
client.on('messageReactionAdd', (reaction, user) => {

    if(!reaction.emoji.name === '🎟️') return;
    if(user.id == client.user.id) return;
    var server = client.guilds.cache.find(server => server.name === "Dreamys Palace");
    server.channels.create('Ticket-' + user.username, {
        type: "text",
        permissionOverwrites: [
            {
                id: server.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: user.id,
                allow: ['VIEW_CHANNEL'],
            }
        ]
    }).then(new_channel => {
        new_channel.setParent('874026138186444880')
        new_channel.send(`<@!${user.id}>`)
        new_channel.send(new Discord.MessageEmbed()
        .setColor(randomcolor())
        .setTitle('Ticket-' + user.username)
        .setDescription('Support will be with you shortly.')
        .setTimestamp(new Date))
    })
    reaction.users.remove(user.id)
    
})
client.login(dreamy.token);