<template>
  <section class="bg-[#E8DFCA] h-screen ">
    <div class="pt-10">
      <h1 class="text-3xl text-center font-poppins font-bold">
        Participant
      </h1>
    </div>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <table class="table-fixed text-sm items-center">
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Asal Institut</th>
          <th>No.HP</th>
          <th>Alamat</th>
          <th>Jenis Lomba</th>
          <th>Link Bukti Pembayaran</th>
          <th>Hapus</th>
        </tr>

        <tr class="border-b " v-for="(user, index) in peserta" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.asal_institut }}</td>
          <td>{{ user.no_hp }}</td>
          <td>{{ user.alamat }}</td>
          <td>{{ user.jenis_lomba }}</td>
          <td>{{ user.link_pembayaran }}</td>
          <td>
            <button class="inline-flex items-center px-2 py-2 hover:bg-red-700 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
    
<script>
import axios from 'axios';
import { Buffer } from "buffer";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      length: 0,
      privatekeyBase64: import.meta.env.VITE_PRIVKEY,
      peserta: []
    };
  },
  methods: {
    async decrypt(ciphertext, privateKey) {


      console.log('Data didekripsi');
      let { n, d } = privateKey;
      let plaintext = '';
      let blocks = ciphertext.split(' ');
      for (let i = 0; i < blocks.length; i++) {
        let decrypted = BigInt(blocks[i]) ** BigInt(d) % BigInt(n);
        plaintext += String.fromCharCode(parseInt(decrypted.toString()));
      }
      

      return plaintext;
    },

    async fromBase64(base64) {
      return Buffer.from(base64, 'base64').toString('ascii');
    },

    async toBase64(base64) {
      return Buffer.from(base64).toString('base64');
    },

    async getPeserta() {
      Swal.fire({
        title: "Please wait...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      let peserta = await axios.get('http://localhost:3000/peserta');
      peserta = peserta.data.data;
      peserta = await this.fromBase64(peserta);
      let privatekey = await this.fromBase64(this.privatekeyBase64);
      privatekey = JSON.parse(privatekey);
      console.log(privatekey);
      let plaintext = await this.decrypt(peserta, privatekey);
      this.peserta = JSON.parse(plaintext);
      Swal.close();
    }

  },
  created() {
    this.getPeserta();
  }
}
</script>
    
<style scoped>
th {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #3F497F;
  color: #ffffff;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

td {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  color: #ffffff;
  background-color: #539165;
  padding-right: 1rem;
  padding-left: 1rem;
}

tr {
  border-color: #F7C04A;
}
</style>
    