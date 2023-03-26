const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const { menuAwal } = require("../src/menus");
const Restitusi = require("../src/Restitusi");
const Sppd = require("../src/Sppd");

let sessions = {};

setInterval(() => {
    sessions = {};
    console.log(sessions);
 }, 60000 * 12);

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox'],
}
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

isSent = false;

client.on("message", async (msg) => {
  console.log(`Message from ${msg.from}: ${msg.body}`);
  chat = await msg.getChat();
  
  if (!sessions[msg.from]) {
    sessions[msg.from] = msg.from;
    console.log(`Session ${msg.from} telah disimpan.`);
    console.log(sessions);
    isSent = false;
  }

    if (!isSent) {
      await chat.sendMessage(menuAwal());
      isSent = true;
    }
    
    switch (msg.body.toLowerCase()) {
      case "/menu":
        await chat.sendMessage(menuAwal());
        break;
      case "/gigi":
        await chat.sendMessage(Restitusi.menuGigi());
        break;
      case "/rawatjalan":
        await chat.sendMessage(Restitusi.menuRawatJalan());
        break;
      case "/rawatinap":
        await chat.sendMessage(Restitusi.menuRawatInap());
        break;
      case "/kacamata":
        await chat.sendMessage(Restitusi.menuKacamata());
        break;
      case "/unduhdaftarfaskes":
        await chat.sendMessage(Restitusi.faskesPDF());
        isSent = false;
        break;

      // SPPD Menu
      case "/informasisppd":
        await chat.sendMessage(Sppd.menuUtama());
        break;
      case "/pengajuansppd":
        await chat.sendMessage(Sppd.pengajuanSppd());
        isSent = false;
        break;
      default:
        break;
    }


  console.log(`isSent: ${isSent}`);
});

module.exports = client