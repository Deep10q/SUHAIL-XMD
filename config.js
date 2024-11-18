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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_00_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXUlJnTlVNc2NvZndTSCthNEFXY0lheldHaVFEeVRDMG9WR29sMUc0dVZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhVE1pVmg4WFFXZWdmbnM5VjVma0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmNzAyYWUwLTU1NWYtNGMyMy04Yzk2LTY5ODg5NGJmYWE5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxOTgsXG4gICAgICAyMjYsXG4gICAgICAyMDcsXG4gICAgICA2MCxcbiAgICAgIDI1MSxcbiAgICAgIDE4MSxcbiAgICAgIDIxMyxcbiAgICAgIDM1LFxuICAgICAgMTI3LFxuICAgICAgNzcsXG4gICAgICA0MyxcbiAgICAgIDQyLFxuICAgICAgMTA3LFxuICAgICAgNzEsXG4gICAgICAxNDUsXG4gICAgICAyMjMsXG4gICAgICA1OSxcbiAgICAgIDEyMixcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDI1MixcbiAgICAgIDIxMCxcbiAgICAgIDI0NSxcbiAgICAgIDcwLFxuICAgICAgNTgsXG4gICAgICAyNDYsXG4gICAgICAxOTgsXG4gICAgICAyNSxcbiAgICAgIDE1NyxcbiAgICAgIDE3NSxcbiAgICAgIDU1LFxuICAgICAgMjQxLFxuICAgICAgMTcxLFxuICAgICAgMjE2LFxuICAgICAgMTIwLFxuICAgICAgMjA1LFxuICAgICAgMjAxLFxuICAgICAgNyxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU1IzQ0VWVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3NDM5MzUzNjYyOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVIgREFSS05FU1MgQk9UXCIsXG4gICAgXCJsaWRcIjogXCIyMzU1MjM2NDE3NDEzMjE6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBvMWJvRkVPaXY2N2tHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaS0Z1RnZTSTYrUDJNNE8yWjNtaVFXTTdvc0pkdE5ueUZGdVBwNURyWUVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZSQmsvMWord1NWU1ZENVcvUEwvQjlGQm9SZHh4SW1OMGdrNndVSE5hSU43QzZ6R3YvcnhqcGpub1VWai9rcHNVZ3gyQ3MxbGNPSXZzQU5sVXNmMkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInY1cy81ZXZydmFSdkw1MXJxcGkxeEE3Z3poc1ZCTjZuZThVZDRiME9hQURZOTgyN3JGcUgvWncrd2hhcE16NmN5TjZKNFpESytyQTBDTXo4bjBUUmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzQzOTM1MzY2Mjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTA5NjEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSndzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKd3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYNjF6cytFYXBDR2xWS1RNZHN2WTQrSnFpdmVTc293R3NjUlNsR0krZFdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjUyMTgwNTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTU4MDk2NjA3OVwifSIKfQ=="  // PUT your SESSION_ID 


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
