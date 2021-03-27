const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:yldz:824606635669848064> Botlist Yardım Komutları')
.setTimestamp()
.addField('<a:yldz:824606635669848064> .bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('<a:yldz:824606635669848064> .bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('<a:yldz:824606635669848064> .bot-ekle', 'Bot eklersiniz')
.addField('<a:yldz:824606635669848064> .botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif')
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
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};