const Discord = require('discord.js'); 
let db = require("quick.db")
exports.run = async (client, message, args) => { 
  
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("BU KOMUTU KULLANMAYA YETKİN YOK!")

let channel = client.channels.find('name', 'TANITILAN SUNUCULARIN GIDECEGI KANALIN TAM ISMINI YAZ') 
let cse = db.get("sunucutanit."+message.guild.id)

if(!cse){
  
const asdf = await client.channels.get(message.channel.id).createInvite() 
message.delete(); 
  
const embed = new Discord.RichEmbed() 
.setTitle('**» Sunucu Tanıt**') 
.setDescription("**Sunucunuz başarıyla tanıtılmıştır!**")         
.setFooter('© 2021 Discord Shaka')         
.setTimestamp() 
message.channel.send(embed)     
  
await db.set("sunucutanit."+message.guild.id, { zaman: Date.now(), sure: 86400000})
const invite = new Discord.RichEmbed() 
.setTitle('**» Sunucu Adresi: **') 
.addField('**» Tanıtım Yapan: **', message.author.username + '#' + message.author.discriminator) 
.addField('**» Sunucunun Adı: **', message.guild.name)
.setDescription(asdf.url)         
.setFooter('© ')         
.setTimestamp() 
channel.send(invite) 
  
} else {
  message.reply("Bu Komutu 24 Saatte Bir Kullana Bilirsin!")
}
}; 
exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: [], 
permLevel: 0 
}; 
exports.help = { 
name: 'sunucutanıt', 
description: 'Sunucunuzu tanıtır.', 
usage: 'sunucutanıt'
 };