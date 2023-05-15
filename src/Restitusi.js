const { MessageMedia } = require("whatsapp-web.js");

class Restitusi {
  static menuGigi() {
    return (
      "Informasi Syarat Reimburse Gigi\n" +
      "\n1. Regio Gigi\n2. Kwitansi, yang berisi tindakan yang dilakukan (Cabut, Tambal, Jenis Tambalan, Scaling). \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuRawatJalan() {
    return (
      "Informasi Syarat Reimburse Rawat Jalan\n" +
      "\nBerkas yang perlu disiapkan: \n" +
      "1. Kwitansi Pemeriksaan (Diagnosa)\n" +
      "2. Kwitansi Obat dan Copy Resep\n\n" +
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
      "4. Detail Resep Obat\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static menuKacamata() {
    return (
      "Informasi Syarat Reimburse Kacamata\n" +
      // "\nUntuk Pemeriksaan awal minimal  \n\n"+
      "\nBerkas yang perlu disiapkan: \n\n" +
      "1. Kwitansi Hasil Pemeriksaan Mata, Untuk hasil pemeriksaan awal minimal 0.5 baik silinder maupun minus\n" +
      "2. Kwitansi Rincian Pembelian Kacamata (Nominal lensa dan frame terpisah). \n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static faskesPDF() {
    const media = MessageMedia.fromFilePath(
      './doc/DAFTAR FASKES JAWA TIMUR.pdf'
    );
    return media;
  }
}

module.exports = Restitusi;
