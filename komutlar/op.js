const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("KİMİ ÖPCEN AŞKİTO MUAH");

const codwaottomansex = new Discord.MessageEmbed()

    .setFooter("şapşik was here !")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.**`
    )

    .setImage(
      `https://i.kym-cdn.com/photos/images/original/000/986/968/2f5.gif`
    );
  return message.channel.send(codwaottomansex);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "öp",
  description: "İstediğiniz kişiyi öpersiniz.",
  usage: "öp"
};