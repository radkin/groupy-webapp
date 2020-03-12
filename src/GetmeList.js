import React from 'react'
import { observer } from 'mobx-react'

function GetmeList({ uiState: { getmeData } }) {
  const { data } = getmeData;
  if ( !data || !data.me || !data.me.length ) {
    return <div>No data for you bruh.</div>
  }
  const { getme } = data
  return (
    <ul>
      {getme.map(me =>
        <li key={me.id}>{me.phone}</li>
      )}
    </ul>
  )
}

export default observer(GetmeList)
