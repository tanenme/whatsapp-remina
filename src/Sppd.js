const { MessageMedia } = require("whatsapp-web.js");

class Sppd {
  static menuUtama() {
    return (
      "Informasi SPPD\n\n" +
      "SPPD merupakan kependekan dari Surat Perintah Perjalanan Dinas, dan yang berhak mengajukan antara lain :\n\n" +
      "1. PLN Sutojayan -> Kediri\n" +
      "2. PLN Wlingi -> Kediri\n" +
      "3. Perjalanan Dinas yang lebih dari 50km\n\n" +
      "Adapun aturan dari SPPD, Silahkan Ketik *7.1* untuk mendapatkan File PDF tentang aturan SPPD.\n\n" +
      "Silahkan Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static pengajuanSppd() {
    return (
      "*Pengajuan SPPD*\n\n" +
      "Untuk Mengajukan SPPD, terdapat beberapa persyaratan yang harus dipenuhi oleh karyawan atau pegawai yang akan melakukan perjalanan dinas. Beberapa persyaratan umum yang mungkin dibutuhkan antara lain :\n\n" +
      "1. Melengkapi Formulir yang disediakan.\n" +
      "2. Melampirkan Surat Perintah.\n" +
      "3. Jika melakukan Reservasi Transportasi atau Penginapan harus menyertekan buktinya.\n" +
      "\nSilahkan akses link berikut untuk mulai mengisi Formulir pengajuan SPPD https://forms.gle/spYs2YZiQ4eexetM9 " +
      "atau Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }

  static aturanSPPD() {
    const media = MessageMedia.fromFilePath(
      "./doc/PERATURAN PERJALANAN DINAS.pdf"
    );
    return media;
  }

  static cetakFormRestitusi() {
    const media = MessageMedia.fromFilePath(
      "./doc/FORMULIR PERMOHONAN SPPD PEGAWAI.xlsx"
    );
    return media;
  }

  static cek(){
    return (
      "*Monitoring Proses pengajuan SPPD*\n" + 
      "Anda dapat melakukan Monitoring Proses pengajuan SPPD yang telah anda ajukan dengan cara mengirim pesan *!cekNIP*\n"+
      "contoh: *!cek1234567YZ*"
    )
  }
}

module.exports = Sppd;
