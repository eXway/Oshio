const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

let hugembed = new Discord.RichEmbed()
.setColor("#dda6bb")
.addField("Kotek! <3")
.setImage(http://thecatapi.com/api/images/get?format=xml);

message.channel.send(hugembed);

}

module.exports.help = {
  name: "cat"
}
