![xd4](https://media.discordapp.net/attachments/884758267107106861/903701669177589780/Command_handler.png)


# Drake-DJs-Handler

Ultimate, efficient, easy-to-use and simple-to-setup Command handler for Discord bots. [Beginner Friendly] 

Made By [DrakeZee#5223](https://youtube.com/DrakeZee) || [Tutorial](https://youtube.com/DrakeZee) [Soon]   
Support: [Discord Server](https://dsc.gg/BotsWay)

If your having errors then you didn't follow this big guide :)
#
## Installation Guide

- Have **node.js v16.6**. (To get on Replit, join this [Discord Server](https://dsc.gg/botsway))


- `node .` to Start The Bot.


- `npm start` for replit. (Run button)


- `npm install` to Install Packages/dependencies. 


- If your having `node:events` error then update your node version.   [Support Server](https://dsc.gg/botsway)


- If your using SlashCommands for your bot using this handler, Please make sure to **Invite your bot from discord.dev Oauth Section with `application.commands` scope**! ([Learn more](https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands))


- Put Your Bot Token in `./botconfig/main.json` inside the clienttoken string. If your using replit, it's suggested to keep your token in env. So leave the string empty and make new secret inside Secrets, name it `clienttoken` and put your token inside it. Either you can go to `index.js` And Set It There (Not Recommended). 


- Go to `./botconfig/main.json` and set your  __ClientName__ (Bot Name), __ClientID__ (Bot ID), Most importantly the **TestingServerID** (The bot's support/test server where it will load slash commands), and the **Prefix** (Default: *?*). 


- When Setting up `./botconfig/main.json`, Also Set The 
**DeveloperIDs** (Bot Owners), **clientavatar** (Bot's PFP Link For Embeds), **randomMessages_Cooldown** (Messages For Cooldown Like Dank Memer). Not necessary.


- Also Set Your Bot's Status In `./events/ready.js`


- Note : You have to make folders in `lowercase` to use the help command otherwise it will throw errors.
#
## Features

- **Aliases**, **Cooldowns**, **Descriptions**, **Usages** And More Systems.
- **ToggleOff** CMD System (*If your command is bugged or in beta, it's a good suggestion to keep it "Un-usable" for the users.*)
- **DevelopersOnly** System (*You should use this for commands like eval etc. It makes it "Un-usable" for the users, but not for the developers of the bot.*)
- **Sub-Folders** (*Make as many folders as you want, just keep it clean `;)`*) 
- **Dynamic Help Command** With Menus [*Works With Reload CMD /Sub-Folders Aswell*] (*To use it, please read a little below for the guide...*) 
- **Command help** (*Tells Information About Command*)
- **Reload Command** (*Inside Sub-folders aswell*)
- **Anti-Crash** System (*Doesn't let your bot crash...*)
- **Event Handler**
- **Permission Handler** (*Manages user-perms and bot-perms for cmds.*)
- **Slash Command Handler** (*Manage Slash Commands*)
- **OP Ready Message** (*When your bot is ready, it pops up some information/statistics about it on the console...)*
- **Eval Command** (*For Evaluating Some Code*)
- **Buttons**, **SelectMenus**, **ContextMenus** Handling
- And Much More...


#
## Help Command
[**FOLDER === CATEGORY KIND OF STUFF**]

While using the help command, please make sure you mention the folder name in `./botconfig/help.json`.

For example, you made a new folder/category "**developers**" inside the `./commands` folder. If your actually using the help command, you need to provide a emoji for every folder/category. As folder is like a category here and it will show the emoji and folder name on the **SelectMenus**.

To provide a emoji, go to `./botconfig/help.json`, write 
`"folderName": "Emoji"` and write a comma [`,`] after it if it shows error... [`Basics of Json`]  
Once you give a emoji to it, it will show the emoji on Menu for the Folder.
If you want no emoji for the folder/category, just leave the string empty but you've to mention it or errors might occur.

**NOTE**: Emojis MUST BE IN UNICODE! Typing :flush: etc in the emoji string won't work! The way you put emoji in a discord channel name, is the same way of putting emojies in the string! :) 

### Pictures :
![xd](https://media.discordapp.net/attachments/884758267107106861/901798511962624080/unknown.png)

Here you can see my commands folder... 
i've made developers folder inside developers folder,
and a different folder named basic [lowercase only].

![xd2](https://media.discordapp.net/attachments/884758267107106861/901798633274482758/unknown.png)

Here's my json file... i wanted to have no emoji for developers folder and wanted a thumbsup emoji for basic folder. Note that i have used not used :thumbsup: because it wont work...
You just need to mention your folders in help.json like that and your ready to use help command! if you find this hard, Just delete help command and help.json i guess....



`Questions About Help Command`

1) **What happens with the help command if i keep the sub folder name same? like inside developers folder i made new folder developers inside it, how will the emojies and commands show and work?**

Answer: *If you keep the folder name and the sub-folder name same, it won't show errors, but it will combine them to one Category! like if you made developers folder and inside the folder you made new folder named developers, when you will use the help command it will automatically show commands inside both the folders as the name is the same... and it will show as the same menu option.*

![xd4](https://media.discordapp.net/attachments/884758267107106861/901804593145585674/unknown.png)
#
## More Information
- Use command template from `command-template.js` file for making new commands!
- `command-format.js` file is for explanation of the template.
- If you do not fill the stuff in `./botconfig/main.json`, you'll get some errors. Please put your testing server id and client token to fix it.
- if you do not mention the folders for help command it will throw an error!
- Make your code look clean using [prettier.io](https://prettier.io/)
- If you want your **Slash Commands** to be global then just change line 74 in `./handler/index.js` to 
```javascript
await client.application.commands.set(arrayOfSlashCommands)
```


#
## Bugs
Main bugs which have been noticed are listed below.
1.) When you don't put your token anti-Crash doesn't work.   
2.) Sometimes Anti-Crash doesn't work.   
3.) Sometimes it might throw error when you reload your commands, because they might have errors.

#
## Improvements
This Command Handler is still in **Beta**. I've tried every bug if possible, Please if you find any Bug/Error, Contact Me.   
Any Errors? Some Issue? Fear not Just CONTACT!!!   
Any suggestions? Contact me, i'd love to apply them.   
i was thinking to add Blacklist/Whitelist System in `2.0` Version.
What do you think? Just tell me xD

Discord: `DrakeZee#5223`  
Gmail: `drakezeecontact@gmail.com`   
Discord Server: `dsc.gg/BotsWay`   
Youtube: `youtube.com/DrakeZee`

#
## Credits
 Made by : DrakeZee#5223  
 Please help me reach 1k subscribers for more amazing stuff...
 Also add me friend when using this, I have no friends :(  
   Support me for more of this type of stuff!
 
- [Youtube](https://youtube.com/DrakeZee) - Need 1000 Subscribers :D
- [Discord Server](dsc.gg/lol) -  Join now for **Free OP Custom Bots**, **Discord.Js Help/Codes/Tips**, and More Free Services! [Like Free Discord Bot Banners, Thumbnails And Edits etc.]
- [Portofolio](https://drakezee.repl.co) - Hire Me If you Like <3


Also a special thanks to the people below for helping me out!
recon#8448 | jnsp#1337 | pogchampy#3412 | nхιм#2001 | Joe7101#4642 | Tomato#6966 and some more ;)

#
# Thanks For Using This <3.
