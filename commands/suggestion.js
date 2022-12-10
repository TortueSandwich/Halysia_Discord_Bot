//7-: mettre emoji en static ? type 3 suggestions
module.exports = {
	data: {
		name:"suggestion",
		permissions:"Joueurs",
		type:3,
	},
	async execute(interaction) {
    //Condition du salon
    if (interaction.channel.name === "suggestions") {
      try{
        //creation de la suggestion
        const plus1 = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'plus')
        const bof = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'bof')
        const moins1 = interaction.channel.guild.emojis.cache.find(emoji => emoji.name == 'moins')
        interaction.channel.messages.fetch(interaction.targetId)
        //reactions
        .then(msg => msg.react(plus1).then(msg.react(bof).then(msg.react(moins1).then(console.log(msg)))).then(
        //thread
        msg.channel.threads.create({
          name: `${msg.author.username}`,
          autoArchiveDuration: 4320,
          startMessage: msg
        })))
      } catch (e){
        console.log(e);
      }
      
      //retour à l'utilisateur
      interaction.reply({content:"suggestion crée", ephemeral: true})
      console.log(`suggestion créé par ${interaction.user.username}`);
      
  	}else{
      interaction.reply({content:"Ce n'est pas un salon à suggestion !", ephemeral: true})
    }
}};