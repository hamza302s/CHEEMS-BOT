//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: S4 Salman YT" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'X-BOT-MD' //ur bot name
global.ownernumber = '923184070915' //ur owner number
global.ownername = 'Salman Ahmad' //ur owner name
global.websitex = "https://youtu.com/@s4salmanyt"
global.wagc = "https://whatsapp.com/channel/0029VaE8GbCDzgTILE7OtC3e"
global.themeemoji = '🪀'
global.wm = "X Bot Inc."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V2-MD' //script link
global.packname = "𝙂𝙊𝙅𝙊 𝙆𝙐𝙉"
global.author = "ᗰᗩᗪE ᗷY 𝙎𝘼𝙇𝙈𝘼𝙉 𝘼𝙃𝙈𝘼𝘿"
global.creator = "923184070915@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923184070915"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '212' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
