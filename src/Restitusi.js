const { MessageMedia } = require("whatsapp-web.js");

class Restitusi {
  static menuGigi() {
    return (
      "Informasi Syarat Reimburse Gigi\n" +
      "\n1. Regio Gigi\n"+
      "2. Kwitansi, yang berisi tindakan yang dilakukan (Cabut, Tambal, Jenis Tambalan, Scaling). \n" +
      "3. Silahkan Upload berkas anda di portalhc.pln.co.id\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatJalan() {
    return (
      "Informasi Syarat Reimburse Rawat Jalan\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Kwitansi Pemeriksaan (Diagnosa)\n" +
      "2. Kwitansi Obat dan Copy Resep\n" +
      "3. Silahkan input dan upload berkas scan anda melalui Aplikasi New PLN Sehat (https://linktr.ee/plnsehat)\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatInap() {
    return (
      "Informasi Syarat Reimburse Rawat Inap\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Resume Medis\n" +
      "2. Semua Hasil Lab\n" +
      "3. Kwitansi Pembayaran\n" +
      "4. Detail Resep Obat\n" +
      "5. Silahkan Upload berkas anda di portalhc.pln.co.id\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuKacamata() {
    return (
      "Informasi Syarat Reimburse Kacamata\n" +
      "\nBerkas yang perlu disiapkan: \n\n" +
      "1. Kwitansi Hasil Pemeriksaan Mata, Untuk hasil pemeriksaan awal minimal 0.5 baik silinder maupun minus\n" +
      "2. Kwitansi Rincian Pembelian Kacamata (Nominal lensa dan frame terpisah). \n" +
      "3. Silahkan Upload berkas anda di portalhc.pln.co.id\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuPlnSehat() {
    const media = MessageMedia.fromFilePath(
      './doc/New PLN Sehat.pdf'
    );
    return media;
  }

  static faskesPDF() {
    const media = MessageMedia.fromFilePath(
      './doc/DAFTAR FASKES JAWA TIMUR.pdf'
    );
    return media;
  }
}

module.exports = Restitusi;
