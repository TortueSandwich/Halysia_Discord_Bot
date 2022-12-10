const fs= require('fs');
const { Discord } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
    id: "transfere",
    aliases: [],
    permissions: [],
    description: "Ouvre ticket pour transferer ta base !",
    async execute(button) {
      const config = require('../config.json')
      const { Permissions } = require('discord.js');
      const row = new MessageActionRow()
        
        .addComponents( 
          new MessageButton()
            .setCustomId("suppression")
            .setLabel("✅ Terminé")
            .setStyle('SUCCESS')
        )  
      const embed = new MessageEmbed()
        .setTitle("Le staff va prendre conscience de ta demande !")
        .setDescription(`Donne nous les coordonnées de ton ancienne base et celles où tu veux qu'elle soit deplacé !`)
        .setColor("ORANGE")
          
        let category = button.guild.channels.cache.find(c => c.name == "tickets").id
  
        const channel = button.guild.channels.create(`Demande-transfert-${button.user.username}`, {
          type: 'GUILD_TEXT',
          parent: `${category}`,
          permissionOverwrites: [
            {
            id: button.guild.roles.cache.find(r => r.name === "Staff"),
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            },
            {
            id: button.guild.id,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            },
            {
            id: button.guild.roles.cache.find(r => r.name === "Joueurs"),
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            },
            {
            id: button.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
            },
          ],
          }).then(channel => channel.send({ embeds: [embed], components: [row] }))
          config.numticket += 1
          fs.writeFileSync('./config.json', JSON.stringify(config))
          button.reply({content: 'Demande crée !',ephemeral: true})
          console.log(`Demande de transfere ouvert par ${button.user.username}`);
      },
    };