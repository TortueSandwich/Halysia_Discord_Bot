const { MessageEmbed , MessageActionRow , MessageButton} = require('discord.js');

module.exports = {
//PANEL REGLEMENT
  embedReglement : new MessageEmbed()
    .setTitle("Règlement")
    .setDescription(`» Soyez respectueux, le harcèlement et toutes sorte de discrimination sera sanctionné

      » Le spam et le flood sont interdit, merci aussi de ne pas abuser des modificateurs de voix par exemple
      
      » Merci d'éviter de dévoiler des informations personnelles d'autres personnes ou de vous-mêmes
      
      » La publicité pour et vers d'autres serveurs n'est pas autorisée. Les spams ou arnaques sont interdit même en message privé.
    `)
    .setColor("GREEN"),

//PANEL MENU TICKETS
  embedMenuTicket : new MessageEmbed()
    .setTitle("Ouvre un ticket ! ")
    .setDescription(`Report nous le bug que tu as trouvé
    ou ouvres un ticket pour toutes autres demandes !!`)
    .setColor("ORANGE"),

//PANEL EVENT
  embedEvent : new MessageEmbed()
    .setTitle("Inscription à l'event")
    .setDescription(`Clique pour être notifié le jour de l'event !`)
    .setColor('#EA54F3'),

//PANEL BUGS
  embedBugs : new MessageEmbed()
    .setTitle(`Le staff va prendre conscience de ton signalement !`)
    .setDescription(`Decris nous ton probleme le plus précisément possible avec un max de détail !`)
    .setColor("ORANGE"),

//PANEL TICKET
  embedTicket : new MessageEmbed()
    .setTitle("Le staff va prendre conscience de ton ticket !")
    .setDescription(`Decris nous ton probleme le plus précisément possible avec un max de détail !`)
    .setColor("ORANGE"),

//PANEL TRANSCRIPTION
  embed : new MessageEmbed()
    .setTitle("Ticket transcrit !")
    .setDescription(`Le ticket est archivé !`)
    .setColor("ORANGE"),
//PANEL SUPPRESSION
  embedSuppression : new MessageEmbed()
    .setTitle("Ce ticket va etre supprimer !")
    .setDescription(`Suppression automatique dans 5 secondes !`)
    .setColor("RED"),

//PANEL FERMETURE
  embedFermeture : new MessageEmbed()
    .setTitle("Ticket fermé !")
    .setDescription(`Le créateur du ticket ne peut voir le ticket !`)
    .setColor("ORANGE"),

//PANNEL MOD
  embedMod : new MessageEmbed()
    .setColor("NOT_QUITE_BLACK")
    .setTitle("Récapitulatif des mods autorisés sur Halysia")
    .setDescription(`
    [Optifine](https://optifine.net/downloads) permet à Minecraft de fonctionner plus rapidement et d'avoir une meilleure apparence avec une prise en charge complète des textures et de nombreuses options de configuration.

    [Sodium](https://www.curseforge.com/minecraft/mc-mods/sodium) permet aussi de faire fonctionner minecraft plus rapidement, encore plus que ce que permet Optifine mais sans quelque fonctionnalité  qui peuvent etre remplacer par d'autres mod.
  
    [Iris Shders](https://irisshaders.net/) ajoute la possibilité d'ajouter des shaders, compatible avec sodium.

    [Replay Mod](https://www.replaymod.com/) est utile pour enregistrer et revoir sa survie en sortant de sa tête. 

    [Litematica](https://www.curseforge.com/minecraft/mc-mods/litematica) vous permet d'utiliser des "plan" crée ailleurs que sur Halysia pour vos constructions.

    [Bobby](https://modrinth.com/mod/bobby) est un mod client permettant au joueur d'avoir une plus grande portée de vue que celle paramétrée dans le serveur.
  
    [Light overlay](https://www.curseforge.com/minecraft/mc-mods/light-overlay) est un mod permettant de marquer les blocs sur lesquels les monstres peuvent apparaitre.
  
    [Ok Zoomer](https://modrinth.com/mod/ok-zoomer) ajoute une fonction de zoom simialire à celle d'Optifine mais avec quelques options en plus (pas de mode cinématique obligatoire, nioveau de zoom ajustable..)
  
    [Fabricshot](https://www.curseforge.com/minecraft/mc-mods/fabrishot) permet de prendre des screen de la resolution qu'on veut
  
    [Lambdabettergrass](https://modrinth.com/mod/lambdabettergrass) ajoute des textures connectés pour l'herbe, le mycélium, la neige et l'herbe du nether avec des noms chelous.
  
    [Lambdynamiclights](https://modrinth.com/mod/lambdynamiclights) ajoute de la lumière dynamique semblable à ce que l'ont peut trouver sur Optifine mais pour fabric.
    
    [Shulkerboxtooltip](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip) vous permet de voir une fenêtre d'aperçu du contenu d'une boîte de Shulker lorsque vous la survolez dans un inventaire en appuyant sur la touche Maj.
  
    [MiniHUD-fabric](https://www.curseforge.com/minecraft/mc-mods/minihud) permet d'afficher à l'écran différentes "lignes d'infos" (un "mini-F3").
  
    `),

//BOUTTON TICKET
  rowTicket : new MessageActionRow()
    .addComponents( new MessageButton()
      .setCustomId("fermeture")
      .setLabel("🔒 Fermer")
      .setStyle('SECONDARY'))  
    .addComponents( new MessageButton()
      .setCustomId('transcript')
      .setLabel("📜 Archiver")
      .setStyle('SUCCESS'))
    .addComponents( new MessageButton()
      .setCustomId("suppression")
      .setLabel("❌ Supprimer")
      .setStyle('DANGER')),
          
        

//BOUTTONS REGLEMENT
  rowReglement : new MessageActionRow()
    .addComponents( new MessageButton()
      .setCustomId("rolejoueur")
      .setLabel("🤝 Accepter") 
      .setStyle('PRIMARY'))
    .addComponents( new MessageButton()
      .setCustomId("refus")
      .setLabel("❌ Refuser") 
      .setStyle('PRIMARY')),

//BOUTTONS DU MENU TICKETS
  rowMenuTicket : new MessageActionRow()
    .addComponents( new MessageButton()
      .setCustomId('bug')
      .setLabel("🐞Bug")
      .setStyle('SECONDARY'))
    .addComponents( new MessageButton()
      .setCustomId('ticket')
      .setLabel("🎫Ticket")
      .setStyle('SECONDARY')),

//BOUTTONS TRANSFERT
  rowTransfert : new MessageActionRow()
    .addComponents( new MessageButton()
      .setCustomId('bug')
      .setLabel("🐞Bug")
      .setStyle('SECONDARY'))
    .addComponents( new MessageButton()
      .setCustomId('ticket')
      .setLabel("🎫Ticket")
      .setStyle('SECONDARY'))
    .addComponents( new MessageButton()
      .setCustomId('transfere')
      .setLabel("🏡demande de transfère")
      .setStyle('PRIMARY')),

//BOUTTONS EVENT
  rowEvent : new MessageActionRow()
    .addComponents( new MessageButton()
      .setCustomId('event')
      .setLabel("✋ participer")
      .setStyle('PRIMARY'))
    .addComponents( new MessageButton()
      .setCustomId('enleveevent')
      .setLabel("🏃‍♂️🏃‍♀️Ne plus participer")
      .setStyle('SECONDARY'))


}