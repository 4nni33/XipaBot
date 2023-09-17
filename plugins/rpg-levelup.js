import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
│➥ 𓏲 ๋࣭ ─⊷ *LEVEL*
│➥ 𓏲 ๋࣭ Nombre : *${name}*
│➥ 𓏲 ๋࣭ Nivel : *${user.level}*
│➥ 𓏲 ๋࣭ XP : *${user.exp - min}/${xp}*
╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯
You need *${max - user.exp}* of *XP* to level up`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`
        let str = `╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
│➥ 𓏲 ๋࣭ ─⊷ *LEVEL UP*
│➥ 𓏲 ๋࣭ Nivel anterior : *${before}*
│➥ 𓏲 ๋࣭ Nivel actual : *${user.level}*
╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯
The more you interact with the bots, the higher your level will be_*`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true
export default handler
