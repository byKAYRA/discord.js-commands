const Discord = require("discord.js");
const db = require("quick.db");


module.exports.run = async (bot, message, params) => {

  let money = db.startsWith(`bakiyecdare-`, { sort: '.data'}) //kaydetme şeklini yazın Örnek: bakiyecdare-${message.author.id} yazdıysanız bakiyecdare- yazmalısını<
  let content = "";

  for (let i = 0; i < 10; i++) {
    let user = bot.users.cache.get(money[i].ID.split('_')[2])

    content += `**${i+1})** <@!${money[i].ID.split('-')[1]}> | **${money[i].data}**TL\n` //<@!${money[i].ID.split('-')[1]}> kısmındaki split('-') i database adı ile message.author.id arasındaki tanım yapmalısınız Örn: bakiyecdare-${message.author.id} yazdıysam - yazmalıyım 
  }

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(content)
  .setColor("RANDOM")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();

  message.inlineReply(embed)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sıralama"],
    permLevel: 0,
    kategori: "lvl"
};

exports.help = {
    name: 'sıralama',
    description: 'Seviye sisteminin sunucudaki liderlik tablosunu gĂ¶sterir.',
    usage: 'sıralama'
};
