import './App.css';
import {
  aiFillPlayCircle,
  aiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className='component'>
      <h2>Playing Now</h2>
      <img
        className='musicCover'
        src='https://picsum.photos/200/300'
        alt='Album Cover'
      />
      <div className='titleContainer'>
        <h3 className='title'>Led Zeppelin</h3>
        <p className='subTitle'>Whole lotta love</p>
      </div>

      <div>
        <button className='playButton'>
          <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className='playButton'>
          <IconContext.Provider value={{ size: '3em', color: '#ef5c43' }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
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
