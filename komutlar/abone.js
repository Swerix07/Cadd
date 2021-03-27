const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Cowboy',`
<a:yldz:824606635669848064> Guard++ Abone Yardım Menüsü  <a:yldz:824606635669848064>

<a:yldz:824606635669848064> **.abonerol** <a:yldz:824606635669848064>
Abone Rolünü ayarlarsınız

<a:yldz:824606635669848064> **.abonelog** <a:yldz:824606635669848064>
Abone Log'u ayarlarsınız

<a:yldz:824606635669848064> **.abone-y-rol** <a:yldz:824606635669848064>
Abone Yetkili Rolü Ayarlarsınız

<a:yldz:824606635669848064> **.abone** <a:yldz:824606635669848064>
Abone rolü verirsiniz
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};