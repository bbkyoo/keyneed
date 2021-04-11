<template>
  <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs6>
            <div>      
            <h1>SubmitForm</h1>
                <v-checkbox
                    label="Top"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="Right"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="Bottom"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="Left"
                    hide-details
                ></v-checkbox>

                <v-btn class="my-5" router :to="{name: 'mainpage'}" exact > submit </v-btn>
            </div>
            </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            email: null,
            password: null,
            name: null
        }
    }
}
</script>

<style>

</style>