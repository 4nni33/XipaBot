import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen5
let vn = './Audios/Konede.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  AnnieBot ✨ ⤾·˚ ༘*
┈─𖨂 :✨ *Hola ${taguser}*
┈─𖨂 :🔮 *Menu-Anime*
︎︎︎︎ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯

ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Animes ✨ ⤾·˚ ༘*
┈─𖨂 :🔮 *.miku*
┈─𖨂 :🔮 *.loli*
┈─𖨂 :🔮 *.lolivid*
┈─𖨂 :🔮 *.akira*
┈─𖨂 :🔮 *.akiyama*
┈─𖨂 :🔮 *.anna*
┈─𖨂 :🔮 *.asuna*
┈─𖨂 :🔮 *.ayuzawa*
┈─𖨂 :🔮 *.boruto*
┈─𖨂 :🔮 *.chiho*
┈─𖨂 :🔮 *.chitoge*
┈─𖨂 :🔮 *.deidara*
┈─𖨂 :🔮 *.erza*
┈─𖨂 :🔮 *.elaina*
┈─𖨂 :🔮 *.eba*
┈─𖨂 :🔮 *.emilia*
┈─𖨂 :🔮 *.hestia*
┈─𖨂 :🔮 *.hinata*
┈─𖨂 :🔮 *.inori*
┈─𖨂 :🔮 *.isuzu*
┈─𖨂 :🔮 *.itachi*
┈─𖨂 :🔮 *.itori*
┈─𖨂 :🔮 *.kaga*
┈─𖨂 :🔮 *.kagura*
┈─𖨂 :🔮 *.kaori*
┈─𖨂 :🔮 *.keneki*
┈─𖨂 :🔮 *.kotori*
┈─𖨂 :🔮 *.kurumi*
┈─𖨂 :🔮 *.madara*
┈─𖨂 :🔮 *.mikasa*
┈─𖨂 :🔮 *.minato*
┈─𖨂 :🔮 *.naruto*
┈─𖨂 :🔮 *.nezuko*
┈─𖨂 :🔮 *.sagiri*
┈─𖨂 :🔮 *.sasuke*
┈─𖨂 :🔮 *.sakura*
┈─𖨂 :🔮 *.cosplay*
︎︎︎ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'Konede.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'Konede.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(Animes|animes)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
