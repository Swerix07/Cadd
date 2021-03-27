const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yönetim Komutları')
.setTimestamp()
.addField('<a:yldz:824606635669848064> .ban', 'Ban atarsınız')
.addField('<a:yldz:824606635669848064> .sayaç', 'Sayaç Sistemi')
.addField('<a:yldz:824606635669848064> .rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('<a:yldz:824606635669848064> .modlog', 'Modlog sistemi')
.addField('<a:yldz:824606635669848064> .reklamengel', 'Reklam Engel ayarlar')
.addField('<a:yldz:824606635669848064> .everhereengel', 'Ever Here Engel ayarlar')
.addField('<a:yldz:824606635669848064> .capsengel', 'Capsengel ayarlar')
.addField('<a:yldz:824606635669848064> .kick', 'Kick Atarsınız')
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
  name: 'yönetim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};