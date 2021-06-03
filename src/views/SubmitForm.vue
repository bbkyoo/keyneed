<template>
  <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs6>
            <div>      
            <h1>Submit</h1>
                <v-checkbox
                    label="성명"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="생년월일"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="휴대폰 번호"
                    hide-details
                ></v-checkbox>
                
                <v-btn class="my-5" @click="Submmit()" > submit </v-btn>
                <p>@@찜질방</p>
            </div>
            <v-alert :value="isSubmmit"
                prominent
                type="success"
            >
                <v-row align="center">
                    <v-col class="grow">
                        DID네트워크로 해당 정보가 전송되었습니다.
                    </v-col>
                    <v-col class="shrink">
                        <v-btn router :to="{ name: 'mainpage' }" exact>확인</v-btn>
                    </v-col>
                </v-row>
            </v-alert>

            </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            isSubmmit: false
        }
    },
    methods: {
        Submmit(){
            this.isSubmmit = true
        }
    }
}
</script>

<style>

</style>