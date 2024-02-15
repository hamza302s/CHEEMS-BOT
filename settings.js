//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +923417680053
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: hamzatech143" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'DEVELOPER-MD' //ur bot name
global.ownernumber = '+923417680053' //ur owner number
global.ownername = 'DEVELOPER' //ur owner name
global.websitex = "https://youtu.com/hamzatech143"
global.wagc = "https://chat.whatsapp.com/HtYi4zbAwUbCeSOBJCa00V"
global.themeemoji = '🪀'
global.wm = "X Bot Inc."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V2-MD' //script link
global.packname = "𝙂𝙊𝙅𝙊 𝙆𝙐𝙉"
global.author = "ᗰᗩᗪE ᗷY DEVELOPER"
global.creator = "923417680053@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923417680053"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '202' //set autoblock country code
global.antiforeignnumber = '202' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
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
