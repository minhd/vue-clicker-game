<template>
    <div>
        Helper Count: {{ upgrade.count }}
        <a class="btn btn-primary"
           v-on:click="addUpgrade('helper')"
           :disabled="!canUpgrade('helper')">
            Add (Cost: {{ upgrade.cost }} )
        </a>
    </div>
</template>

<script>
  import Upgrade from './Upgrade'

  export default {
    mixins: [Upgrade],
    data () {
      return {
        upgradeName: 'helper'
      }
    }
  }
</script>
