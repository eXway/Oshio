
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let hUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!hUser) return message.channel.send("Nie podałeś kogo chcesz przytulić :c")
let {body} = await superagent
.get(`http://api.giphy.com/v1/gifs/random?api_key=fsreqhxonBj4YypDt0UjdgHGpirrTa1k&tag=hug&fmt=json`);

let hugembed = new Discord.RichEmbed()
.setColor("#8f8ff1")
.addField("Hug!", `${message.author} przytulił(a) ${hUser}`)
.setImage(body.data.images.original.url);

message.delete().catch(O_o=>{});

message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug"
}
