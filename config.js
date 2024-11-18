const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917439353662";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_14_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMmxUazRDWUtHeDdPUUJNWldrT3BEeFlyWGd3UWR6UWM1Q2Z3UkhNcHNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTa0tlR1RsNlNLLWU2ZFlsTkNwS0NRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzZTYxMzcwLWQ2OTAtNDlkMy05ZmFiLTNkNjk0M2YyOGI2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxMDYsXG4gICAgICAxNTQsXG4gICAgICAzOCxcbiAgICAgIDE0NSxcbiAgICAgIDE0NyxcbiAgICAgIDE5LFxuICAgICAgMTY0LFxuICAgICAgMzMsXG4gICAgICAxODYsXG4gICAgICA2MSxcbiAgICAgIDM0LFxuICAgICAgNjksXG4gICAgICAxMTEsXG4gICAgICAxMTgsXG4gICAgICA1NyxcbiAgICAgIDIwMyxcbiAgICAgIDI1NSxcbiAgICAgIDYzLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNjksXG4gICAgICAyMSxcbiAgICAgIDYsXG4gICAgICAyMCxcbiAgICAgIDIxLFxuICAgICAgMTYyLFxuICAgICAgMTIxLFxuICAgICAgMTMxLFxuICAgICAgMTAsXG4gICAgICAyMjAsXG4gICAgICAxOTcsXG4gICAgICA0MixcbiAgICAgIDksXG4gICAgICA3OSxcbiAgICAgIDIsXG4gICAgICAyNDAsXG4gICAgICAyMzYsXG4gICAgICAzNCxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQ0NQSjhKNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3NDM5MzUzNjYyOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVIgREFSS05FU1MgQk9UXCIsXG4gICAgXCJsaWRcIjogXCIyMzU1MjM2NDE3NDEzMjE6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhvMWJvRkVKVDc3TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaS0Z1RnZTSTYrUDJNNE8yWjNtaVFXTTdvc0pkdE5ueUZGdVBwNURyWUVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVzdGw0K2gyQk9Cc3ZVQzlJdXpKamprMm04NWlVTDFBM2NZSGNaMWVCc0VYUERTZ3lpNU1uWDlBSkFYcldYK2xKZkpad3BwZmVTY2xGRC9FZzBLb0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5WZk9IMmxFUENaa1B6MFZSaDErMGFRYkM5V202K3ZKSWNxTkRrSTFxYlIwMWI1cW9lOFZDa29iOGMyRVVvZTFGKzgybWo2TS9IalpDbmxZV3VsTURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzQzOTM1MzY2Mjo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTM1NjM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzZXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxUE1hREtwcTNpS0k1RnpyMzVMeEcxYk1weERqcmVoa1lGdXJtd2doWmtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjUyMTgwNTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTkzNTY0MjM4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
