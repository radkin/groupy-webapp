import { extendObservable } from 'mobx'
import artists from './artists'

function UiState() {

  extendObservable(this, {
    get artistData() {
      return artists
    }
  })
}

export default new UiState();
