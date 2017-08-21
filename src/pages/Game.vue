<template>
  <div>
    <bread-count></bread-count>
    <bread-produce></bread-produce>
    <helper></helper>
    <bakery></bakery>
    <factory></factory>
  </div>
</template>

<script>
import BreadCount from 'src/components/BreadCount'
import BreadProduce from 'src/components/BreadProduce'
import Helper from 'src/components/upgrades/Helper'
import Bakery from 'src/components/upgrades/Bakery'
import Factory from 'src/components/upgrades/Factory'
import { mapActions } from 'vuex'

export default {
  name: 'game',
  components: {
    BreadCount, BreadProduce, Helper, Bakery, Factory
  },
  methods: {
    ...mapActions([ 'setTitle' ])
  }
}
</script>
