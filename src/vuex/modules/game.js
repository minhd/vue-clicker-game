import * as types from 'src/vuex/mutation-types'
import _ from 'underscore'
import achievements from 'src/vuex/modules/achievements'
import upgrades from 'src/vuex/modules/upgrades'

const state = {
  count: 99,
  upgrades,
  achievements
}

const mutations = {
  [types.CLICK_PRODUCE] (state) {
    state.count += 1
    let upgrades = _.filter(state.upgrades, (upgrade) => {
      return upgrade.type === 'click' && upgrade.count > 0
    })
    _.each(upgrades, (upgrade) => {
      state.count += upgrade.benefit * upgrade.count
    })
  },
  [types.ADD_UPGRADE] (state, name) {
    let upgrade = state.upgrades[name]
    upgrade.count += 1
    state.count -= upgrade.cost
  },
  [types.UPGRADE_PAYOUT] (state, upgrade) {
    state.count += state.upgrades[upgrade].benefit * state.upgrades[upgrade].count
  },
  [types.UNLOCK_ACHIEVEMENT] (state, achievement) {
    let a = _.find(state.achievements, (item) => {
      return item.name === achievement
    })
    a.unlocked = true
    console.log('UNLOCKED', achievement)
  },
  [types.SET_PROGRESS] (state, name) {
    state.upgrades[name].progress += 1
  }
}

export default {
  state,
  mutations
}
