<template>
    <div>
        <ul>
            <li v-for="item in achievements">
                {{ item.human }}
                <span v-if="item.unlocked">Unlocked</span>
                <span v-else>Locked</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['achievements'])
    }
  }
</script>

<style>
</style>
