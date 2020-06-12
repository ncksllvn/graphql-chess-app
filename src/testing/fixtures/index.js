import Chess from './queries/chess.json'
import d8h4 from './mutations/d8-h4.json'
import e7e5 from './mutations/e7-e5.json'
import f2f3 from './mutations/f2-f3.json'
import g2g4 from './mutations/g2-g4.json'

export default {
  queries: {
    Chess
  },
  mutations: {
    Move: {
      d8h4,
      e7e5,
      f2f3,
      g2g4
    }
  }
}
