const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {    
    
      if(!message.member.hasPermission(["Administrator HO", "Administrator Discord"]) ) return message.channel.send("NIE MASZ PRAW ZWYKŁY CZŁOWIEKU");
      const sayMessage = args.join(" ");

      message.delete().catch();
      return message.channel.send(sayMessage);
}

module.exports.help = {
  name: "sayo"
}
