import '../styles/global.scss'

import { Header, Player } from '../components'

import styles from '../styles/app.module.scss'
import { playerContext } from '../contexts/PlayerContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  return (
    <playerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </playerContext.Provider>
  )
}

export default MyApp
