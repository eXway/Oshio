const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => { 
  if(!message.member.roles.some(r=>["Administrator HO", "Administrator Discord"].includes(r.name)) || (message.author == 215420153221873665) )
  return message.reply("Nie możesz użyć tej komendy");
  
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);

}

module.exports.help = {
  name: "sayo"
}
