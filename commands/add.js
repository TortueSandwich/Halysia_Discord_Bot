// 1-: P'etre faire un static avec toutes les perms

module.exports = {
	data: {
		name: "add",
		description: "ajoute ou enlève une personne du salon",
		permissions:"Staff",
		type: 1,
		options: [{
			name:"add",
			description:"ajoute qqun",
			type:1,
			options:[{
				name:"user",
				description:"l'utilisateur concerné",
				type:6,
				required:true,
			}]
		},
		{
			name:"remove",
			description:"enleve qqun",
			type:1,
			options:[{
				name:"user",
				description:"l'utilisateur concerné",
				type:6,
				required:true,
			}]
		}],
		required: true,
	},

    async execute(interaction) {

		const toadd = interaction.options.getUser('user'); //Personne à ajouter
		const toremove = interaction.options.getUser('user'); //Personne à retirer
		const { Permissions } = require('discord.js');

        if (interaction.options.getSubcommand() === 'add') {
			//Donne la permission à la personne de voir le salon, DONNER LE RESTE DES PERMS DANS LA CATEGORIE
			interaction.channel.permissionOverwrites.create(toadd,{
				VIEW_CHANNEL:true
			});

			//Retour à l'utilisateur
			console.log(`${toadd.username} a été ajouté au salon ${interaction.channel.name}`)
			interaction.reply({ content: `${toremove.username} a été ajouté à ${interaction.channel}`, ephemeral: true})

		} else if (interaction.options.getSubcommand() === 'remove') {
			//Donne la permission à la personne de voir le salon, DONNER LE RESTE DES PERMS DANS LA CATEGORIE	
			interaction.channel.permissionOverwrites.create(toremove,{
				VIEW_CHANNEL:false
			});

			//Retour à l'utilisateur
			console.log(`${toremove.username} a été retiré de ${interaction.channel.name}`)
			interaction.reply({ content: `${toremove.username} a été retiré du salon ${interaction.channel}`, ephemeral: true})
        }	
    }
};