<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>
    <StackLayout>
      <!--<Button class="btn btn-primary" @tap="$router.push('/login')">Login</Button>-->
      <Button class="btn btn-primary" @tap="$router.push('/videos')">Videos</Button>
      <Button class="btn btn-primary" @tap="$router.push('/permissions')">Permissions</Button>
      <Button class="btn btn-primary" @tap="$router.push('/single')">Single</Button>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
      data:()=>({

      }),
      methods: {
      }
  }
</script>
