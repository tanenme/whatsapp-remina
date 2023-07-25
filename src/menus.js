function menuAwal() {
  let greetings =
    "Hai, Sahabat DeVA yang berbahagia \nAda yang bisa kami bantu ? \n\n";
  let introduce =
    "Silahkan Ketik Fitur/Jenis Layanan Informasi yang anda butuhkan : \n\n";

  let restitusi = "*Menu Restitusi*\n";
  let reimburse = {
    utama: "Informasi Syarat Reimburse : \n",
    gigi: "1. Pemeriksaan Gigi\n",
    rawatJalan: "2. Rawat Jalan\n",
    rawatInap: "3. Rawat Inap\n",
    kacamata: "4. Kacamata\n",
    plnSehat: "5. Informasi New PLN Sehat\n\n"
  };
  let faskes = {
    header: "Daftar Faskes Jawa Timur : \n",
    body: "6. Unduh Daftar Faskes PDF\n\n",
  };

  let sppd = {
    header: "*Menu SPPD*\n",
    information: "7. Informasi SPPD\n",
    cetakForm: "8. Cetak Form Restitusi SPPD\n",
    body: "9. Pengajuan SPPD\n",
    cek: "10. Monitoring Proses SPPD\n\n"
  };

  let profilePegawai = {
    header: "*Menu Profil Pegawai*\n",
    addKeluarga: "11. Penambahan Anggota Keluarga\n",
    updatePendidikanPegawai: "12. Update Pendidikan terakir Pegawai\n\n",
  };

  let admin = "0. Menghubungkan ke Admin\n\n";

  let footer =
    "Cara pilih Fitur atau Jenis Layanan dengan cara, Ketik nomor yang tertera pada Jenis Layanan yang dipilih.\n" +
    "Contoh: Ketik *1* untuk memilih menu Pemeriksaan Gigi.";

  return (
    greetings +
    introduce +
    restitusi +
    reimburse.utama +
    reimburse.gigi +
    reimburse.rawatJalan +
    reimburse.rawatInap +
    reimburse.kacamata +
    reimburse.plnSehat +
    faskes.header +
    faskes.body +
    sppd.header +
    sppd.information +
    sppd.cetakForm +
    sppd.body +
    sppd.cek +
    profilePegawai.header +
    profilePegawai.addKeluarga +
    profilePegawai.updatePendidikanPegawai +
    admin +
    footer
  );
}

module.exports = { menuAwal };