import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply(`তততʚ🩵ɞ  𝗔𝗻𝗻𝗶𝗲𝗕𝗼𝘁 ✨ ⤾·˚ ༘ততত\n⋆ ࣪.𓏲 ๋࣭ *𝗛ᴏʟᴀ,${taguser} \n⋆ ࣪.𓏲 ๋࣭ 🥳 ғᴇʟɪᴄɪᴅᴀᴅᴇs ʜᴀ sᴜʙɪᴅᴏ ᴅᴇ ɴɪᴠᴇʟ\n⋆ ࣪.𓏲 ๋࣭🔸ɴɪᴠᴇʟ ᴀɴᴛᴇʀɪᴏʀ: ${before} \n⋆ ࣪.𓏲 ๋࣭ ⬆️ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ: ${user.level} \n⋆ ࣪.𓏲 ๋࣭ ⚔️ʀᴀɴɢᴏ: ${user.role} \n⋆ ࣪.𓏲 ๋࣭ 📅ғᴇᴄʜᴀ: ${new Date().toLocaleString('id-ID')} \nㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()) 
}}

 
