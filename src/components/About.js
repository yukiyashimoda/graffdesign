import React from 'react';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <div style={{ margin: '20px', height: "70vh",justifyContent: 'center',}}>
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h4" style={{ fontSize: '15px', fontFamily: 'Roboto, sans-serif', fontWeight: '600', letterSpacing: 10, color: '#b8d200', marginBottom: '50px' }}>About</Typography>
      </div>
      <div>
        <Typography variant="h3" style={{ marginBottom: '20px', fontSize: '20px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: 5, fontFamily: 'serif', lineHeight: '30px', marginBottom: '50px' }}>WEBマーケティングから<br />グラフィックデザインまで</Typography>
        <Typography variant="body1" style={{ fontSize: '12px', fontFamily: 'Roboto, sans-serif', fontWeight: '400', letterSpacing: 5, lineHeight: '30px' }}>
          GRAFF.では、北海道札幌市を拠点としたデザイン制作を承っております。<br />
          WEBやSNSなどのデジタルコンテンツから、
          名刺やメニュー表、チラシなどの印刷物まで幅広く対応しております。<br />
          お気軽にお問合せください。
        </Typography>
      </div>
    </div>
  );
}
