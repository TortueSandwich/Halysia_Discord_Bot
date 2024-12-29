//
module.exports = {
	data: {
		name:"say",
		description:"Fait dire au bot ce que tu vas écrire",
		permissions:"Joueurs",
		type: 1,
        options:[{
            name:"message",
            description:"Le message",
            type:3,
            required: true,
          }]
	},
	async execute(interaction) {
		//action
        interaction.channel.send({ content: `${interaction.options.getString('message')}` })
		//retour à l'utilisateur
		interaction.reply({ content: "c'est dis !", ephemeral: true})
		console.log(`${interaction.user.username} à dis : ${interaction.options.getString('message')} via le bot`)
	}
};
