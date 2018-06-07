const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    function RAND(n) {
     return Math.floor((Math.random() * n));
    }
  
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
  bot.user.set
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
    !cmd.indexOf("cześć") ||
    !cmd.indexOf("czesc") ||
    !cmd.indexOf("siema") ||
    !cmd.indexOf("elo") ||
    !cmd.indexOf("eló") ||
    !cmd.indexOf("witaj") )
    {
      let a = RAND(7);
      if ( a == 0 )  return message.channel.send("Hej!");
      if ( a == 1 )  return message.channel.send("Witaj!");
      if ( a == 2 )  return message.channel.send("Miło cię tu widzieć!");
      if ( a == 3 )  return message.channel.send("Dzień dobry!");
      if ( a == 4 )  return message.channel.send("Cieszę się, że tu jesteś! ;v;");
      if ( a == 5 )  return message.channel.send("Jak się masz?");
      if ( a == 6 )  return message.channel.send("Jak tam u Ciebie?");
          
                                    
      
    }
       
  if(
    !cmd.indexOf("hara") )
    {
      return message.channel.send("REGUJE KURDE!!!");
    }



})

bot.login(config.token);
