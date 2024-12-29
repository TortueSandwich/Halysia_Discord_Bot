//4-: ajouter des trucs dans les infos genre avatar ou quoi, p'etre faire un embed sur le boug ou le serv
module.exports = {
	data: {
		name: "info",
		description: "donne des informations",
		permissions:"Joueurs",
		type:1,
		options: [{
			name: "user",
			description: "donne des infos sur un utilisateur",
			type:1,
			options: [{
				name: "target",
				description: "l'utilisateur concerné",
				type: 6,					
				}]
			},
			{
				name: "server",
				description: "donne des infos sur le serveur",
				type:1,
		}],
	},		
    async execute(interaction) {
		console.log(`${interaction.user.username} à demandé des informations sur :`)
		//Demande d'info sur un utilisateur
        if (interaction.options.getSubcommand() === 'user') {
			//Collecte l'utilisateur ciblé
			const user = interaction.options.getUser('target');
			//Format : 
			if (user) {
				await interaction.reply(`Pseudo : ${user.username}\nID : ${user.id}`);
				console.log(user.username);
			} else {
				await interaction.reply(`Ton pseudo : ${interaction.user.username}\nTon ID : ${interaction.user.id}`);
				console.log("lui-même");
			}
		} else if (interaction.options.getSubcommand() === 'server') {
		//Demande d'info sur le serveur
			await interaction.reply(`Nom du serveur : ${interaction.guild.name}\nNombre de menbre : ${interaction.guild.memberCount}`);
			console.log("le serveur");
		}
	}
};