//2-: Embed pour le clear ?

module.exports = {
  data:{
    name:"clear",
    description:"efface un certain nombre de message",
    permissions:"Staff",
    type:1,
    options:[{
      name:"nb",
      description:"nombre de message",
      type:4,
      min_value:1,
      max_value:99,
      required: true,
    }]
  },

  async execute(interaction) {
    //recolte le nombre de message à supprimer
    const nb = interaction.options.getInteger('nb');
    
    /*let exempleEmbed = new MessageEmbed()
	  .setColor(0x0099ff)
	  .setTitle('Messages suprimé')
      .setDescription(`${nb} messages ont bien été suprimé`)
      .setAuthor(`${interaction.user.username}`,`${interaction.user.displayAvatarURL({ format: 'png' })}`)*/
    
    //supprime
    interaction.channel.bulkDelete(nb,true)
    
    //Retour à l'utilisateur
    interaction.reply({content: `${nb} messages ont bien été supprimé ! (le bot ne peux pas supprimer des messages de plus de 14 jours)`, ephemeral: true })
    console.log(`${nb} messages clear par ${interaction.user.username}`)
  }

};