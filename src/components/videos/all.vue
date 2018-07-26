<template>
    <page>
        <ListView class="list-group" for="video in videos" @itemTap="select" style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row" class="list-group-item">
                    <Image src="~/images/play.png" class="thumb img-circle" />
                    <Label :text="video.name" class="list-group-item-heading" style="width: 60%" />
                </FlexboxLayout>
            </v-template>

        </ListView>

    </page>
    <!--<ActivityIndicator :busy="true" class="activity-indicator" />-->
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                videos: [
                    {
                        name: 'Movie 101',
                        category: 'public',
                        id: '1'
                    },
                    {
                        name: 'Movie 102',
                        category: 'Private',
                        id: '2'
                    },
                    {
                        name: 'Movie 1023',
                        category: 'private',
                        id: '3'
                    }
                ],
                url: 'http://tuts-master.ms/api/video',
                loading: false,
            }
        },
        computed: {

        },
        methods: {
            select(){

            },
            getVideos(){
                let vm = this;
                this.loading = true;

                this.$http.get('http://tuts-master.ms/api/video').then(response => {

                    console.log(response, 'response');

                }, response => {
                    console.log(response, 'response failed');
                });

            }

        },
        created(){
            this.getVideos()
        }
    };
</script>

