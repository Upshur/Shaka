const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('𝐃𝐚𝐯𝐞𝐭 𝐬𝐚𝐲𝐟𝐚𝐦𝐚 𝐡𝐨ş𝐠𝐞𝐥𝐝𝐢𝐧♥')
    .setDescription(`**Destek Sunucusu**: [Destek Sunucusu](https://discord.gg/wvDQDYs2Gr)\n**Botun Davet Linki**: [Tıkla](https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622)\n**Site Linki**: [Tıkla](https://shaka-ste.glitch.me/anamenü.html#)\n**Sunucu oy linki**: [Tıkla](https://discord.st/vote/Shaka/)`);
    message.channel.send(embed);
    
  });
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sunucu Davet Linki Verir.',
  usage: 'davet'
};