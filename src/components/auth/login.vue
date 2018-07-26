<template>
    <FlexboxLayout class="page">
        <StackLayout class="form">

            <StackLayout class="input-field login_input">
                <TextField hint="Enter email address" keyboardType="email" class="input_field"  v-model="login_form.email"></TextField>
            </StackLayout>

            <StackLayout class="input-field login_input">
                <TextField :secure="true" hint="Enter Password" class="input_field" v-model="login_form.password" ></TextField>
            </StackLayout>

            <StackLayout>
                <Button text="Login" @tap="login()" class="btn btn-primary "  ></Button>
            </StackLayout>

        </StackLayout>
    </FlexboxLayout>

</template>

<script>
    export default {
        data(){
            return {
                login_form: {}
            }
        },
        computed: {

        },
        methods: {
            login(){

            }
        },
    };
</script>

