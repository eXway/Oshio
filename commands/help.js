const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embedInfo = new Discord.RichEmbed()
.setTitle("Komendy")
.addField("/ho/hug", "Przytulas! :bear: ")
.addField("/ho/kiss", "Kisski <3")
.addField("/ho/hello", "Przywitaj się! o/")
.setFooter("No i zawsze odpowiemy na wasze przywitania! <3")
.setColor("#dda6bb");


return message.channel.send(embedInfo);
}

module.exports.help = {
  name: "help"
}
