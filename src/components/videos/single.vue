]<template>

    <Page xmlns="http://schemas.nativescript.org/tns.xsd" >
        <ActionBar :title="'MyApp'+video.name" ></ActionBar>
        <StackLayout>
            <WebView height="500px" :src='video_url' ></WebView>

            <Label textWrap="true">
                <FormattedString>
                    <Span :text="video.description" ></Span>
                </FormattedString>
            </Label>

            <Button text="View Video In Browser" @tap="viewVideo" ></Button>
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
                source: '',
            }
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

            youTubeGetID(url){
                var ID = '';
                url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                if(url[2] !== undefined) {
                    ID = url[2].split(/[^0-9a-z_\-]/i);
                    ID = ID[0];
                }
                else {
                    ID = url;
                }
                return ID;
            },
            loadVideo(){
                    let video_id = this.youTubeGetID(this.video.attachment);
                    this.video_url = '<iframe width="400" height="345" src="https://www.youtube.com/embed/'+video_id+'"></iframe>';
            }
            },
        mounted(){
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
