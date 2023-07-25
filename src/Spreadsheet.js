const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");
const fs = require('fs');
const ExcelJS = require('exceljs');
const delay = require('delay');
const clients = require("../client")
const { MessageMedia } = require("whatsapp-web.js");

const nomerWaBuYaniar = '6281233541429'
const nomerTesting = '6285155194942'
// console.log(clients);
const credentials = require("../src/chatbot.json");

const doc = new GoogleSpreadsheet(
  "121RwpPqaiVdllSbw7mdV_j29u_nSiPpnePFeNvUabx4"
);

const docProfilePegawai = new GoogleSpreadsheet(
  "1P4RnnVzyMZxVXapGTBYnkB_yo5ohqq9HIp4hvTYyLyA"
);


const sheetNumber = 0;

let i = 1
async function accessSpreedsheet() {

    // !! Excel from Pengajuan SPPD = #1
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[sheetNumber];
    let currentRowCount = sheet.rowCount;
  
    // !! Excel from Updated Pendidikan Terakhir = #2
    await docProfilePegawai.useServiceAccountAuth(credentials);
    await docProfilePegawai.loadInfo();
    const sheetProfilePegawai = docProfilePegawai.sheetsByIndex[sheetNumber];
    let currentRowCountPP = sheetProfilePegawai.rowCount;

  do{
    await delay(2000)

    try{

	  await sheet.loadCells();
    const newRowCount = sheet.rowCount;

    if (newRowCount > currentRowCount) {
      await sheet.loadHeaderRow();
      console.log(`New row added at index ${newRowCount - 1}`);
      // console.log(clients);

      let indexNewRow = parseInt(newRowCount.toString()-2 - 100)
      const newRow = await sheet.getRows();

      
      let timeStamp = newRow[indexNewRow]._rawData[0]
      let nip = newRow[indexNewRow]._rawData[1]
      let nama = newRow[indexNewRow]._rawData[2]
      let unit = newRow[indexNewRow]._rawData[3]
      let startDate = newRow[indexNewRow]._rawData[4]
      let endDate = newRow[indexNewRow]._rawData[5]
      let tujuan = newRow[indexNewRow]._rawData[6]
      let alasan = newRow[indexNewRow]._rawData[7]
      let jenisSppd = newRow[indexNewRow]._rawData[8]
      let kendaraan = newRow[indexNewRow]._rawData[9]
      let uploadSurat = newRow[indexNewRow]._rawData[11]
      let uploadFormSppdPegawai = newRow[indexNewRow]._rawData[14]
      let uploadTransportasi = newRow[indexNewRow]._rawData[13]
      let klaimHotel = newRow[indexNewRow]._rawData[10]
      let uploadFormSppd = newRow[indexNewRow]._rawData[12]

      // Buat file Excel baru dan tambahkan data pada row ke sheet Excel
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');

      worksheet.getCell('A1').value = 'Timestamp :';
      worksheet.getCell('A2').value = timeStamp;
      worksheet.getCell('B1').value = 'NIP :';
      worksheet.getCell('B2').value = nip;
      worksheet.getCell('C1').value = 'Nama :';
      worksheet.getCell('C2').value = nama;
      worksheet.getCell('D1').value = 'Unit :';
      worksheet.getCell('D2').value = unit;
      worksheet.getCell('E1').value = 'Tanggal Start :';
      worksheet.getCell('E2').value = startDate;
      worksheet.getCell('F1').value = 'Tanggal End :';
      worksheet.getCell('F2').value = endDate;
      worksheet.getCell('G1').value = 'Tujuan :';
      worksheet.getCell('G2').value = tujuan;
      worksheet.getCell('H1').value = 'Alasan :';
      worksheet.getCell('H2').value = alasan;
      worksheet.getCell('I1').value = 'Jenis SPPD :';
      worksheet.getCell('I2').value = jenisSppd;
      worksheet.getCell('J1').value = 'Kendaraan :';
      worksheet.getCell('J2').value = kendaraan;
      worksheet.getCell('K1').value = 'Surat Undangan :';
      worksheet.getCell('K2').value = uploadSurat;
      worksheet.getCell('L1').value = 'Form SPPD Pegawai :';
      worksheet.getCell('L2').value = uploadFormSppdPegawai;
      worksheet.getCell('M1').value = 'Kwitansi Transportasi :';
      worksheet.getCell('M2').value = uploadTransportasi;
      worksheet.getCell('N1').value = 'Kwitansi Hotel :';
      worksheet.getCell('N2').value = klaimHotel;
      worksheet.getCell('O1').value = 'Form SPPD :';
      worksheet.getCell('O2').value = uploadFormSppd;


      // Simpan file Excel di dalam direktori lokal
      await workbook.xlsx.writeFile(`./src/${nip}.xlsx`);

      const sendData = async () => {
        result = await MessageMedia.fromFilePath(`./src/${nip}.xlsx`)
        await clients.sendMessage(`${nomerTesting}@c.us`, `Halooo minn, ada yang ngajuin SPPD baru!!!`)
        await clients.sendMessage(`${nomerTesting}@c.us`, result)
        console.log("pesan berhasil dikirim")
        removeHandler()
    }

    const removeHandler = async () => {
      await fs.unlink(`./src/${nip}.xlsx`, (err) => {
          if (err) throw err;
          console.log('File deleted');
        });

    }

    sendData()

      currentRowCount++
    }
    else{
      console.log("belum ada data SPPD baru")
    }
       // #Update data pendidikan
       await sheetProfilePegawai.loadCells();
       const newRowCountPP = sheetProfilePegawai.rowCount;
   
       if (newRowCountPP > currentRowCountPP) {
         await sheetProfilePegawai.loadHeaderRow();
         console.log(`New row added at index ${newRowCountPP - 1}`);
         // console.log(clients);
   
         let indexNewRow = parseInt(newRowCountPP.toString() - 2 - 100);
         const newRow = await sheetProfilePegawai.getRows();
   
         let timeStamp = newRow[indexNewRow]._rawData[0];
         let nama = newRow[indexNewRow]._rawData[1];
         let nip = newRow[indexNewRow]._rawData[2];
         let unit = newRow[indexNewRow]._rawData[3];
         let uploadTranskip = newRow[indexNewRow]._rawData[4];
         let uploadIjazah = newRow[indexNewRow]._rawData[5];
   
         // Buat file Excel baru dan tambahkan data pada row ke sheet Excel
         const workbook = new ExcelJS.Workbook();
         const worksheet = workbook.addWorksheet("Sheet1");
   
         worksheet.getCell("A1").value = "Timestamp";
         worksheet.getCell("A2").value = timeStamp;
         worksheet.getCell("B1").value = "Nama";
         worksheet.getCell("B2").value = nama;
         worksheet.getCell("C1").value = "NIP";
         worksheet.getCell("C2").value = nip;
         worksheet.getCell("D1").value = "Unit";
         worksheet.getCell("D2").value = unit;
         worksheet.getCell("E1").value = "Upload Transkip";
         worksheet.getCell("E2").value = uploadTranskip;
         worksheet.getCell("F1").value = "Upload Ijazah";
         worksheet.getCell("F2").value = uploadIjazah;
   
         // Simpan file Excel di dalam direktori lokal
         await workbook.xlsx.writeFile(`./src/UpdatePendidikan_${nip}.xlsx`);
   
         const sendData = async () => {
           result = await MessageMedia.fromFilePath(
             `./src/UpdatePendidikan_${nip}.xlsx`
           );
           await clients.sendMessage(
             `${nomerTesting}@c.us`,
             "Haloo minn, Ada yang Update Pendidikan nihhh!!!"
           );
           await clients.sendMessage(`${nomerTesting}@c.us`, result);
           console.log("pesan berhasil dikirim");
           removeHandler();
         };
   
         const removeHandler = async () => {
           await fs.unlink(`./src/UpdatePendidikan_${nip}.xlsx`, (err) => {
             if (err) throw err;
             console.log("File deleted");
           });
         };
   
         sendData();
   
         currentRowCountPP++;
       } else {
          console.log("belum ada data pendidikan baru");
       }
   }catch(error){console.log(error)}
  } while ((i = 1));
}

//accessSpreedsheet();

module.exports = {accessSpreedsheet}
