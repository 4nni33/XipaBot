let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `ততত ʚ🫐ɞ  𝗫𝗶𝗽𝗮𝗕𝗼𝘁 ✨ ⤾·˚ ༘ ততত\n┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈\n${oi}\n_⋆ ࣪.𓏲 ๋࣭ Personitas:_\n`
for (let mem of participants) {
teks += `🫐໋᳝݊▹֛◌ @${mem.id.split('@')[0]}\n`}
teks += `┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
