const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

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



// TEST
  if(cmd === `test`){
    return message.channel.send("test");
}
//przywitania
  if(
    !cmd.indexOf("hej") ||
    !cmd.indexOf("cześć") ||
    !cmd.indexOf("czesc") ||
    !cmd.indexOf("siema") ||
    !cmd.indexOf("elo") ||
    !cmd.indexOf("eló") ||
    (!message.indexOf("gitara") && !message.indexOf("siema")) ||
    !cmd.indexOf("witaj") )
    {
      return message.channel.send("No siemaneczko");
    }



})

bot.login(config.token);
