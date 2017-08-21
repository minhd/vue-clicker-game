<template>
    <div>
        Bakery Count: {{ upgrade.count }}
        <a class="btn btn-primary"
           v-on:click="addUpgrade('bakery')"
           :disabled="!canUpgrade('bakery')">
            Add (Cost: {{ upgrade.cost }} )
        </a>
        <progress-bar :value="progress" :duration="upgrade.duration"></progress-bar>
    </div>
</template>

<script>
  import Upgrade from './Upgrade'
  import ProgressBar from 'src/components/ui/ProgressBar'

  export default {
    name: 'bakery',
    mixins: [Upgrade],
    components: { ProgressBar },
    data () {
      return {
        upgradeName: 'bakery'
      }
    }
  }
</script>
