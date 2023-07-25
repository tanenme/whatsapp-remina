const { MessageMedia } = require("whatsapp-web.js");

class profilePegawai {
  static penambahanAnggotaKeluarga() {
    const media = MessageMedia.fromFilePath(
      "./doc/FORM_DPEG002_01_PERUBAHAN_DATA_KELUARGA_v3.pdf"
    );
    return media;
  }

  static penambahanAnggotaKeluargaCaption() {
    return (
      "Untuk melakukan update Penambahan Anggota Keluarga, silahkan :\n\n" +
      "1. Unduh formulir penambahan Anggota Keluarga diatas\n" +
      "2. Mengisi Form Penambahan Anggota Keluarga\n" +
      "3. Melengkapi persyaratan sesuai form\n"+
      "4. Kirimkan Scan berkas tsb ke email yaniar@pln.co.id atau wahyu.susanto@pln.co.id\n\n"+
      "Ketik /Menu untuk kembali ke Menu Utama"
    )
  }
  

  static updatePendidikanTerakhir() {
    return (
      "*Update Pendidikan Terakhir*\n\n" +
      "Untuk melakukan update pendidikan terakhir, ada beberapa tahapan berikut tahapannya : \n\n" +
      "1. Mengisikan Formulir yang disediakan\n" +
      "2. Melakukan Upload File Ijazah dan Transkrip Nilai\n\n" +
      "Silahkan akses link berikut untuk melakukan update pendidikan terakhir https://forms.gle/imiohwVHc8NdJMJ19 " +
      "atau Ketik */Menu* untuk kembali ke Menu Utama"
    );
  }
}

module.exports = profilePegawai;