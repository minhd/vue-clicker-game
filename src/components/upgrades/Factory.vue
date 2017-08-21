<template>
    <div>
        Factory Count: {{ upgrade.count }}
        <a class="btn btn-primary"
           v-on:click="addUpgrade('factory')"
           :disabled="!canUpgrade('factory')">
            Add (Cost: {{ upgrade.cost }} )
        </a>
        <progress-bar :value="progress" :duration="upgrade.duration"></progress-bar>
    </div>
</template>

<script>
  import Upgrade from './Upgrade'
  import ProgressBar from 'src/components/ui/ProgressBar'

  export default {
    name: 'factory',
    mixins: [Upgrade],
    components: { ProgressBar },
    data () {
      return {
        upgradeName: 'factory'
      }
    }
  }
</script>
