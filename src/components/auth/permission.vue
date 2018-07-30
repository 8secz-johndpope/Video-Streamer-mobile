<template>
    <ListView class="list-group" for="permission in permissions" @itemTap="select" style="height:1250px">
        <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
                <Image src="~/images/permission.png" class="thumb img-circle" />
                <Label :text="permission.label" class="list-group-item-heading" style="width: 60%" />
            </FlexboxLayout>
        </v-template>
    </ListView>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                permissions: [
                ],
                url: 'api/permissions'
            }
        },
        computed: {

        },
        methods: {
            select(){

            },
            load_permissions(){
                this.$http.get('https://tuts-master.herokuapp.com/api/permission').then(response => {
                    console.log(response.data, 'response');
                    this.permissions = response.data.data;

                }, response => {
                    console.log(response, 'response failed');
                });

            }
        },
        mounted(){
            this.load_permissions()
        }
    };
</script>

