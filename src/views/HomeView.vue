<template>
    <section class="flex flex-col items-center justify-center bg-[#E8DFCA]">
      <div class="p-3 bg-[#3F497F] rounded-sm">
        <h1 class="rounded-lg my-1 mx-10 text-center text-white bg-[#539165] font-Georgia font-bold text-lg "> Register Home </h1>
        <form class="mx-5">
          <div>
                  <label for="nama">Nama</label>
              </div>
              <div>
                  <input type="text" name="nama" id="nama" >
              </div>
              <div>
               <label for="email" >Email</label>   
              </div>
              <div>
              <input type="email" name="email" id="email" >
              </div>
              <div>
              <label for="asalinstitut" >Asal Institut</label>    
              </div>
              <div> 
              <input type="text" name="nama" id="nama" >
              </div>
              <div>
                 <label for="nohp" >No HP</label>  
              </div>
              <div>
                  <input type="tel" name="nohp" id="nohp" >
              </div>
              <div>
               <label for="alamat" >Alamat</label>   
              </div>
              <div>
                  <input type="text" name="alamat" id="alamat" >
              </div>
              <div>
               <label for="jenislomba">Jenis Lomba</label>
              </div>
              <div>
              <select id="jenislomba" name="jenislomba">
                  <option  value="x">--Pilih Jenis Lomba--</option>
                   <option value="CTFS">CTF</option>
                   <option value="KTI">KTI</option>
                   <option value="ESSAY">ESSAY</option>
                   <option value="PUISI">PUISI</option>
              </select>
              </div>
              <div>
               <label for="linkbp" >Link Bukti Pembayaran</label>   
              </div>
              <div>
                  <input type="url" name="linkbp" id="linkbp" >
              </div>
  
          <div class="flex flex-col items-center mt-2">
            <button type="submit" class="hover:bg-[#045a1d] py-1 px-6 rounded text-white bg-[#539165] font-poppins font-bold text-sm">Submit</button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        length: 0,
      };
    },
  }
  </script>
  
  <style scoped>
  h1,
  button {
    border: 2px solid #F7C04A;
  }
  
  input,
  select {
    width: 18rem;
    border: 2px solid #F7C04A;
    background-color: #F8F5E4;
    color: #00021f;
    font-family: 'Courier New', Courier, monospace;
  }
  
  label {
    color: #Ffffff;
    font-family: 'poppins';
    font-weight: 600;
    font-size: small;
  }
  
  section {
    height: 100vh;
  }
  </style>
  