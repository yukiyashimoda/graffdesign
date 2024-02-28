// App.js
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import GraffLogo from './graffLogo'; 
import BottomNav from '../src/components/BottomNav';
import News from '../src/components/News';
import About from '../src/components/About'; 
import Works from '../src/components/Works'; 


function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <GraffLogo style={{ position: 'absolute', top: 0, left: 0}} />
      <a style={{ position: 'absolute', bottom: 280, left: 20, fontSize: '12px', fontFamily: 'serif' ,letterSpacing: 5}}>
        ビジョンを可視化するデザイン
      </a>
      <a style={{ position: 'absolute', bottom: 80, left: 20, fontSize: '45px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: 10}}>
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
  </>
);
