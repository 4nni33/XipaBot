let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]¡Hola!, te informo que los números virtuales están prohibidos en este grupo*\n\n\n*[❗] HELLO I INFORM YOU THAT VIRTUAL NUMBERS ARE PROHIBITED IN THIS GROUP*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]¡Hola!, te informo que los números virtuales están prohibidos en este grupo*\n\n\n*[❗] HELLO I INFORM YOU THAT VIRTUAL NUMBERS ARE PROHIBITED IN THIS GROUP*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('972' || '972')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]¡Hola!, te informo que los números virtuales están prohibidos en este grupo*\n\n\n*[❗] HELLO I INFORM YOU THAT VIRTUAL NUMBERS ARE PROHIBITED IN THIS GROUP*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]¡Hola!, te informo que los números virtuales están prohibidos en este grupo*\n\n\n*[❗] HELLO I INFORM YOU THAT VIRTUAL NUMBERS ARE PROHIBITED IN THIS GROUP*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}    
   
}}
handler.register = true
export default handler
