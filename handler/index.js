const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);
const mainjson = require("../botconfig/main.json");
const chalk = require("chalk");

module.exports = async (client) => {
  // ———————————————[Commands]———————————————
  const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
  commandFiles.map((value) => {
    const file = require(value);
    const splitted = value.split("/");
    const directory = splitted[splitted.length - 2];

    if (file.name) {
      const properties = { directory, ...file };
      client.commands.set(file.name, properties);
    }
  });

  // ———————————————[Events]———————————————
  const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
  eventFiles.map((value) => require(value));

  // ———————————————[Slash Commands]———————————————
  const slashCommands = await globPromise(
    `${process.cwd()}/SlashCommands/*/*.js`
  );

  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);

    if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
    arrayOfSlashCommands.push(file);
  });
  client.on("ready", async () => {
    // Register for a single guild
    if (mainjson.TestingServerID === "Your Server ID") {
      console.log(chalk.gray("—————————————————————————————————"));
      console.log(
        chalk.white("["),
        chalk.red.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Couldn't Find ServerID to set the Slash Cmds")
      );
      console.log(chalk.gray("—————————————————————————————————"));
      console.log(chalk.magenta("Please Fix it with following methods."));
      console.log(
        chalk.yellow.bold("1.) ") +
          chalk.cyan("Go to ") +
          chalk.red.underline("botconfig/main.json") +
          chalk.cyan(" and put your \nSupportServer/TestServer ID in the") +
          chalk.red(" TestingServerID String!")
      );
      console.log(
        chalk.yellow.bold("2.) ") +
          chalk.cyan("Use Global Slash Commands by changing line no 74 to\n") +
          chalk.blue.bold.underline(
            " await client.application.commands.set(arrayOfSlashCommands);\n"
          ) +
          chalk.cyan(" in the else statement.")
      );
      console.log(
        chalk.green.bold("Still Need Help? Contact Me:\n") +
          chalk.yellow.italic("Discord: DrakeZee#5223\n") +
          chalk.yellow.italic("Discord Server: dsc.gg/botsway")
      );
    } else {
      await client.guilds.cache
        .get(mainjson.TestingServerID)
        .commands.set(arrayOfSlashCommands);

      // Register for all the guilds the bot is in
      // await client.application.commands.set(arrayOfSlashCommands);
    }
  });
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
