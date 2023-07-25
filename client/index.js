let { cekPengajuan } = require("../src/cek")
const fs = require('fs');


const qrcode = require("qrcode-terminal");
const {
  Client,
  LocalAuth,
  MessageMedia,
} = require("whatsapp-web.js");

const { menuAwal } = require("../src/menus");
const Restitusi = require("../src/Restitusi");
const Sppd = require("../src/Sppd");
const profilePegawai = require("../src/profilPegawai");

let sessions = {};

setInterval(() => {
  sessions = {};
  console.log(sessions);
}, 120000 * 12);

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
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
validation = false;

client.on("message", async (msg) => {

  if (msg.from !== "status@broadcast"){

  console.log(`Message from ${msg.from}: ${msg.body}`);
  chat = await msg.getChat();

  if (!sessions[msg.from]) {
    sessions[msg.from] = msg.from;
    console.log(`Session ${msg.from} telah disimpan.`);
    console.log(sessions);
    isSent = false;
  }

  if (!isSent || msg.body.toLowerCase() == "/menu") {
    await chat.sendMessage(menuAwal());
    await chat.mute();
    isSent = true;
    validation = false;
  }

  if (msg.body.toLowerCase().includes("!cek")){
    let NIP = msg.body.toUpperCase().split("CEK")[1]
    let from = msg.from
    console.log(NIP)
    console.log(from)
    let cek = await cekPengajuan(NIP, from)

    if(cek){
      let result = await MessageMedia.fromFilePath(`./cek${NIP}.xlsx`);
      await client.sendMessage(from, result,{caption: 'Lihat pengajuan anda pada excel diatas'})
      await fs.unlink(`./cek${NIP}.xlsx`, (err) => {
        if (err) throw err;
        console.log('File deleted');
      });
    }else if(cek == false){
      await client.sendMessage(from, `Maaf ${NIP} anda tidak ada dalam daftar pengajuan`)
    }

  }

  if (chat.isMuted) {
    if (msg.body == "0") {
      await chat.unmute();
      await chat.sendMessage(
        "Apakah anda ingin terhubung ke Admin (Ya / Tidak)"
      );
    } else {
      switch (msg.body.toLowerCase()) {
        case "1":
          await chat.sendMessage(Restitusi.menuGigi());
          break;
        case "2":
          await chat.sendMessage(Restitusi.menuRawatJalan());
          break;
        case "3":
          await chat.sendMessage(Restitusi.menuRawatInap());
          break;
        case "4":
          await chat.sendMessage(Restitusi.menuKacamata());
          break;
        case "5":
          await chat.sendMessage(Restitusi.menuPlnSehat());
          break;
        case "6":
          await chat.sendMessage(Restitusi.faskesPDF());
          // isSent = false;
          break;

        // SPPD Menu
        case "7":
          await chat.sendMessage(Sppd.menuUtama());
          break;
        case "7.1":
          await chat.sendMessage(Sppd.aturanSPPD());
          break;
        case "8":
          await chat.sendMessage(Sppd.cetakFormRestitusi());
          // isSent = false;
          break;
        case "9":
          await chat.sendMessage(Sppd.pengajuanSppd());
          // isSent = false;
          break;
        case "10":
          await chat.sendMessage(Sppd.cek())
          break
        case "11":
          await chat.sendMessage(profilePegawai.penambahanAnggotaKeluarga(),{caption: profilePegawai.penambahanAnggotaKeluargaCaption()});
          break;
        case "12":
          await chat.sendMessage(profilePegawai.updatePendidikanTerakhir());
          break;
        default:
          break;
      }
    }
  } 
  else if (!chat.isMuted && msg.body.toLowerCase() == "ya" && !validation) {
    validation = true;
    console.log("UNMUTED");
    await chat.sendMessage(
      "Mohon tunggu sebentar, kami akan sambungkan ke Admin yang bersangkutan."
    );
    await client.sendMessage(
      "6285155194942@c.us",
      `${msg.from} Ingin terhubung dengan Admin`
    );
    await chat.sendMessage("Admin telah terhubung");
  } else if (
    !chat.isMuted &&
    msg.body.toLowerCase() &&
    !validation &&
    msg.body.toLowerCase() != "/menu"
  ) {
    await chat.mute();
    await chat.sendMessage(menuAwal());
  }
  console.log(`isSent: ${isSent}`);
  console.log(`chat status: ${chat.isMuted}`);
  console.log(`validation status : ${validation}`);
}
});

module.exports = client;