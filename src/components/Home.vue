<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>
    <StackLayout>
      <!--<Button class="btn btn-primary" @tap="$router.push('/login')">Login</Button>-->
      <Button class="btn btn-primary" @tap="$router.push('/videos')">Videos</Button>
      <Button class="btn btn-primary" @tap="$router.push('/permissions')">Permissions</Button>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
      data:()=>({
        useUrl: 'https://tuts-master.herokuapp.com/api/users'
      }),
      methods: {
          getUsers(){
              this.$http.get(useUrl).then(response => {
                  let users = response.data;
                  this.$store.commit('SAVE_USERS', users);

              }, response => {
                  console.log(response, 'response failed');
              });
          }
      },
      mounted(){
//          this.getUsers()
      }
  }
</script>

<style>
  .page {
    padding: 10px;
  }
</style>
