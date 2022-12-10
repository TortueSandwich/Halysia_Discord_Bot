//5-: petre mettre un static avec tout les embed jsp en plus c'est plus facile pour changer (akka /menu)

const { embedReglement , embedMenuTicket , rowMenuTicket , rowTransfert , embedEvent , rowEvent} = require("../esthetique.js");

module.exports = {
	data: {
    name: "menu",
    description: "envois un menu",
    permissions:"Staff",
    type:1,
    options: [{
      name:"choix",
      description: "Envois le reglement",
      type:3,
      choices:[{
        name: "reglement",
        value: "reglement"
      },{
        name: "ticket",
        value: "tickets"
      },
/////////////////      
      {
        name: "transfere",
        value: "transfere"
      }
/////////////////      
      ,{
        name: "event",
        value: "events"
      }],
      required: true,  
    }]
  },
  
  async execute(interaction) {
//REGLEMENT
    if (interaction.options.getString("choix") === 'reglement') {
      
      interaction.channel.send({ embeds: [embedReglement] /*, components: [row]*/ })
      interaction.reply({content: 'Menu crée !', ephemeral: true })

//TICKETS
		} else if (interaction.options.getString("choix") === 'tickets') {

      interaction.channel.send({ embeds: [embedMenuTicket], components: [rowMenuTicket] })
      interaction.reply({content: 'Menu crée !', ephemeral: true })

//EVENT
    } else if (interaction.options.getString("choix") === 'events'){
      interaction.channel.send({ embeds: [embedEvent], components: [rowEvent] })  
      interaction.reply({content: 'Menu crée !', ephemeral: true })
    }

///////////////// 
//TRANSFERT
    else if (interaction.options.getString("choix") === 'transfere') {
      interaction.channel.send({ embeds: [embedTicket], components: [rowTransfert] })
      interaction.reply({content: 'Menu crée !', ephemeral: true })
    }
///////////////// 
    //Tracage
    console.log(`${interaction.user.username} a créé un menu : ${interaction.options.getString("choix")} `)
	}
};