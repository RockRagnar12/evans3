process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*โณ๏ธ Uhm.. que estas buscando?*\n*๐๐ป Ingrese un texto o enlace de YT*\n\n*โ Ejemplo:*\n*${usedPrefix + command} Begin you*`
//  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '*El video no se encontrรณ, intente ingresar el nombre original de la canciรณn o video*'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  m.reply('*โณProcesandoโณ*\n\n*[โ] Si no obtiene ningun resultado o le sale algun error intente con otro nombre*')
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`*El servidor ${server} fallo!, reintentando con otro servidor*${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw '*Todos los servidores fallaron*'
  if (yt2 === false) throw '*Todos los servidores fallaron*'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*๐ฅ Titulo:* _${title}_
*๐ Peso del audio:* _${filesizeF}_
*๐ Peso del video:* _${yt2.filesizeF}_
`.trim(), 'ยฉ๐๐น๐ฒ๐ ๐๐ฎ๐ฝ - ๐๐ผ๐', '๐ต AUDIO ๐ฝ ', `.yta ${vid.url}`, '๐ฅ VIDEO ๐๏ธ', `.yt ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(reproducir|reproducir2|reproductor|Reproducir|Reproducir2|Reproductor|play3|Play3|playvid|Playvid|playaudio|Playaudio)$/i

handler.exp = 0

module.exports = handler
