import './App.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useSound } from 'use-sound';
import cancion from './assets/joker.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(cancion);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='component'>
      <h2>Playing Now</h2>
      <img
        className='musicCover'
        src='https://picsum.photos/200/300'
        alt='Album Cover'
      />
      <div className='titleContainer'>
        <h3 className='title'>Joker</h3>
        <p className='subTitle'>Ho House Blues</p>
      </div>

      <div>
        <button className='playButton' onClick={playingButton}>
          <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        {isPlaying ? (
          <button className='playButton' onClick={playingButton}>
            <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className='playButton' onClick={playingButton}>
            <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className='playButton'>
          <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default App;
