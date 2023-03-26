<template>
    <section class="bg-[#E8DFCA] h-screen ">
              <div class="pt-10">
                  <h1 class="text-3xl text-center font-poppins font-bold">
                      Participant
                  </h1>
              </div>
          <div >
              <table class="table-fixed w-full text-sm p-6 flex flex-col items-center ">
                  <!-- https://flowbite.com/docs/components/tables/ -->
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
                  <tr class="border-b">
                    <td>1</td>
                    <td>Moh.Sulthan Arief</td>
                    <td>ramasedang@gmail.com</td>
                    <td>ITS</td>
                    <td>0856789876798</td>
                    <td>Bumi Marina Emas </td>
                    <td>CTF</td>
                    <td>ini link</td>
                    <td>
                      <button class="inline-flex items-center px-2 py-2 hover:bg-red-700 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                  </td>
                  </tr>
                  <tr class="border-b">
                      <td>2</td>
                      <td>Andyana Muhandhatul Nabila</td>
                      <td>aa.andyana232@gmail.com</td>
                      <td>ITS</td>
                      <td>0856789876798</td>
                      <td>Jalan keputih gang 3c nomer 3 </td>
                      <td>CTF</td>
                      <td>ini link</td>
                      <td>
                          <button class="inline-flex items-center px-2 py-2 hover:bg-red-700 rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td>2</td>
                      <td>Andyana Muhandhatul Nabila</td>
                      <td>aa.andyana232@gmail.com</td>
                      <td>ITS</td>
                      <td>0856789876798</td>
                      <td>Jalan keputih gang 3c nomer 3 </td>
                      <td>CTF</td>
                      <td>ini link</td>
                      <td>
                          <button class="inline-flex items-center px-2 py-2 hover:bg-red-700 rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td>2</td>
                      <td>Andyana Muhandhatul Nabila</td>
                      <td>aa.andyana232@gmail.com</td>
                      <td>ITS</td>
                      <td>0856789876798</td>
                      <td>Jalan keputih gang 3c nomer 3 </td>
                      <td>CTF</td>
                      <td>ini link</td>
                      <td>
                          <button class="inline-flex items-center px-2 py-2 hover:bg-red-700 rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                      </td>
                    </tr>
                    
                    
                </table>
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
    th{
              font-family :Arial, Helvetica, sans-serif;
              background-color: #3F497F;
              color: #ffffff;
              padding-right: 1.5rem ;
              padding-left: 1.5rem;
          }
  
          td{
              text-align: center;
              font-family : 'Times New Roman', Times, serif;
              color : #ffffff;
              background-color: #539165;
              padding-right: 1rem ;
              padding-left: 1rem;
          }
  
          tr{
             border-color: #F7C04A;  
          }
    </style>
    