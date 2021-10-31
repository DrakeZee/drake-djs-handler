const { MessageEmbed, Message, Discord } = require("discord.js");
const { readdirSync } = require("fs");
const ms = require("ms");
const prefix = "x?";
let color = "#2F3136";

module.exports = {
   name: "cmdhelp",
   aliases: ["ch"],
   cooldowns: 3000,
   description: "Tells Information About Commands",
   usage: "<cmd name>",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],
   run: async (client, message, args) => {
      if (!args[0]) {
         message.reply("Please Give A Command Name...");
      } else {
         let cots = [];
         let catts = [];

         readdirSync("./commands/").forEach((dir) => {
            if (dir.toLowerCase() !== args[0].toLowerCase()) return;

            const commands = readdirSync(`./commands/${dir}`).filter((file) =>
               file.endsWith(".js")
            );

            const cmds = commands.map((command) => {
               let file = require(`../../commands/${dir}/${command}`);

               if (!file.name) return "No command name.";

               let name = file.name.replace(".js", "");

               let des = client.commands.get(name).description;
               let emo = client.commands.get(name).emoji;

               let obj = {
                  cname: `${emo ? emo : ""} - \`${name}\``,
                  des,
               };

               return obj;
            });

            let dota = new Object();

            cmds.map((co) => {
               dota = {
                  name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                  value: co.des ? co.des : "No Description",
                  inline: true,
               };
               catts.push(dota);
            });

            cots.push(dir.toLowerCase());
         });

         const command =
            client.commands.get(args[0].toLowerCase()) ||
            client.commands.find(
               (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
            );

         if (cots.includes(args[0].toLowerCase())) {
            return;
         }

         if (!command) {
            const embed = new MessageEmbed()
               .setTitle(
                  `Invalid command! Use \`${prefix}help\` for all of my commands!`
               )
               .setColor("RED");
            return message.channel.send({ embeds: [embed] });
         }

         const embed = new MessageEmbed()
            .setTitle("Command Details:")
            .addField(
               "Command:",
               command.name ? `${command.name}` : "No name for this command."
            )
            .addField(
               "Aliases:",
               command.aliases
                  ? `${command.aliases.join(" ,")}`
                  : "No aliases for this command."
            )
            .addField(
               "Cooldowns:",
               command.cooldowns ? `${ms(command.cooldowns)}` : `None.`
            )
            .addField(
               "Description:",
               command.description
                  ? command.description
                  : "No description for this command."
            )
            .addField(
               "Usage:",
               command.usage
                  ? `${prefix}${command.name} ${command.usage}`
                  : `${prefix}${command.name}`
            )
            .addField(
               "Command Status:",
               command.toggleOff ? `Offline` : `Online`
            )
            .addField("DevelopersOnly:", command.developersOnly ? `Yes` : `No`)
            .addField(
               "Bot-Permissions Required:",
               command.botpermissions
                  ? `${command.botpermissions.join(", ")}`
                  : `None`
            )
            .addField(
               "User-Permissions Required:",
               command.memberpermissions
                  ? `${command.memberpermissions.join(", ")}`
                  : `None`
            )

            .setFooter(
               `Requested by ${message.author.tag}`,
               message.author.displayAvatarURL({
                  dynamic: true,
               })
            )
            .setTimestamp()
            .setColor("BLURPLE");
         return message.channel.send({ embeds: [embed] });
      }
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