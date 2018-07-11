const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {    
    
      if(!message.member.hasPermission(["Administrator HO", "Administrator Discord"]) || (message.author.id == !215420153221873665) return;
      const sayMessage = args.join(" ");

      message.delete().catch();
      return message.channel.send(sayMessage);
}

module.exports.help = {
  name: "sayo"
}
