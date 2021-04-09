const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  let jkood = db.get(`premod_${message.guild.id}`)
if (!jkood) return message.channel.send("Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 

let times = await db.fetch(`worktime_${message.author.id}`)
  let day = 86400000

  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Günlük ödülünü almak için ${time.hours ? time.hours + " saat,": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
let moneys = rastgeleMiktar(10000,12000);
      message.channel.send(new Discord.MessageEmbed()
                   .setColor("YELLOW")
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                   .setDescription(`Günlük ödülünü topladın, cüzdanına ${moneys} 💸 eklendi!`))

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };

exports.conf = {
  enabled: true,
  aliases: ["premıum-gunluk"],
};

exports.help = {
  name: 'premium-günlük',
};