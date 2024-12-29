module.exports = {
	data: {
		name: 'desc',
		type: 1,
		permissions:"Joueurs",
		description: "envoie la description du salon",
	},

	async execute(interaction) {
        //action
		interaction.reply({ content: `${interaction.channel.topic}`})
        //retour à l'utilisateur
        console.log(`Description de ${interaction.channel.name} envoyé par ${interaction.user.username}`)
	}
}