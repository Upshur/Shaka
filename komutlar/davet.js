const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('πππ―ππ­ π¬ππ²πππ¦π π‘π¨Επ ππ₯ππ’π§β₯')
    .setDescription(`**Destek Sunucusu**: [Destek Sunucusu](https://discord.gg/wvDQDYs2Gr)\n**Botun Davet Linki**: [TΔ±kla](https://discord.com/oauth2/authorize?client_id=890967082555019315&scope=bot&permissions=805314622)\n**Site Linki**: [TΔ±kla](https://shaka-ste.glitch.me/anamenΓΌ.html#)\n**Sunucu oy linki**: [TΔ±kla](https://discord.st/vote/Shaka/)`);
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