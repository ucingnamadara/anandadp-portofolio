import React from 'react';
import Navbar from '../../components/Navbar';
const profile = require('../../assets/profile.jpeg');

function Home() {
  return (
    <div>
      <Navbar />
      <div style={headerStyle}>
        <img src={profile} style={profileStyle} />
        <p style={{ fontWeight: '700', fontSize: 64}}>Ananda Dana Pratama</p>
        <p style={{ fontWeight: '400', fontSize: 32 }}>nanda / dana</p>
      </div>
      <div style={descriptionStyle}>
        <text style={{ fontWeight: '500', fontSize: 54}}>Nanda is a backend developer who builds and maintains the “under the hood” components of websites and applications.</text>
        <text style={{ fontWeight: '400', fontSize: 36}}>Currently, Nanda working at Ecomindo Saranacipta, where Nanda develop server-side for Bank Multiarta Sentosa. Nanda have a expertise in Spring Boot and Quarkus, gained from my experience MyRepublic, IFG Life, Legit Group.</text>
      </div>
    </div>
  );
}

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '9.625rem',
  marginBottom: '9.625rem'
};

const profileStyle = {
  width: '350px',
  height: '350px',
  borderRadius: '5%',
  marginBottom: '1rem'
};

const descriptionStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor : 'rgb(233, 236, 239, 0.5)'

}

export default Home;
