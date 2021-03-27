const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:yldz:824606635669848064> Eğlence Komutları')
.setTimestamp()
.addField('<a:yldz:824606635669848064> .ilginçbilgi', 'İlginç bilgi verir')
.addField('<a:yldz:824606635669848064> .kartopu', 'Karopu Atarsın')
.addField('<a:yldz:824606635669848064> .oylama', 'Oylama Yaparsınız')
.addField('<a:yldz:824606635669848064> .espri', 'Espri Yaparsınız')
.addField('<a:yldz:824606635669848064> .adamasmaca', 'Adam Asmaca oynarsınız')
.addField('<a:yldz:824606635669848064> .emojiekle', 'Emoji Ekler')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};