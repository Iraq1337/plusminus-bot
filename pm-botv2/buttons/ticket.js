const { Client, Intents, MessageEmbed, Permissions, MessageReaction, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');
const fs = require('fs');
module.exports.run = async (client, i) => {
    var server = client.guilds.cache.find(nigger => nigger.id == "867712371262488587")
    var name = "ticket-" + i.user.username  
    if(server.channels.cache.find(channel => channel.name == name.toLowerCase()))
    {
        i.user.send("You already have an open ticket!")
        await i.reply({content: `Failure: You already have an open ticket!`, ephemeral: true})
        return;
    }

    server.channels.create(name.toLowerCase(), {type: "text", permissionOverwrites:
    [
        {
            id: server.id,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: i.user.id,
            allow: ['VIEW_CHANNEL'],
        },
        {
            id: server.roles.cache.find(role => role.name == "bot-adminperm").id,
            allow: ['VIEW_CHANNEL'],
        },
    ]
    }).then(channel => {
        channel.send({ embeds: [new MessageEmbed()    
        .setDescription('Support will be with you shortly.')
        .setTitle('Tickets')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')],
        components: [
            new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('closeticket')
                .setStyle('DANGER')
                .setLabel('Close Ticket')
            )
        ], content: `<@!${i.user.id}>`})
        i.reply({ content: `Created ticket: <#${channel.id}>`, ephemeral: true});
    });
};
