
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

let {body} = await superagent
.get(`http://api.giphy.com/v1/gifs/random?api_key=fsreqhxonBj4YypDt0UjdgHGpirrTa1k&s=#hug&fmt=json`);

let hugembed = new Discord.RichEmbed()
.setColor("pink")
.setTitle("HUG")
.setImage(body.data.images.original.url);

message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug"
}
