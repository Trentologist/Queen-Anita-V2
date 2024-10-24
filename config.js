//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349034020621";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpzOWk2NWE2bU5BNHlBNWJ6Qi9TT05tRVcvWEsxNjhEY2owZGZQRmNWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDRvSGVZSTdLK2dlVnpIc2pSa0J1VGJJWkZETkhGc2RlNzcwVFM0TDYxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGcyTUV5UVJ5Q2F5TG0xTmJCc3phVktQVkNiNTFNNjBheUtUZ1YwVkg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzWVRpbThvWnQyMTFnM29zREZIZkdVeXpXN0RhVk4yVDZ2VXdRSXU2VnpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCZkZERjJLODJ1UFpQaGdYRUZ1VHVCdGtMRTQvSnlWVXFZYU5ydS9oMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImViVkNJK0N2VnJEYW8rT2ZxS29YM1FyM2lIdDcwSU5FQnpTU2pJTTBXbm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01JRFBHYlFDYkxWRDdCdkVJMjJ0UGVKTWVhaE5MR1hUSU9HVGxqOS9tTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHlUSTljNEVrWGU1N0YvcURpSFFjeUlhenFBVktZNURjSmtvQzZYVG9HMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxtQ2lNTXdIYzFhNjJXQTRvR3JicHhoSm9xVlFLRFBqQ2dDRU1mRk5MMVZNaHhKd21OdTlWaW1sVnhmYndsa3lNSlhhd2w0MmtuUVpiaVlySzN4emh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiIxR2tLOGFVdlFKUENpSHM3RzJOSGhFMWVKeE4yclgxU1NoQ1R3QTRzSUxFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3Y3ZVNlhlb1JFbUc3bmo3U19iMWNnIiwicGhvbmVJZCI6IjJjNmVkNGFmLTI1ZWItNDQyNS05NTdhLWY2MTAwZTY2YmJkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5YmJSQjBZdE9Nd0MxMFhYNWdVUWhUelVaZ1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTS96VUZnTklXVE9YU0dzRXVRVG9oYW5iWWdVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNFSFlLSjQ0IiwibWUiOnsiaWQiOiIyMzQ5MDM0MDIwNjIxOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1NnRyVUhFTEtnNTdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndlQ3lMdkFPNldCMTNjb0d4ektOVzhHL0R1bXdKaXJ4OGFueWNFdEZ4M3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9kRThZTmtHd0NKb3hleHdXTlFub240UTlPNURJT0tjTG1vdmQvK2xqQWJ2d0NBNGR5WGc4eTgwekhYSnRjbDMyK3k1VnhnMFFHakFhazVDMk0vNkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxdmR4cmRVWGZqTlNMSUhTWU51V09VUHJrMzVUbjFMQ2RheGw1NTZXNlU1TWV5UzJkLzVWeVd3M1gvNzJqQzZJbWZ1TlBxbGxLRWExcDdzK1E1N2tqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzQwMjA2MjE6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSGdzaTd3RHVsZ2RkM0tCc2N5alZ2QnZ3N3BzQ1lxOGZHcDhuQkxSY2Q3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NzQ0OTYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhVTSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
