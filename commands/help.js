const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embedInfo = new Discord.RichEmbed()
.setTitle("Komendy")
.setDescription("Na razie jesteśmy w stanie rozumieć te komendy:")
.addField("/ho/help", "FIELD DESCRIPTION")
.addField("/ho/info", "FIELD DESCRIPTION")
.addField("/ho/hello", "FIELD DESCRIPTION")
.addField("/ho/report", "FIELD DESCRIPTION")
.addField("/ho/kick", "FIELD DESCRIPTION")
.addField("/ho/message", "FIELD DESCRIPTION")
.setFooter("No i zawsze możesz nasz przywitać i *hug* <3")
.setColor("#8f8ff1");


return message.channel.send(embedInfo);
}

module.exports.help = {
  name: "help"
}
