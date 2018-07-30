]<template>

    <Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:VideoPlayer="nativescript-videoplayer">
        <StackLayout>
            <VideoPlayer id="nativeVideoPlayer"
                               controls="true"
                               loop="true"
                               autoplay="false"
                               height="280"
                         :src="source" >
            </VideoPlayer>
            <!-- Remote file to test with https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->
        </StackLayout>
    </Page>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data () {
            return {
                surprise: false,
                video_url: '',
                source: ''
            };
        },
        computed: {
            ...mapGetters({
                video: 'video',
                url: ''
            })
        },
        methods: {
            viewVideo(){
                var utilityModule = require("utils/utils");
                let vm = this;
                utilityModule.openUrl("http://tuts-master.herokuapp.com/videos/view/"+vm.video.id);
            },
            passVideo(){
                var youtubeParser = require('nativescript-youtube-parser');

                youtubeParser.getURL('https://youtu.be/C_vqnySNhQ0', { quality: 'medium', container: 'mp4' })
                    .then(function (urlList) {
                            console.log("YouTube mp4 video url: ", urlList[0].url);
                            this.source = urlList[0].url
                        },
                        ()=>{
                        console.log('no video found')
                        }
                    );


            },
            loadVideo(){
                this.video_url = '<iframe width="100%" height="450" src="" frameborder="0"></iframe>';
            }
            },
        mounted(){
            this.passVideo();
            this.loadVideo();
        }
    };
</script>

<style scoped>
    .hello-world {
        margin: 20px;
    }

    Label {
        /*color: red;*/
    }
</style>
