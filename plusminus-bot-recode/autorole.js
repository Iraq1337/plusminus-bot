const Discord = require('discord.js');
const randomcolor = require('randomcolor');
const axios = require('axios');
function autorole(member, client)
{
    const options = {
        method: 'POST',
        headers: { 'discordid' : member.id },
        data: "plusminus-bot-api",
        url: 'https://auth.plusminus.vip/checkdisc',
    };
    axios(options).then(plusminus =>{
        if(plusminus.data == "iLKhAbGG6581Ib1DS89S")
        {
            member.roles.add(client.guilds.cache.find(plusminus => plusminus.name == "plusminus private").roles.cache.find(nigger => nigger.name === "users"))
            console.log(`Authed ${member.user.tag}`)
        }
        else if(plusminus.data == "account not found")
        {
            member.send("Your account isn't whitelisted. If this is a mistake simply login/register on the loader.").then(function() {
                member.kick()
                console.log(`Kicked ${member.user.tag} for not being whitelisted.`)
            })
            
        }
        else
        {
            member.kick().then(function(){
                console.log(`Kicked ${member.user.tag} for unknown error.`)
            })
        }
    })

}
module.exports.autorole = autorole;