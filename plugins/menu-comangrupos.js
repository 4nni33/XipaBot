import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen6
//let vn = './Plugins/Audios/menu.mp3'
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
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Grupos ✨ ⤾·˚ ༘*
┈─𖨂 :🔩 */enable welcome*
┈─𖨂 :🔩 */disable welcome*
┈─𖨂 :🔩 */enable public*
┈─𖨂 :🔩 */disable public*
┈─𖨂 :🔩 */enable restrict*
┈─𖨂 :🔩 */disable restrict*
┈─𖨂 :🔩 */enable pconly*
┈─𖨂 :🔩 */disable pconly*
┈─𖨂 :🔩 */enable anticall*
┈─𖨂 :🔩 */disable anticall*
┈─𖨂 :🔩 */enable simsimi*
┈─𖨂 :🔩 */disable simsimi*
┈─𖨂 :🔩 */enable modohorny*
┈─𖨂 :🔩 */disable modohorny*
┈─𖨂 :🔩 */enable antilink*
┈─𖨂 :🔩 */disable antilink*
┈─𖨂 :🔩 */enable antilink2*
┈─𖨂 :🔩 */disable antilink2*
┈─𖨂 :🔩 */enable detect*
┈─𖨂 :🔩 */disable detect*
┈─𖨂 :🔩 */enable detect2*
┈─𖨂 :🔩 */disable detect2*
┈─𖨂 :🔩 */enable autosticker*
┈─𖨂 :🔩 */disable autosticker*
┈─𖨂 :🔩 */enable antiviewonce*
┈─𖨂 :🔩 */disable antiviewonce*
┈─𖨂 :🔩 */enable antitoxic*
┈─𖨂 :🔩 */disable antitoxic*
┈─𖨂 :🔩 */enable antitraba*
┈─𖨂 :🔩 */disable antitraba*
┈─𖨂 :🔩 */enable antiarabes*
┈─𖨂 :🔩 */disable antiarabes*
┈─𖨂 :🔩 */enable modoadmin*
┈─𖨂 :🔩 */disable modoadmin*
︎ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()
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
handler.command = /^(comangrupos|Comangrupos)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
