
const { embedMod } = require("../esthetique.js");

module.exports = {
	data: {
		name:"mod",
		description:"affiche les mods autorisé",
    	permissions:"Joueurs",
		type:1,
	},
	async execute(interaction) {

    //Retour à l'utilisateur
    interaction.user.send({embeds:[embedMod]})
    interaction.reply({content:`Je vous ai envoyé la liste des mods en message privé !`})
    console.log(`${interaction.user.username} à demandé la liste des mods`);
	}
};