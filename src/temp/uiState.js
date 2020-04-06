import { extendObservable } from 'mobx'
import getme from './getme'

function UiState() {

  extendObservable(this, {
    get getmeData() {
      return getme
    }
  })
}

export default new UiState();
