import React from 'react'
import { observer } from 'mobx-react'

function ArtistList({ uiState: { artistData } }) {
  const { data } = artistData;
  if ( !data || !data.artists || !data.artists.length ) {
    return <div>No artists bruh.</div>
  }
  const { artists } = data
  return (
    <ul>
      {artists.map(artist =>
        <li key={artist.id}>{artist.name}</li>
      )}
    </ul>
  )
}

export default observer(ArtistList)
