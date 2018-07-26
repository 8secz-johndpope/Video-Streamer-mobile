<template>
    <ListView class="list-group" for="permission in permissions" @itemTap="select" style="height:1250px">
        <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
                <Image src="~/images/permission.png" class="thumb img-circle" />
                <Label :text="permission.name" class="list-group-item-heading" style="width: 60%" />
            </FlexboxLayout>
        </v-template>
    </ListView>
</template>

<script>
    export default {
        data(){
            return {
                permissions: [
                    {
                        name: 'Can Add',
                        category: 'public',
                        id: '1'
                    },
                    {
                        name: 'Can View',
                        category: 'Private',
                        id: '2'
                    },
                    {
                        name: 'Can Edit',
                        category: 'private',
                        id: '3'
                    }
                ]
            }
        },
        computed: {

        },
        methods: {
            select(){

            }
        },
    };
</script>

