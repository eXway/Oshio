const config = require("./config.json");
const key = process.env.oshioId;
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
      let randWelc = RAND(8);
      if ( randWelc == 0 )  return message.channel.send("Siemanko >///<");
      if ( randWelc == 1 )  return message.channel.send("CZEŚĆ!");
      if ( randWelc == 2 )  return message.channel.send("Hejka!");
      if ( randWelc == 3 )  return message.channel.send("NO CO TAM?!");
      if ( randWelc == 4 )  return message.channel.send("No hej!");
      if ( randWelc == 5 )  return message.channel.send("Hej hej c:");
      if ( randWelc == 6 )  return message.channel.send("DOBEREK PANIENKI");
      if ( randWelc == 7 )  return message.channel.send("NIKT NIE SPODZIEWAŁ SIĘ HISZPAŃSKIEJ INKWIZYCJI! XD");
    }

      if(
    message.content.toLowerCase().search("ubóstwiam") > -1 ||
    message.content.toLowerCase().search("uwielbiam") > -1 )
  {
   let randCurse = RAND(3);
   if (randCurse == 0) return message.channel.send("Awwww~ <3");
   if (randCurse == 1) return message.channel.send("Ty też?!");
   if (randCurse == 2) return message.channel.send("Miłość rośnie wokół nas");
  }

  if(
    message.content.toLowerCase().search("oshio") > -1 )
    {
      let randOshio = RAND(6);
      if (randOshio == 0) return message.channel.send("Tak? :D");
      if (randOshio == 1) return message.channel.send("No ja! >.<");
      if (randOshio == 2) return message.channel.send("Lubisz mnie *pokeować* co?");
      if (randOshio == 3) return message.channel.send("To już robi się dziwne T^T");
      if (randOshio == 4) return message.channel.send("Słucham cię, kochanie *lenny*");
    }
    
    if(
       message.content.toLowerCase().search("za moich czasów") > -1 || 
       message.content.toLowerCase().search("za moich czasow") > -1 ||
       message.content.toLowerCase().search("zamoichczasów") > -1 ||
       message.content.toLowerCase().search("kiedy byłem") > -1 ||
       message.content.toLowerCase().search("kiedyś to było") > -1 ||
       message.content.toLowerCase().search("kiedy byłam") > -1 ||
       message.content.toLowerCase().search("zamoichczasow") > -1) {
        return message.channel.send("OK, boomer");
      }

    if(
      !cmd.indexOf("buru")||
      !cmd.indexOf("buru buru"))
      {
        let randOshio = RAND(3);
        if (randOshio == 0) return message.channel.send("Buru~");
        if (randOshio == 1) return message.channel.send("Buru buru!");
        if (randOshio == 2) return message.channel.send("Nie bawię się w to. ಠ益ಠ");
      }
   
    if (message.content === 'Poka avatara') {
         message.reply("Proszę bardzo\<3: " + message.author.avatarURL);
    }




})

bot.login(key);
