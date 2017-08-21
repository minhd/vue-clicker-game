<template>
    <div>Bread Count: {{ breadCount }}</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'breadCount',
    computed: {
      ...mapGetters([ 'breadCount' ])
    }
  }
</script>

<style>
</style>
