const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

let catembed = new Discord.RichEmbed()
.setColor("#dda6bb")
.addField("Kotek! <3", "Darmowy słodziak dla ciebie!)
.setImage("http://thecatapi.com/api/images/get?format=src");

message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
