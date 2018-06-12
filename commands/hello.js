
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function RANDOM (a) {
    return Math.floor((Math.random() * a));
  }
  let a = RAND(8);
  if ( a == 0 )  return message.channel.send("Siemanko >///<");
  if ( a == 1 )  return message.channel.send("CZEŚĆ!");
  if ( a == 2 )  return message.channel.send("Hejka!");
  if ( a == 3 )  return message.channel.send("NO CO TAM?!");
  if ( a == 4 )  return message.channel.send("No hej!");
  if ( a == 5 )  return message.channel.send("Hej hej c:");
  if ( a == 6 )  return message.channel.send("DOBEREK PANIENKI");
  if ( a == 7 )  return message.channel.send("NIKT NIE SPODZIEWAŁ SIĘ HISZPAŃSKIEJ INKWIZYCJI!");


}

module.exports.help = {
  name: "hello"
}
