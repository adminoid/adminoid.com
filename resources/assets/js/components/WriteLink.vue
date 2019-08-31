<template>
  <a href="#" @click.prevent.stop="goWrite"><slot></slot></a>
</template>

<script>
  export default {
    name: "WriteLink",

    methods: {
      goWrite () {
        this.$parent.$emit('go-write',true);
      }
    }
  }
</script>

<style scoped>

  a {
    font-weight: bold;
  }

</style>
