//
const {MessageEmbed} = require('discord.js')
const {prefixe} = require('../config.json');
const fs = require('fs');

module.exports = {
	data: {
		name:"help",
		description:"affiche les commandes et ce qu'elles font",
		type:1,
		permissions:"Joueurs",
	},
    async execute(interaction) {
		var joueur = "" 
		var staff = ""
		//recupère les fichier de commandes
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	
		//lit et recupère les noms et les descriptions
		for (const file of commandFiles) {
			const command = require(`../commands/${file}`);
			if (command.data.type == 1){
				//Format : /ping : répond pong
				if (command.data.permissions == "Joueurs"){
					joueur += prefixe + command.data.name +" : "+ command.data.description + "\n"
				}
				if (command.data.permissions == "Staff"){
					staff += prefixe + command.data.name + " : " + command.data.description + "\n"
				}
			}
		}
	//Joueur
		//mise en forme coté Joueur
    	const embedJoueur = new MessageEmbed()
	    	.setColor("BLUE")
			.setTitle(`Prefixe: ${prefixe}`)
			.setDescription(`${joueur}`)
		//envoie coté joueur
		interaction.reply({embeds:[embedJoueur],ephemeral:true});
		console.log(`${interation.user.username} à fait /help`)	
	//STAFF	
		if (interaction.member.roles.cache.some(role => role.name === 'Staff' )){
		//mise en forme coté Staff	
			const embedStaff = new MessageEmbed()
				.setColor("BLUE")
				.setTitle("Liste des commandes")
				.addFields(
					{name:"commandes Staff :",value:`${staff}`},
					{name: "Le drive :",value:"[Le drive de Halysia ici](https://drive.google.com/drive/folders/1RRknPl74A4LR9aSzNI2srpkz2qn8c6Y5)", inline: true },
       			)
		//envoie coté Staff	
			console.log(`et à reçu la liste de commande staff et le lien du drive`)
			interaction.user.send({embeds:[embedStaff]})
		}
	}
};