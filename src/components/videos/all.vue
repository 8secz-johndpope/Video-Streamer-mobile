<template>
    <page>
        <ActivityIndicator :busy="loading"  ></ActivityIndicator>
        <ListView class="list-group" for="video in videos" @itemTap="select" style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row" class="list-group-item" >
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
    import { mapActions } from 'vuex';
    export default {
        data(){
            return {
                videos: [],
                url: 'http://tuts-master.ms/api/video',
                loading: false,
            }
        },
        computed: {

        },
        methods: {
            select(video){
                let video_to_pass = this.videos[video.index]
                this.$store.commit('Pass_Video', video_to_pass);
                this.$router.push('/single');
            },
            getVideos(){
                let vm = this;
                this.loading = true;

                this.$http.get('https://tuts-master.herokuapp.com/api/video').then(response => {

                    console.log(response.data, 'response');
                    this.videos = response.data;

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

