<template>
<v-container fill-height style="max-width:450px"> 
  <v-layout align-center row wrap>
    <v-flex xs12>
      <div class="pa-3">
        <div class="my-2">
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            width="100%"
            router :to="{name: 'qrcode'}"
          >
          QR Code Scan
          </v-btn>
          </div>
          <div class="my-2">
        <v-btn
          class="ma-2"
          outlined
          color="indigo"
          width="100%"
          router :to="{name: 'SubmitForm'}"
        >
          Go To SubmitForm
        </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
   
</template>

<script>
export default {
  data(){
    return{
      isScanQR: false
    }
  },
  methods:{
    ScanQR(){
      this.isScanQR = true  
    }
  }
}
</script>

<style>


</style>