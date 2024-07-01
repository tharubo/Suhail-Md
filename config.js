const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itzzalexid@gmail.com"
global.location="sri lanka,dambulla."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://alex:#2289853736t@cluster0.2lbxwwy.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DxFMDq5NoZlAFjvt656t4B";
global.website=process.env.GURL || "https://chat.whatsapp.com/DxFMDq5NoZlAFjvt656t4B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴀ ʙᴏᴛ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94720260293";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_10_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk0wRHpoQ2RFRFM5L2g4d3JNKzhNN2k5UmlCcHNvWHRyN1pHVk91MmR4c0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjAyNjAyOTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBNTg1NDIwNkUyRUU1QzA0QzBCM0MzNjM4MTlERDBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTgyODYxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIwMjYwMjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Q0FCRTRGRTYzQ0E2MkJDRUM0MEFCNUU4QzdCMjEyRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4Mjg2MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMDI2MDI5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTQ1M0QzRTdFQjY3Mjg2QjM4NzMzM0JEOEJDQTA3NDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODI4NjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjAyNjAyOTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0MTdFNUE0NkU3QkM3MDZFMzUxQjI4MEQ0NTlGQzFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTgyODYxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzSHBYaVFvQ1JpU29zNGpsRGktOTVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUxMzQxYjE1LWVkZGYtNGM4Ni05YTRlLTdjZTFlNzg5MTMzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxNzAsXG4gICAgICAxOTYsXG4gICAgICAxNjUsXG4gICAgICA2NixcbiAgICAgIDMsXG4gICAgICAxMTIsXG4gICAgICAyMzksXG4gICAgICA3NixcbiAgICAgIDEyNyxcbiAgICAgIDEzNixcbiAgICAgIDE5LFxuICAgICAgODEsXG4gICAgICAzOSxcbiAgICAgIDI1MyxcbiAgICAgIDM1LFxuICAgICAgNTcsXG4gICAgICAyNDMsXG4gICAgICAxNjcsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMzcsXG4gICAgICA4OSxcbiAgICAgIDczLFxuICAgICAgNDcsXG4gICAgICAxODksXG4gICAgICAxNjgsXG4gICAgICAxOTEsXG4gICAgICAxNTgsXG4gICAgICAxNTIsXG4gICAgICA1NSxcbiAgICAgIDE3MyxcbiAgICAgIDEwLFxuICAgICAgMTIwLFxuICAgICAgMjE4LFxuICAgICAgMTY4LFxuICAgICAgNSxcbiAgICAgIDI0MSxcbiAgICAgIDE5OSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNREtSOVBCWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjAyNjAyOTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIu+8tyDOlCAg77yi77yv77y0XCIsXG4gICAgXCJsaWRcIjogXCIxMzU1OTcxNTEwNzAwNjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BlVXVmd0hFSUdCaXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS1JJOUxkaThNdFNib09FSEFrVUhYMStkM3JQS3ozcXkwQlZaWnA5QXBVWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRSExIeWJBeGtBRzdORk9QSlEwYW5mSzZrZ1ppWEhkNEpDSWhxeEZqeHVJWS9QcmhXU3d1UTdDdUoyWlBwVjJZL2pabVZZd3NKWTFoUS8wZXFxbnZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5VGVaRTR6TktSeVFGek9wRkkybE1HSmpLRmcvQnlhNXUwVEZsTHkyaFVUSmZHb0s5UGhBWEtvbDF4NjcwV1JrZEFVbkdQL05TYkh2VEg1bVR3SmhoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyMDI2MDI5Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODI4NjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTlTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJOVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGdnVwakMvMHlwYy9LT2plNWVTd3BUNWJoeEtJZUVFVHpBd3pCRTMxM0Y0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDAwMzE2MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyODYxMzk2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴀ ʙᴏᴛ²²¹-ᴍᴅ 』```"),
 
  author : process.env.PACK_AUTHER|| "ᴡᴀ ʙᴏᴛ",
  packname: process.env.PACK_NAME || "ʙᴏᴛ ɢʀᴏᴜᴘ",
  botname : process.env.BOT_NAME  || "ᴡᴀ ʙᴏᴛ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TharuWa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
