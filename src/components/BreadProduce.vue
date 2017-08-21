<template>
    <div>
        <a class="btn btn-primary" v-on:click="clickProduce">Make Bread</a>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'bread-click',
    methods: {
      ...mapActions(
        [ 'clickProduce' ]
      )
    }
  }
</script>

<style scoped>
</style>
