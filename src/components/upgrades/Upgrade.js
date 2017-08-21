import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      upgradeName: 'generic',
      progressBar: null,
      progress: 0
    }
  },
  computed: {
    ...mapGetters(['getUpgrade', 'canUpgrade']),
    upgrade () {
      return this.getUpgrade(this.upgradeName)
    },
    count () {
      return this.upgrade.count
    }
  },
  watch: {
    count (newVal, oldVal) {
      if (oldVal === 0 && newVal > 0) {
        this.progressPayout()
      }
    }
  },
  methods: {
    ...mapActions(['addUpgrade', 'payOut']),
    progressPayout () {
      if (this.upgrade.type === 'auto' && this.upgrade.count > 0) {
        this.progressBar = setInterval(() => {
          this.progress += 1
          if (this.progress >= 100) {
            this.progress = 0
            this.payOut(this.upgradeName)
          }
        }, this.upgrade.duration / 100)
      }
    }
  },
  mounted () {
    this.progressPayout()
  },
  destroyed () {
    clearInterval(this.progressBar)
  }
}
