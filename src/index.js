// App.js
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import GraffLogo from './graffLogo'; 
import BottomNav from '../src/components/BottomNav';
import News from '../src/components/News';
import About from '../src/components/About'; 
import Works from '../src/components/Works'; 
import Contacts from '../src/components/Contacts'; 

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <GraffLogo style={{ position: 'absolute', top: 0, left: 0}} />
      <a href="" style={{ position: 'absolute', bottom: 300, left: 20, fontSize: '15px', fontFamily: 'serif' ,letterSpacing: 10}}>
        ビジョンを可視化するデザイン
      </a>
      <a href="" style={{ position: 'absolute', bottom: 100, left: 20, fontSize: '50px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: 10}}>
        Visualizing<br />Your<br />Vision
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <BottomNav />
    <News />
    <About /> 
    <Works />
    <Contacts />
  </>
);
