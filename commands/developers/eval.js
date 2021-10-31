const { MessageEmbed } = require("discord.js");
module.exports = {
   name: "eval",
   aliases: ["e"],
   cooldowns: 3000,
   description: "Evaluate Code",
   usage: "<code>",
   toggleOff: false,
   developersOnly: true,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],
   description: "Evaluate a given code!",

   run: async (client, message, args) => {
      try {
         const code = args.join(" ");
         if (!code) {
            return message.channel.send("Please Provide A code to eval!");
         }
         let evaled = eval(code);

         if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

         let embed = new MessageEmbed()
            .setAuthor("Eval", message.author.avatarURL())
            .addField("Input", `\`\`\`${code}\`\`\``)
            .addField("Output", `\`\`\`${evaled}\`\`\``)
            .setColor("BLUE");

         message.channel.send({ embeds: [embed] });
      } catch (err) {
         message.channel.send(`\`ERROR\` \`\`\`js\n${err}\n\`\`\``);
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