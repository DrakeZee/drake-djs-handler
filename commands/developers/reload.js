const { MessageEmbed } = require("discord.js");
const glob = require("glob");
const chalk = require("chalk");
const { clientname, clientavatar } = require("../../botconfig/main.json");
module.exports = {
   name: "reload",
   cooldowns: 3000,
   description: "Reload Commands",
   usage: "",
   toggleOff: false,
   developersOnly: true,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],
   run: async (client, message, args) => {
      client.commands.sweep(() => true);
      glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
         if (err) return console.log(err);
         filePaths.forEach((file) => {
            delete require.cache[require.resolve(file)];

            const pull = require(file);
            if (pull.name) {
               console.log(
                  chalk.red("✪ ") +
                     chalk.blue(`Reloaded `) +
                     chalk.green(`${pull.name} `) +
                     chalk.blue(`Command`)
               );
               client.commands.set(pull.name, pull);
            }

            if (pull.aliases && Array.isArray(pull.aliases)) {
               pull.aliases.forEach((alias) => {
                  client.aliases.set(alias, pull.name);
               });
            }
         });
      });
      let reload_embed = new MessageEmbed()
         .setTitle(`:white_check_mark: | Reloaded All Commands`)
         .setColor("GREEN")
         .setFooter(`${clientname}`, `${clientavatar}`)
         .setTimestamp();
      message.reply({ embeds: [reload_embed] });
   },
};

/*
 * ———————————————[Credits]———————————————
 * Made by : DrakeZee#5223
 * Support Server : dsc.gg/BotsWay 
 * Youtube : youtube.com/DrakeZee
 * Please Help Me Reach 1k Subs DJs Codes And More Amazing * Stuff!
 * Also Add Me Friend When Using This, I Have No Friends :(
 * 
 * This Was Only Possible By Following People :
 *
 * recon#8448  | youtube.com/reconlxx | discord.gg/recon
 * Tomato#6966 | milrato.dev         | discord.gg/milrato
 */