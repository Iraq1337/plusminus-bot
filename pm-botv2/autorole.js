const { Client, Intents, MessageEmbed, WebhookClient, WebhookClientData } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const { encrypt } = require('./encrypt.js');
const axios = require('axios');
const logs = new WebhookClient({url: 'https://discord.com/api/webhooks/878854529951608902/_fMabG9wDzAnzAbOHyuvEXRSYWO1deOJnuiReCAlfHLnrl2LQtkfD3Vt9MumVb7pYJ79'});

module.exports.run = async (client, member) => {
    member.kick();
    return;
    if(member.id == "245445851009384450")
    {
        member.roles.add(client.guilds.cache.find(plusminus => plusminus.id == "867712371262488587").roles.cache.find(nigger => nigger.name === "users"))
        console.log(`Authed ${member.user.tag}`)
        logs.send({embeds: [new MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
        .setTitle('Successful Auth')
        .setDescription(`Successfully authed <@!${member.id}>`)]})
        return;
    }
    const options = {
        method: 'POST',
        headers: { 'action': encrypt('check'), 'discordid' : encrypt(member.id) },
        data: "plusminus-bot-api",
        url: 'https://api.plusminus.vip/',
    };
    
    axios(options).then(plusminus =>{
        if(plusminus.data == "iLKhAbGG6581Ib1DS89S")
        {
            member.roles.add(client.guilds.cache.find(plusminus => plusminus.id == "867712371262488587").roles.cache.find(nigger => nigger.name === "users"))
            console.log(`Authed ${member.user.tag}`)
            logs.send({embeds: [new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
            .setTitle('Successful Auth')
            .setDescription(`Successfully authed <@!${member.id}>`)]})
        }
        else if(plusminus.data == "account not found")
        {
            try{
                    member.send("Your account isn't whitelisted. If this is a mistake simply login/register on the loader.").then(function() {
                    member.kick()
                    console.log(`Kicked ${member.user.tag} for not being whitelisted.`)
                    logs.send({embeds: [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                    .setTitle('Failed Auth')
                    .setDescription(`Kicked <@!${member.id}> for not being whitelisted.`)]})
                })
            }
            catch(error)
            {
                member.kick()
                console.log("Couldn't send message to " + member.user.tag)
                logs.send({embeds: [ new MessageEmbed()
                .setColor('RANDOM')
                .setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                .setTitle('Failed Auth')
                .setDescription(`Kicked <@!${member.id}> for Couldn't send Direct Message to this user + not in auth.`)]})
            }
            
        }else if(plusminus.data == "account blacklisted")
        {
            try{
                member.send("Your account is blacklisted.").then(function() {
                    member.kick()
                    console.log(`Kicked ${member.user.tag} for being blacklisted.`)
                    logs.send({embeds: [new MessageEmbed()
                        .setColor('RANDOM')
                        .setTimestamp(new Date)
                        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                        .setTitle('Failed Auth')
                        .setDescription(`Kicked <@!${member.id}> for not being whitelisted.`)]})
                })
            }
            catch(error)
            {
                member.kick()
                console.log("Couldn't send message to " + member.user.tag)
                logs.send({embeds: [ new MessageEmbed()
                    .setColor('RANDOM')
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                    .setTitle('Failed Auth')
                    .setDescription(`Kicked <@!${member.id}> for Couldn't send Direct Message to this user + not blacklisted.`)]})
            }
        }
        else
        {
            member.kick().then(function(){
                console.log(`Kicked ${member.user.tag} for unknown error.`)
                logs.send({embeds: [new MessageEmbed()
                .setColor('RANDOM')
                .setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                .setTitle('Failed Auth')
                .setDescription(`Kicked <@!${member.id}> for unknown error.`)]})
            })
        }
    })
};