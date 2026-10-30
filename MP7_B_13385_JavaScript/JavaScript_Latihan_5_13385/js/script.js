function fn_ValForm() {
    var sMsg = "";
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;

    if (sNama == "") {
        sMsg += "\n* Nama belum diisi";
    }

    if (sEmail == "") {
        sMsg += "\n* Email belum diisi";
    }

    if (sUmur == "") {
        sMsg += "\n* Umur belum diisi";
    }

    if (sKategori == "") {
        sMsg += "\n* Paket member belum dipilih";
    }

    var reEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (sEmail != "" && !reEmail.test(sEmail)) {
        sMsg += "\n* Format email tidak valid";
    }

    if (sUmur != "") {
        if (isNaN(sUmur)) {
            sMsg += "\n* Umur harus berupa angka";
        } else if (sUmur < 17 || sUmur > 65) {
            sMsg += "\n* Umur harus antara 17 sampai 65 tahun";
        }
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    var sInfo;

    if (parseInt(sUmur) <= 25) {
        sInfo = "Paket Pelajar";
    } else {
        sInfo = "Paket Umum";
    }

    var sPilihan;

    switch (sKategori) {
        case "S":
            sPilihan = "Silver";
            break;

        case "G":
            sPilihan = "Gold";
            break;

        case "P":
            sPilihan = "Platinum";
            break;
    }

    alert("Terima kasih " + sNama + " ! Anda terdaftar di paket " + sPilihan + " (" + sInfo + ").");
    return true;
}
