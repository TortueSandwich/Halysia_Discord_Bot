const fs = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');

// Require the necessary discord.js classes
const {Client,Intents,Collection, User} = require('discord.js');
require("dotenv").config();
// Create a new client instance
const client = new Client({intents: (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9) | (1 << 10),  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],  });


// Loading commands from the commands folder
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const buttonFiles = fs.readdirSync('./button_actions').filter(file => file.endsWith('.js'));
const reactionFiles = fs.readdirSync('./reactions').filter(file => file.endsWith('.js'));

/*
//Loading the token from .env file
//const dotenv = require('dotenv');
//const envFILE = dotenv.config();
//const TOKEN = process.env['TOKEN'];
*/


// Edit your TEST_GUILD_ID here in the env file for development
const TEST_GUILD_ID = "899235720974192640";
/**
 * Serv de test : 899235720974192640 *
 * Halysia : 816435551171248188 NE PAS UTILISER*
**/

// Creating a collection for commands in client
client.commands = new Collection();
client.buttons = new Collection();
client.reactions = new Collection();

console.log("- - - commandes trouvé - - -");
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data/*.toJSON()*/);
	client.commands.set(command.data.name, command);
	console.log(command.data.name);
}

console.log("- - - bouttons trouvé - - -");
for (const file of buttonFiles) {
	const boutton = require(`./button_actions/${file}`);
	client.buttons.set(boutton.id, boutton);
	console.log(boutton.id);
  }

console.log("- - - reactions trouvé - - -");
for (const file of reactionFiles) {
	const reaction = require(`./reactions/${file}`);
	client.reactions.set(reaction.name, reaction);
	console.log(reaction.name);
  }


//A voir
/*commands.forEach(slashCommand => {
    console.log(`Changing command ${slashCommand.id}`);
    client.commands.permissions.add({
        command: slashCommand.id,
        permissions: [permissions2]
    });
});*/


const { token , prefixe , botinfo , status} = require('./config.json');


IdTortueSandwich = process.env.TORTUESANDWICH;
// id de TortueSandwich🐢🥪#9387 : 510519779048816651
function logtortue(msgerr){
    var currentdate = new Date(); 
    var datetime =  "à : " + (currentdate.getHours()+2) + ":" 
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds() + " le "
        + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear();
    client.users.fetch(IdTortueSandwich, false).then((user) => {
        user.send(`${msgerr} , ${datetime}`);
    });
}


client.once('ready', () => {
	console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n${status}\n\n${botinfo}\n\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n        - = - = - = ► = - = - = -`)
    const CLIENT_ID = client.user.id;
	const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);
	console.log("commandes enregistrées sur le serveur :");
	(async () => {
		try {
			if (!TEST_GUILD_ID) {
				console.log("global");
				await rest.put(
					Routes.applicationCommands(CLIENT_ID), {
						body: commands
					}
				);
				console.log('Successfully registered application commands globally');
				logtortue("bot démarré");
			} else { 
				console.log("test");
				await rest.put(
					Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
						body: commands
					}
				);
				console.log('Successfully registered application commands for development guild');
			}
		} catch (error) {
			if (error) {
			    logtortue("erreur lors du démarrage");
			    console.error(error);
			}
		}
	})();
});


client.on('guildMemberAdd', member => {
    console.log(`${member} à rejoint le serveur`)
    try{
        member.roles.add(member.guild.roles.cache.find(r => r.name == 'Joueurs'))
    console.log(`Le rôle joueur a été donné à ${member}`)
    }catch(e){
        console.log(e);
        logtortue(`Erreur quand ${member} a rejoint`)
    }
});

client.on('interactionCreate', async interaction => {
	if (interaction.isButton()){
        try {
        	client.buttons.get(interaction.customId).execute(interaction);
        } catch (error) {
        	console.error(error)
        	interaction.channel.send({content:"Button erreur" ,ephemeral: true});
        }
		return;
	}
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	if (command.data.permissions === "Staff") {
		if (!interaction.member.roles.cache.some(role => role.name === 'Staff')){
			console.log(`${interaction.user.username} n'a pas pu executuer /${command.data.name}`);
			await interaction.reply({content:"Tu n'as pas la permission staff pour executer cette commande" , ephemeral: true });
		}
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		if (error) console.error(error);
		logtortue(`erreur lors d'une interaction : ${command.data.name}`)
		await interaction.reply({ content: 'Il y a une erreur, contacte TortueSandwich après avoir verifié ta commande', ephemeral: true });
	}
});

/**const voiceCollection = new Collection();
client.on('voiceStateUpdate', async (oldState, newState) =>{
    const userM = await client.users.fetch(newState.id);
	const mec = newState.member
    
	if(!oldState.channel && newState.channel.id === '912046571040952321'){
		const channel = await newState.guild.channels.create(userM.tag,{
			type:2,
			parent: newState.channel.parent,
		});
		mec.voice.setChannel(channel)
		voiceCollection.set(userM.id, channel.id);
	} else if(!newState.channel){
		console.log("oui");
		console.log(oldState)
		if(oldState.channelId === voiceCollection.get(newState.id)){
			console.log("ca marche");
			oldState.channel.delete()
		}
	}
});**/


client.on('messageCreate', message => {
    const nanmaisserieux =["quoi","koi"]
    const jesaispaslire = ["ip","lip","l'ip","adresse","adrese"]
    if (nanmaisserieux.find(_nanmaisserieuxItem => message.content.toLowerCase().includes(_nanmaisserieuxItem))){
        if (jesaispaslire.find(_jesaispaslireItem => message.content.toLowerCase().includes(_jesaispaslireItem))){
            const channele = message.guild.channels.cache.find(channel => channel.name == 'général')
            message.channel.send(`${channele.topic}`)
            console.log("BAHAHAHAH C KOI LIP ????")
        }
    }
    const bonnenuit = ["bonne nuit !","bone nuit","bonne nuit"]
    if (bonnenuit.find(_bonnenuitItem => message.content.toLowerCase().includes(_bonnenuitItem))){
        message.channel.send(`Bonné nuit !!`)
        console.log("Bonne nuit !")
    }
	if (message.channel.name == 'suggestions') {
    	if (message.author.bot) return; 
    	const canstart = [`!`,`%`,`#`]
    	if (!canstart.find(_canstartItem => message.content.toLowerCase().startsWith(_canstartItem))){
        	const plus1 = message.guild.emojis.cache.find(emoji => emoji.name == 'plus')
        	const moins = message.guild.emojis.cache.find(emoji => emoji.name == 'moins')
        	const suisse = message.guild.emojis.cache.find(emoji => emoji.name == 'bof')
        	try{
        		message.react(plus1).then(message.react(suisse)).then(message.react(moins))
        		message.channel.threads.create({
          			name: `${message.author.username}`,
          			autoArchiveDuration: 4320,
          			startMessage: message
				});
				console.log("Suggestion crée")
			} catch (error) {
          		console.error();
		  		logtortue(`erreur lors de la création de suggestion`)
        	}
    	} 
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Fetching message failed: ', error);
			return;
		}
	}
	try {
	    client.reactions.get(reaction.emoji.name).execute(reaction,user);
	} catch (error) {
        if (error instanceof Error ){return
	    }else{
		  console.log(`réaction non reconnue : ${reaction.emoji.name}`)
		  console.log(error)
	    }
	}
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);