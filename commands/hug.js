
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let hUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!hUser) return message.channel.send("Nie podałeś kogo chcesz przytulić :c");
let {body} = await superagent
.get(`https://api.tenor.com/v1/random?key=88RODP3HJCA2&q=Anime+hug&safesearch=off`);

let hugembed = new Discord.RichEmbed()
.setColor("#dda6bb")
.addField("Hug!", `${message.author} przytulił(a) ${hUser}`)
.setImage(body.results[0].media[0].gif.url);

message.delete().catch(O_o=>{});

message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug"
}
