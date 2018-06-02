const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embedInfo = new Discord.RichEmbed()
.setTitle("Komendy")
.setDescription("Na razie jesteśmy w stanie rozumieć te komendy:")
.addField("/ho/help", "Jesteś tutaj! :P")
.addField("/ho/info", "Trochę informacji o nas")
.addField("/ho/hello", "Przywitaj się! o/")
.addField("/ho/report", "Zgłoś kogoś ( ale po cichu~ )")
.setFooter("No i zawsze możesz nasz przywitać i *hug* <3")
.setColor("#8f8ff1");


return message.channel.send(embedInfo);
}

module.exports.help = {
  name: "help"
}
