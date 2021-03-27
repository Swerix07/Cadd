const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Guard++ bot Moderasyon Komutları')
.setTimestamp()
.addField('<a:yldz:824606635669848064> .ban', 'Ban atarsınız')
.addField('<a:yldz:824606635669848064> .byetkilirol', 'Ban yetkilirol ayarlar')
.addField('<a:yldz:824606635669848064> .banlog', 'Banlog ayarlar')
.addField('<a:yldz:824606635669848064> .reklamengel', 'Reklam Engel ayarlar')
.addField('<a:yldz:824606635669848064> .everhereengel', 'Ever Here Engel ayarlar')
.addField('<a:yldz:824606635669848064> .capsengel', 'Capsengel ayarlar')
.addField('<a:yldz:824606635669848064> .kick', 'Kick Atarsınız')
.addField('<a:yldz:824606635669848064> .afk', 'Afk Sistemi')
.addField('<a:yldz:824606635669848064> .userinfo', 'Kullanıcı Bilgi')
.addField('<a:yldz:824606635669848064> .kicklog', 'Kick Logunu Ayarlarsınız')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};