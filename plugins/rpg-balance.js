let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
│💰 *𝐁𝐀𝐋𝐀𝐍𝐂𝐄* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  *✨*𝙽𝚘𝚖𝚋𝚛𝚎:* ${name}
│➥ 𓏲 ๋࣭  *💎𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${global.db.data.users[who].limit}💎
│➥ 𓏲 ๋࣭  *💵dolares* ${global.db.data.users[who].joincount}
│➥ 𓏲 ๋࣭  *♦️ʜᴀᴅᴇs-ᴄᴏɪɴs* ${global.db.data.users[who].money}
│➥ 𓏲 ๋࣭  *🧿Exp* ${global.db.data.users[who].exp}
╰───────────────╯
ㅤ
╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
│➥ 𓏲 ๋࣭  📝*𝙽𝙾𝚃𝙰:*
│➥ 𓏲 ๋࣭  *para ir al tienda y 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎 usa el  𝚌𝚘𝚖𝚊𝚗𝚍𝚘*
│➥ 𓏲 ๋࣭  *.shop*
╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'dinero', 'balance'] 
handler.register = true
export default handler
