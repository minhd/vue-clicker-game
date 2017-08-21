<template>
  <div id="app" class="container">
    <h1>Bread Clicker Game</h1>
    <div class="nav">
      <ul class="nav nav-tabs">
        <router-link :to="{ name: 'game' }" tag="li" role="presentation" exact>
          <a href="">Game</a>
        </router-link>
        <router-link :to="{ name: 'achievements' }" tag="li" role="presentation" exact>
          <a href="">Achievements</a>
        </router-link>
      </ul>
    </div>
    <div class="tab-content clearfix">
      <div class="tab-pane active">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'src/vuex/store'

export default {
  name: 'app',
  store
}
</script>

<style>

</style>
