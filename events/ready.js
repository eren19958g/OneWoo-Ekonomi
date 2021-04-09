const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = client => {
   client.user.setActivity(`${prefix}yardım |  | ${client.guilds.cache.size} Sunucu|  | ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} Kullanıcı`);
   console.log(`[ BOT HAZIR ] - [ SUNUCULAR - ${client.guilds.cache.size} ] - [ KULLANICILAR - ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} ]`)
     

};


 setInterval(() => {
}, 5000);
    console.log(`Tuğra Bot başarıyla giriş yaptı.`);
