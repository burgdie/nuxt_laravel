<script setup>
const{login:loginAction} = useSanctumAuth();

const form = reactive({
  email: '',
  password: ''
});

const login = async() => {
  await loginAction(form);



}


</script>
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" name="" id="" placeholder="Email">
      <input  v-model="form.password" type="password" name="" id="" placeholder="Password">
      <button type="submit">Login</button>

    </form>
  </div>


</template>