import * as types from './mutation-types'
import _ from 'underscore'

export const clickProduce = ({commit, dispatch}) => {
  commit(types.CLICK_PRODUCE)
  dispatch('checkAchievement')
}

export const addUpgrade = ({getters, commit}, name) => {
  if (!getters.canUpgrade(name)) {
    return
  }
  commit(types.ADD_UPGRADE, name)
}

export const payOut = ({commit, dispatch}, upgrade) => {
  commit(types.UPGRADE_PAYOUT, upgrade)
  dispatch('checkAchievement')
}

export const checkAchievement = ({commit, getters, state}) => {
  // check state condition
  let stateConditions = getters.getLockedAchievements('state_condition')
  _.each(stateConditions, (con) => {
    if (con.key === 'count' && state.game.count >= con.value) {
      commit(types.UNLOCK_ACHIEVEMENT, con.name)
    }
  })

  let upgrades = state.game.upgrades
  const keys = []
  for (let k in upgrades) {
    keys.push(k)
  }
  let upgradeConditions = getters.getLockedAchievements('upgrade_condition')
  _.each(upgradeConditions, (con) => {
    _.each(keys, (key) => {
      if (con.key === key && getters.getUpgrade(key).count >= con.value) {
        commit(types.UNLOCK_ACHIEVEMENT, con.name)
      }
    })
  })
}
