
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let hUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!hUser) {
  if (args == "mnie" ){
    else return message.channel.send("Nie podałeś kogo chcesz przytulić :c");}}
let {body} = await superagent
.get(`http://api.giphy.com/v1/gifs/random?api_key=fsreqhxonBj4YypDt0UjdgHGpirrTa1k&tag=couple-hug&fmt=json`);

let hugembed = new Discord.RichEmbed()
.setColor("#dda6bb")
.addField("Hug!", `${message.author} przytulił(a) ${hUser}`)
.setImage(body.data.images.original.url);

message.delete().catch(O_o=>{});

message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug"
}
