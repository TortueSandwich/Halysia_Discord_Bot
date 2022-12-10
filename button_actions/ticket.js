const fs= require('fs');
const { Discord } = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
    id: "ticket",
    aliases: [],
    permissions: [],
    description: "ouvre un ticket !",
    async execute(button) {
      const config = require('../config.json')
      const { Permissions } = require('discord.js');
      const row = new MessageActionRow()
        .addComponents( 
          new MessageButton()
            .setCustomId("fermeture")
            .setLabel("🔒 Fermer")
            .setStyle('SECONDARY')
        )  
        .addComponents( 
          new MessageButton()
            .setCustomId('transcript')
            .setLabel("📜 Archiver")
            .setStyle('SUCCESS')
        )
        .addComponents( 
          new MessageButton()
            .setCustomId("suppression")
            .setLabel("❌ Supprimer")
            .setStyle('DANGER')
        )  
      const embed = new MessageEmbed()
        .setTitle("Le staff va prendre conscience de ton ticket !")
        .setDescription(`Decris nous ton probleme le plus précisément possible avec un max de détail !
        Si posible la date, l'heure ou même le lieu, mais tout est bon à prendre !`)
        .setColor("ORANGE")
          
        let category = button.guild.channels.cache.find(c => c.name == "tickets").id
  
        const channel = button.guild.channels.create(`ticket-${button.user.username}`, {
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
          button.reply({content: 'Ticket crée !',ephemeral: true})
          console.log(`Ticket ouvert par ${button.user.username}`);
      },
    };