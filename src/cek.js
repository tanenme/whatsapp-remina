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
  "1CpxYN9g4rzrhE8XlGF-DsWRokimQE74XmRl3wKDAnTw"
);

async function cekPengajuan(NIP, from){
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheetIndex = 0;
  
    const sheet = doc.sheetsByIndex[sheetIndex];
    const rows = await sheet.getRows();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    worksheet.getCell('A1').value = 'NO';
    worksheet.getCell('B1').value = 'PERS NO';
    worksheet.getCell('C1').value = 'NIPEG';
    worksheet.getCell('D1').value = 'NAMA PEGAWAI';
    worksheet.getCell('E1').value = 'NO_TRIP';
    worksheet.getCell('F1').value = 'NO.DOC';
    worksheet.getCell('G1').value = 'BIS-A';
    worksheet.getCell('H1').value = 'TGL.BRGKT';
    worksheet.getCell('I1').value = 'TGL.KMBALI';
    worksheet.getCell('J1').value = 'RUPIAH';
    worksheet.getCell('K1').value = 'TUJUAN';
    worksheet.getCell('L1').value = 'A/N REKENING';
    worksheet.getCell('M1').value = 'NAMA BANK';
    worksheet.getCell('N1').value = 'NO. REKENING';
    worksheet.getCell('O1').value = 'GOL SPPD';
    worksheet.getCell('P1').value = 'NO SURAT AMS';
    worksheet.getCell('Q1').value = 'TGL DIPROSES UID';
    worksheet.getCell('R1').value = 'TERBAYAR TANGGAL(SESUAI SAP) _NO DOC';



    let nipAda = false

    let index = 1
    for (const row of rows) {

        if (row._rawData && row._rawData[2] && row._rawData[2].toUpperCase() === NIP) {
            index++
            console.log(index)
            worksheet.getCell(`A${index}`).value = index-1;
            worksheet.getCell(`B${index}`).value = row._rawData[1];
            worksheet.getCell(`C${index}`).value = row._rawData[2]
            worksheet.getCell(`D${index}`).value = row._rawData[3]
            worksheet.getCell(`E${index}`).value = row._rawData[4]
            worksheet.getCell(`F${index}`).value = row._rawData[5]
            worksheet.getCell(`G${index}`).value = row._rawData[6]
            worksheet.getCell(`H${index}`).value = row._rawData[7]
            worksheet.getCell(`I${index}`).value = row._rawData[8]
            worksheet.getCell(`J${index}`).value = row._rawData[9]
            worksheet.getCell(`K${index}`).value = row._rawData[10]
            worksheet.getCell(`L${index}`).value = row._rawData[11]
            worksheet.getCell(`M${index}`).value = row._rawData[12]
            worksheet.getCell(`N${index}`).value = row._rawData[13]
            worksheet.getCell(`O${index}`).value = row._rawData[14]
            worksheet.getCell(`P${index}`).value = row._rawData[15]
            worksheet.getCell(`Q${index}`).value = row._rawData[16]
            worksheet.getCell(`R${index}`).value = row._rawData[17]


            console.log("ada")
            nipAda = true
      }
    }

    index = 0 
  
    if(nipAda == true){
    await workbook.xlsx.writeFile(`cek${NIP}.xlsx`);
    }

    return nipAda

}

module.exports = {cekPengajuan}
