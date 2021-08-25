const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
client.commands = new Collection();
const config = require('./config.json')
const fs = require('fs');

client.on('ready', () => {
    client.user.setStatus('dnd');
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(error)
        let commands = files.filter(f => f.split(".").pop() === "js")
        if (commands.length <= 0) {
            return console.log("No commands to load")
        }
        console.log(`Loading ${commands.length} commands!`)
        commands.forEach((f,i) => {
            let props = require(`./commands/${f}`)
            console.log(`${f} loaded!`)
            client.commands.set(f, props)
        })
    })
    var tickets = client.guilds.cache.find(n => n.name == "plusminus private").channels.cache.find(laaa => laaa.name == "create-ticket")
    tickets.bulkDelete(10)
    tickets.send({embeds : [new MessageEmbed().setDescription('React with 🤡 to open a ticket.').setTitle('Tickets').setTimestamp(new Date).setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]}).then( reactions => {
        reactions.react('🤡')
    });
});

client.on("messageCreate", message => {
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {type: "WATCHING"}); //long long line...
    if(message.author.id == client.user.id) return;
    if(message.member == undefined||message.member == null) return;
    if(!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command+".js")
    if (cmd) cmd.run(client, message, args)
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name != "🤡") return;
    if(user.id == client.user.id) return;
    var server = client.guilds.cache.find(nigger => nigger.name == "plusminus private")
    var name = "ticket-" + user.username;

    if(server.channels.cache.find(lma => lma.name == name.toLowerCase()))
    {
        reaction.users.remove(user);
        user.send("You've reached your ticket limit!")
        return;
    }

    server.channels.create(name.toLowerCase(), {type: "text", permissionOverwrites:
    [
        {
            id: server.id,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: user.id,
            allow: ['VIEW_CHANNEL'],
        },
        {
            id: server.roles.cache.find(lm => lm.name == "bot-adminperm").id,
            allow: ['VIEW_CHANNEL'],
        },
    ]
    }).then(idk => {
        idk.send({ embeds: [new MessageEmbed()    
        .setDescription('Support will be with you shortly.')
        .setTitle('Tickets')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')], content: `<@!${user.id}>`})
    });
    reaction.users.remove(user);
});

client.on('guildMemberAdd', member => {
    let command = "autorole"
    let cmd = client.commands.get(command+".js")
    if (cmd) cmd.run(client, member)
});
client.login(config.token);