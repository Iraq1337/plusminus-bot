const { Client, Intents, Collection, MessageEmbed, MessageButton, MessageReaction, MessageActionRow } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
client.commands = new Collection();
client.buttons = new Collection();
const config = require('./config.json');
const fs = require('fs');
const autorole = require('./autorole.js');
const {encrypt, decrypt} = require('./encrypt.js');

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
    fs.readdir("./buttons/", (err, files) => {
        if(err) console.error(error)
        let buttons = files.filter(f => f.split(".").pop() === "js")
        if (buttons.length <= 0) {
            return console.log("No buttons to load")
        }
        console.log(`Loading ${buttons.length} buttons!`)
        buttons.forEach((f,i) => {
            let props = require(`./buttons/${f}`)
            console.log(`${f} loaded!`)
            client.buttons.set(f, props)
        })
    })
    var tickets = client.guilds.cache.find(n => n.id == "867712371262488587").channels.cache.find(laaa => laaa.name == "create-ticket")
    /*tickets.send({embeds : [
        new MessageEmbed()
        .setDescription('Press the button to open a ticket.')
        .setTitle('Tickets')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')], 
        components: [
            new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('ticket')
                .setStyle('PRIMARY')
                .setLabel('Create Ticket')
            )
        ]}).catch(error => {
            console.warn(error)
        })*/
});

client.on("messageCreate", message => {
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.id == "867712371262488587").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {type: "WATCHING"}); //long long line...
    if(message.author.id == client.user.id) return;
    if(message.member == undefined||message.member == null) return;
    if(message.channel.id == "879567588231876608" && message.attachments.size <= 0 && message.author.id != "878616327781253180" ||message.channel.id == "879567588231876608" && message.attachments.size <= 0 && message.author.id != "509073024503250944")
    {
        message.delete();
        return;
    }
    if(!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command+".js")
    if (cmd) cmd.run(client, message, args)
});
client.on('interactionCreate', i => {
    if(!i.isButton()) return;

    let button = i.customId;

    let exec = client.buttons.get(button+".js")
    if (exec) exec.run(client, i); 
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name != "🤡") return;
    if(reaction.message.channel.id != "875738922112647229") return;
    if(user.id == client.user.id) return;
  
});

client.on('guildMemberAdd', member => {
    if(member.guild.id != "867712371262488587") return;

    autorole.run(client, member);

});
client.login(decrypt(config.token));