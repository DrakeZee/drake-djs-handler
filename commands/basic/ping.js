const Discord = require("discord.js");

module.exports = {
   name: "ping",
   aliases: ["p", "pong"],
   description: "Returns Websocket Ping",
   botpermissions: ["ADMINISTRATOR"],
   usage: "How Fast The Bot is?",
   cooldowns: 2000,
   developersOnly: false,
   toggleOff: false,
   run: async (client, message, args) => {
      message.channel.send(`Pinging...`).then((m4) => {
         setTimeout(() => {
            m4.edit(`\`${client.ws.ping}ms\` is my latency`);
         }, 2000);
      });
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