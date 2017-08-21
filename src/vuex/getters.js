import _ from 'underscore'

export const breadCount = ({ game }) => {
  return game.count
}

export const getUpgrade = ({ game }) => (upgrade) => {
  return game.upgrades[upgrade]
}

export const canUpgrade = ({ game }) => (upgrade) => {
  if (game.count === 0) {
    return false
  }
  return game.count >= game.upgrades[upgrade].cost
}

export const getLockedAchievements = ({ game }) => (type) => {
  return _.filter(game.achievements, (a) => {
    return a.unlocked === false && a.type === type
  })
}

export const achievements = ({game}) => {
  return game.achievements
}
