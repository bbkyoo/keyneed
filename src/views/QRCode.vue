<template>
  <div class="camera-box">
    <div style="display: flex; justify-content: center;">
      <img 
      style="height: 25px;" v-if="isCameraOpen"
      src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png" 
      class="button-img camera-shoot" @click="capture()"/>
      <div class="camera-button">
        <button type="button" class="button is-rounded cam-button"
        style="margin-left: 40%; background-color: white; border: 0px"
@click="toggleCamera()"
        >
        <span v-if="!isCameraOpen"><img style="height: 25px;" class="button-img"
                  src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"></span>
        <span v-else><img style="height: 25px;" class="button-img"
                  src="https://img.icons8.com/material-outlined/50/000000/cancel.png"></span>
        </button>

      </div>
    </div>

  <div style="height: 200px">
    <div v-if="isCameraOpen" class="camera-canvas" style="display: flex; justify-content: center;">
      <video ref="camera" :width="canvasWidth" :height="canvasHeight" autoplay></video>
      <canvas v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </div>
  <vue-picture-swipe :items="items"></vue-picture-swipe>
</div>
</template>

<script>
import VuePictureSwipe from "vue-picture-swipe"
import router from "../router/index"

export default {
  name: "QRCode",
  components:{
    VuePictureSwipe
  },
  data(){
    return{
      isCameraOpen: false,
      canvasHeight: 300,
      canvasWidth: 290,
      items:[]
    }
  },
  methods:{
    toggleCamera(){
      if (this.isCameraOpen){
        this.isCameraOpen = false;
        this.stopCameraStream();
      }
      else{
        this.isCameraOpen = true;
        this.startCameraStream();
      }
    },
    startCameraStream(){
      const constraints = (window.constraints = {
        audio: false,
        video: true
      });
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            this.$refs.camera.srcObject = stream;
          }).catch(error => {
            alert("Brows doesn't support or there is some errors."+error)
        });
    },
    stopCameraStream(){
      let tracks = this.$ref.camera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    },
    capture(){
      const FLASH_TIMEOUT = 50;
      let self = this;
      setTimeout(() => {
        const context = self.$refs.canvas.getContext('2d');
        context.drawImage(self.$refs.camera, 0, 0, self.canvasWidth, self.canvasHeight);
        const dataUrl = self.$refs.canvas.toDataURL("image/jpeg")
              .replace("image/jpeg", "image/octet-stream");
        self.addToPhotoGallery(dataUrl);
        self.uploadPicture(dataUrl);
        self.isCameraOpen = false;
        self.stopCameraStream();        
      }, FLASH_TIMEOUT);
      router.push({name:'SubmitForm'})
    },
    addToPhotoGallery(dataUrl){
      this.items.push(
        {
          src: dataUrl,
          thumbnail: dataUrl,
          w: this.canvasWidth,
          h: this.canvasHeight,
          alt: ''
        }
      )
    },
    uploadPicture(dataUrl){
      let name = this.generateUniquePictureName();
      let capturedFile = this.dataUrlToFile(dataUrl, name);
      let formData = new FormData();
      formData.append("file", capturedFile);
      console.log("File", capturedFile);
    },
    generateUniquePictureName(){
      return Math.random().toString(36).substring(2, 15)
    },
    dataUrlToFile(dataUrl, filename){
      let arr = dataUrl.split(','),
      mime = arr[0].match("(.*?)")[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File( [u8arr], filename, {type: mime})
    }
  }
}
</script>

<style scoped>
.camera-box{
  border: 1px dashed #d6d6d6;
  border-radius: 4px;
  padding: 2px;
  width: 80%;
  height: 100%;
}
</style>