export async function all(m, conn) {
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.antispam)
return !0
if (+new Date() > user.antispam) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
texto = `[❗] @${m.sender.split("@")[0]} Estás baneado temporalmente\n espera durante ${tiempo / 1000 - 59} minutos.`
conn.reply(m.chat, texto, m, { mentions: this.parseMention(texto) })}, 
tiempo) 
//this.sendButton(m.chat, texto, wm, null, [['Menu 📌', '/menu']], m, { mentions: this.parseMention(texto) })}, tiempo)       
user.antispam = null
}}
 
