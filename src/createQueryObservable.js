import client from './client'
import { observable, action } from 'mobx'

export default function createQueryObservable({ query = null, variables = {} , ...options}) {

  const observableQuery = client.watchQuery({ query, variables, ...options})

  const _observable = observable(observableQuery.currentResult())

  const applyChanges = action((res) => {
   _observable.data = res.data
   _observable.loading = res.loading
   _observable.networkStatus = res.networkStatus
  })

  observableQuery.subscribe({
    next(result) {
      console.log('next', result)
      applyChanges(result)
    },
    error(err) {
      console.log('err', err)
    }
  })

  return _observable
}
