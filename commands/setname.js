module.exports = {
	data: {
		name:"setname",
		description:"modifier un nom",
		permissions:"Joueur",
		type: 1,
        options: [{
			name: "user",
			description: "modifie le nom de la cible",
			type:1,
			options: [{
				name: "utilisateur",
				description: "Cible",
				type: 9,
				required: true,
            },{ 
           		name: "nouveau-nom",
        		description: "Son nouveau nom",
        		type: 3,
				required: true,
			}]
		},{
			name: "channel",
			description: "donne des infos sur le serveur",
			type:1,
            options: [{
				name: "nouveau_nom",
				description: "Nouveau nom",
				type: 3,
				required: true,		
			}]
		}],
		required: true,
	},

	async execute(interaction) {
	//Changement d'un joueur
		if (interaction.options.getSubcommand() === 'user') {
			//Récolte la cible
            const target = interaction.options.getMentionable('utilisateur')
			//action
			target.setNickname(interaction.options.getString("nouveau-nom"))
            //retour à l'utilisateur
			interaction.reply({ content: `Le nom de ${interaction.options.getMentionable('utilisateur')} à bien été changé `})
			console.log(`${interaction.user.username} à été changé en : ${interaction.options.getString("nouveau-nom")}`);
        }
	//changement d'un salon	
        if (interaction.options.getSubcommand() === 'channel') {
            interaction.channel.setName(interaction.options.getString('nouveau_nom'));
            interaction.reply({ content: `Le nom du salon à bien été changé en ${interaction.options.getString('nouveau_nom')}`})
			console.log(`${interaction.channel} à été changé en : ${interaction.options.getString('nouveau_nom')}`);
        }
}};