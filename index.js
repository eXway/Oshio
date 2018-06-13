const config = require("./config.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

    function RAND(n) {
     return Math.floor((Math.random() * n));
    }

fs.readdir("./commands/", (err, files) => { // Commands .js file

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Coś jest nie tak z komendami :c");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Komenda ${f} załadowana!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async() => { // po zalogowaniu
  console.log(`${bot.user.username} jest zalogowany!`);
  bot.user.setActivity("/ho/hug", {type: "WATCHING"});
});


bot.on("message", async message => { // czyta wiadomosci
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" "); //To co po spacji nie jest messageArray
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1); //po spacji


let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);


//przywitania
  if(
    !cmd.indexOf("hej") ||
    !cmd.indexOf("czesc") ||
    !cmd.indexOf("siem") ||
    !cmd.indexOf("eló") )
    {
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

  if(
    !cmd.indexOf("oshio") )
    {
      return message.channel.send("Tak? :D");
    }



})

bot.login(config.token);
