]<template>
    <Page class="page">

        <StackLayout class="hello-world">
            <TextView
                    text="The following is a video tutorial for introudction to ethical hacking. The video is a sub of among many 123,,,"
                    class="input input-border">
            </TextView>

            <Image src="~/images/preview_video.png"/>

            <Button text="View video tutorial" @tap="viewVideo" ></Button>
        </StackLayout>

    </Page>
</template>

<script>

    export default {
        data () {
            return {
                surprise: false,
            };
        },
        methods: {
            viewVideo(){},

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
