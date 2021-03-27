const Discord = require('discord.js');

exports.run = function(client, message) {



const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:yldz:824606635669848064> Yardım Komutları')
.setTimestamp()
.addField('<a:yldz:824606635669848064> .moderasyon', 'Moderasyon Komutları')
.addField('<a:yldz:824606635669848064> .eğlence', 'Eğlence Komutları')
.addField('<a:yldz:824606635669848064> .aboneyardım', 'Abone Rol Komutları')
.addField('<a:yldz:824606635669848064> .botlistyardım', 'Botlist Komutları')
.addField('<a:yldz:824606635669848064> .yönetim', 'Sunucuyu Yönetmek için gerekli olan komutlar')

.setFooter('Guard++', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};