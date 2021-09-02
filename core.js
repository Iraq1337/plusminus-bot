const { Client, Collection, MessageEmbed, Intents, MessageActionRow, MessageButton, Message } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
client.commands = new Collection();
const settings = require('./settings.json');
const fs = require('fs');

client.on('ready', () => {
    client.user.setStatus('dnd');
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err)
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

});

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	console.log(interaction.customId);      
    if(interaction.customId.toLocaleLowerCase() == "test")
    {
        interaction.update({ephemeral: true, components: 2})
        setTimeout(() => {
            interaction.update({ephemeral: true, components: [
                new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('test')
                    .setLabel('test')
                    .setStyle('DANGER'),)
    
            ] })
        }, 2000);
    }
});


client.on('messageCreate', message => {
    if(message.author.id == client.user.id) return;
    if(message.member == undefined||message.member == null) return;
    if(!message.content.startsWith(settings.prefix)) return;
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command+".js")
    if (cmd) cmd.run(client, message, args)
})

client.login(process.env.token);