]<template>
    <Page class="page">

        <StackLayout class="hello-world">
            <TextView
                    :text="video.name"
                    class="input input-border">
            </TextView>
            <TextView
                    :text="video.description"
                    class="input input-border">
            </TextView>

            <Image src="~/images/preview_video.png"/>

            <TextView
                    :text="video.description"
                    class="input input-border">
            </TextView>


            <Button text="View video tutorial" @tap="viewVideo" ></Button>
        </StackLayout>

    </Page>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data () {
            return {
                surprise: false,
            };
        },
        computed: {
            ...mapGetters({
                video: 'video'
            })
        },
        methods: {
            viewVideo(){

            }
        },
        mounted(){
//            console.log(this.video.name, 'video');
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
