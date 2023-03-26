<template>
    <section class="bg-[#E8DFCA] h-screen flex flex-col items-center justify-center  ">
        <div class="font-poppins font-extrabold text-4xl text-center ">
            SUCCESSFULL REGISTRATION!!!
        </div>
        <div>
            <!-- <a href="index.html" class="font-medium hover:bg-slate-400 border b ">Edit</a>
        </div> -->
            <button href="index.html"
                class=" hover:bg-[#045a1d]  py-1 px-6 rounded-2xl text-white bg-[#3F497F] font-poppins font-bold text-sm my-2 " @click="redirect()">
                Back to Registration
            </button>
        </div>
    </section>
</template>
  
<script>
export default {
    methods : {
        redirect() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
  
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
  