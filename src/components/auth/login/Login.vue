<template>
  <div>
    <layout>
      <Form />
    </layout>
  </div>
</template>
<script>
import Layout from "@/components/layout/Login.vue";
import Form from "./Form";
export default {
  name: "Login",
  components:{
    Layout,
    Form
  }
};
</script>
