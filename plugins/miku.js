let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hatsune Miku*', '©𝗔𝗹𝗲𝘅 𝗖𝗮𝗽 - 𝗕𝗼𝘁', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(micu|miku)$/i

module.exports = handler
