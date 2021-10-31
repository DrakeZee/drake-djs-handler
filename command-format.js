const Discord = require("discord.js");
//Import Packages

module.exports = {
   name: "nameOfTheCommand",
   //Name Of The Command
   aliases: ["alias1", "alias2", "alias3"],
   //Aliases For Command.
   cooldowns: 1000, //1 second
   //Cooldown For The Command [Milliseconds]
   description: "This Command Tells About You",
   //Description Of The Command [The Purpose Etc...]
   usage: "<user>",
   //Usage For Command. [like ?nameOfTheCommand <user> <reason>]
   toggleOff: false,
   //Disable The Command If Emergency. [true = off | false = on]
   developersOnly: false,
   //If Command Is Only For Bot Owners. [true = yes | false = no]
   /*
    To Make Yourself Developer, Go Ahead to 
    botconfig/main.json, set the ids in it. 
*/
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   //Permissions Required For The Author To Use The CMD.
   botpermissions: ["ADMINISTRATOR"],
   //Permissions Required For The Bot To Run The CMD.

   run: async (client, message, args) => {
      const member = message.mentions.members.first();
      if (!member) return message.reply("Provide Some User To Tell About...");

      message.reply(`About ${member}: \`He/She Looks Cool!\``);
   },
};
