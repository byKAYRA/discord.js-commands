const Discord = require('discord.js');
const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

  let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!args[0]) return message.reply("Lütfen bir kullanıcı etiketleyin!")
  kullanıcı = kullanıcı.user
  let link = `https://api.devs-hub.xyz/delete?image=${kullanıcı.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `sil.png`);

  const embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://sil.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTitle(`${kullanıcı.tag}`)
    .setTimestamp();

  message.channel.send(embed)
  return
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  kategori: "eğlence",
  aliases: []
};

exports.help = {
  name: "sil",
  description: "Bir kişiyi boğazlarsınız",
  usage: "zıp-zıp @kişi"
};
