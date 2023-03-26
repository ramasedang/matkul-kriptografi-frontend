<template>
  <h3>{{ peserta }}</h3>
  <section class="flex flex-col items-center justify-center bg-[#E8DFCA]">
    <div class="p-3 bg-[#3F497F] rounded-sm">
      <h1
        class="rounded-lg my-1 mx-10 text-center text-white bg-[#539165] font-Georgia font-bold text-lg"
      >
        Register Home
      </h1>
      <form class="mx-5">
        <div>
          <label for="nama">Nama</label>
        </div>
        <div>
          <input type="text" name="nama" id="nama" v-model="peserta.nama" />
        </div>
        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input type="email" name="email" id="email" v-model="peserta.email" />
        </div>
        <div>
          <label for="asal_institut">Asal Institut</label>
        </div>
        <div>
          <input
            type="text"
            name="asal_institut"
            id="asal_institut"
            v-model="peserta.asal_institut"
          />
        </div>
        <div>
          <label for="nohp">No HP</label>
        </div>
        <div>
          <input type="tel" name="nohp" id="nohp" v-model="peserta.no_hp" />
        </div>
        <div>
          <label for="alamat">Alamat</label>
        </div>
        <div>
          <input type="text" name="alamat" id="alamat" v-model="peserta.alamat" />
        </div>
        <div>
          <label for="jenis_lomba">Jenis Lomba</label>
        </div>
        <div>
          <select id="jenis_lomba" name="jenis_lomba" v-model="peserta.jenis_lomba">
            <option value="x">--Pilih Jenis Lomba--</option>
            <option value="CTFS">CTF</option>
            <option value="KTI">KTI</option>
            <option value="ESSAY">ESSAY</option>
            <option value="PUISI">PUISI</option>
          </select>
        </div>
        <div>
          <label for="linkbp">Link Bukti Pembayaran</label>
        </div>
        <div>
          <input type="url" name="linkbp" id="linkbp" v-model="peserta.link_pembayaran" />
        </div>

        <div class="flex flex-col items-center mt-2">
          <button
            type="button"
            @click="encrypt()"
            class="hover:bg-[#045a1d] py-1 px-6 rounded text-white bg-[#539165] font-poppins font-bold text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { Buffer } from "buffer";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      pubkeyBase64: "eyJuIjozMzU5NjMsImUiOjV9",
      chiperText: "",
      ciphertextBase64: "",
      peserta: {
        nama: "",
        email: "",
        asal_institut: "",
        no_hp: "",
        alamat: "",
        jenis_lomba: "",
        link_pembayaran: "",
      },
    };
  },
  methods: {
    async encrypt() {
      Swal.fire({
        title: "Please wait...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      let publicKey = await this.fromBase64(this.pubkeyBase64);
      publicKey = JSON.parse(publicKey);
      let plaintext = JSON.stringify(this.peserta);
      console.log(publicKey);
      console.log(plaintext);
      let { n, e } = publicKey;
      let ciphertext = "";
      for (let i = 0; i < plaintext.length; i++) {
        let c = plaintext.charCodeAt(i);
        let crypted = BigInt(c) ** BigInt(e) % BigInt(n);
        ciphertext += crypted.toString() + " ";
      }
      ciphertext = ciphertext.trim();
      this.chiperText = ciphertext;
      this.ciphertextBase64 = await this.toBase64(ciphertext);

      axios
        .post("http://localhost:3000/daftar", {
          data: this.ciphertextBase64,
        })
        .then((res) => {
          Swal.close();
          this.$router.push({ name: "success" });
        })
        .catch((err) => {
          Swal.close();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });

      console.log("Hasil enkripsi: ", this.ciphertextBase64);
    },
    async fromBase64(base64) {
      return Buffer.from(base64, "base64").toString("ascii");
    },

    async toBase64(base64) {
      return Buffer.from(base64).toString("base64");
    },
  },
};
</script>

<style scoped>
h1,
button {
  border: 2px solid #f7c04a;
}

input,
select {
  width: 18rem;
  border: 2px solid #f7c04a;
  background-color: #f8f5e4;
  color: #00021f;
  font-family: "Courier New", Courier, monospace;
}

label {
  color: #ffffff;
  font-family: "poppins";
  font-weight: 600;
  font-size: small;
}

section {
  height: 100vh;
}
</style>
