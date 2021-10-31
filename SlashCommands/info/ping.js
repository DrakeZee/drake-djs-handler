const { Client, CommandInteraction } = require("discord.js");

module.exports = {
   name: "ping",
   description: "returns websocket ping",
   type: "CHAT_INPUT",
   run: async (client, interaction, args) => {
      interaction.followUp({ content: `${client.ws.ping}ms!` });
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