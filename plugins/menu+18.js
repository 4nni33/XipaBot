import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
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
let str = ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  AnnieBot ✨ ⤾·˚ ༘*
┈─𖨂 :✨ *𝗛ᴏʟᴀ,➟${taguser}*
┈─𖨂 :🔞 *Menu+18*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯

  ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Hentai ✨ ⤾·˚ ༘*
┈─𖨂 :🔞 *.nsfwloli*
┈─𖨂 :🔞 *.nsfwfoot*
┈─𖨂 :🔞 *.nsfwassnsfwbdsm*
┈─𖨂 :🔞 *.nsfwcum*
┈─𖨂 :🔞 *.nsfwero*
┈─𖨂 :🔞 *.nsfwfemdom*
┈─𖨂 :🔞 *.nsfwfoot*
┈─𖨂 :🔞 *.nsfwglss*
┈─𖨂 :🔞 *.nsfworgy*
┈─𖨂 :🔞 *.yuri*
┈─𖨂 :🔞 *.yuri2*
┈─𖨂 :🔞 *.yaoi*
┈─𖨂 :🔞 *.yaoi2*
┈─𖨂 :🔞 *.panties*
┈─𖨂 :🔞 *.tits*
┈─𖨂 :🔞 *.booty*
┈─𖨂 :🔞 *.pechos*
┈─𖨂 :🔞 *.tetas*
┈─𖨂 :🔞 *.booty*
┈─𖨂 :🔞 *.ecchi*
┈─𖨂 :🔞 *.furro*
┈─𖨂 :🔞 *.hentai*
┈─𖨂 :🔞 *.trapito*
┈─𖨂 :🔞 *.imagenlesbians*
┈─𖨂 :🔞 *.pene*
┈─𖨂 :🔞 *.porno*
┈─𖨂 :🔞 *.randomxxx*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(labiblia|Labiblia|Menuhetai|menuhetai)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
