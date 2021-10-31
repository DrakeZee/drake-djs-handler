const client = require("../index");

client.on("interactionCreate", async (interaction) => {
   // ———————————————[Slash Commands]———————————————
   if (interaction.isCommand()) {
      await interaction.deferReply({ ephemeral: false }).catch(() => {});

      const cmd = client.slashCommands.get(interaction.commandName);
      if (!cmd)
         return interaction.followUp({ content: "An error has occured " });

      const args = [];

      for (let option of interaction.options.data) {
         if (option.type === "SUB_COMMAND") {
            if (option.name) args.push(option.name);
            option.options?.forEach((x) => {
               if (x.value) args.push(x.value);
            });
         } else if (option.value) args.push(option.value);
      }
      interaction.member = interaction.guild.members.cache.get(
         interaction.user.id
      );

      cmd.run(client, interaction, args);
   }
   // ———————————————[Buttons]———————————————
   if (interaction.isButton()) {
   }
   // ———————————————[Select Menu]———————————————
   if (interaction.isSelectMenu()) {
   }
   // ———————————————[Context Menu]———————————————
   if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const command = client.slashCommands.get(interaction.commandName);
      if (command) command.run(client, interaction);
   }
});

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