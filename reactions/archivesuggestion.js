const { MessageActionRow , MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
    name:  'โฒ๏ธ',
    status: 'actif',
    permission: 'joueur',
    description: 'archive le message dans un salon',
    execute(reaction,user) {
        const salon = reaction.message.guild.channels.cache.find(channel => channel.name == 'suggestions-en-cours')
        if (!reaction.message.channel.name == salon) return;
        const moins = reaction.message.guild.emojis.cache.find(emoji => emoji.name == 'moins')
        const plus = reaction.message.guild.emojis.cache.find(emoji => emoji.name == 'plus')
        
        const staffs = ["TortueSandwich๐ข๐ฅช",'WeeZyi','๐๐_๐๐ฆ๐ฃ๐๐๐๐','Altarks','Axilate','Azzurvif','Darktak']


        if (staffs.find(_staffsItem => user.username.includes(_staffsItem))){
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`${reaction.message.author.username}`,`${reaction.message.author.displayAvatarURL({ format: 'png' })}`)
                .setDescription(`[${reaction.message.content}](${reaction.message.url})`)
                .addField("stats:",`${plus} : ${reaction.message.reactions.cache.get(plus.id).count-1 } votes
                ${moins} : ${reaction.message.reactions.cache.get(moins.id).count-1} votes
                
                `)
                .setFooter(`Crรฉe le : ${reaction.message.createdAt.toLocaleString()}`);
        salon.send({embeds: [embed]})
    }
    }
  };
  