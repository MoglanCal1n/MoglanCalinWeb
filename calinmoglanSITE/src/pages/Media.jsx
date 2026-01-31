import React from 'react';

import asincronPic from '../assets/asincron.jpg';
import bonairePic from '../assets/bonaire.jpg';
import fontainesPic from '../assets/Fontaines_D.C._-_Skinty_Fia.png';
import soulwaxPic from '../assets/MuchAgainstEveryonesAdvice.jpg';
import ocsPic from '../assets/ocstv.jpg'; 
import massivePic from '../assets/Massive_Attack_-_Mezzanine.png'
import foxPic from '../assets/fox.jpg';
import metronomPic from '../assets/Metronom.jpg';
import luniPic from '../assets/4l3s.jpg';
import whiplashPic from '../assets/notmytempo.jpg';
import tdPic from '../assets/td.jpg';
import chernPic from '../assets/chern.jpg';

const Media = () => {

  const musicList = [
    {
      title: "somn/cer variabil",
      artist: "Asincron",
      image: asincronPic,
      link: "https://www.youtube.com/watch?v=tyh5eEAmH-U&list=OLAK5uy_nmJL4ZDmcpT_dhCEt5GA5gIuJnyIeU9fI"
    },
    {
      title: "Saâda Bonaire",
      artist: "Saâda Bonaire",
      image: bonairePic,
      link: "https://www.youtube.com/watch?v=08XnovUzVRw&list=OLAK5uy_ndkNJxQej0-s7Ht5hQS_zm2E7IMo6Ptls"
    },
    {
      title: "Much Against Everyone's Advice",
      artist: "Soulwax",
      image: soulwaxPic,
      link: "https://www.youtube.com/watch?v=r28N6iYEN0I&list=PL0OPX5Tcb1xmLL-1rWllKuFV-J7Ql0yRJ"
    },
    {
      title: "OcsTv",
      artist: "Omul cu Sobolani",
      image: ocsPic,
      link: "https://www.youtube.com/watch?v=BfVzw9CI0d8&list=OLAK5uy_n-5Zzv7j3D1HvCMjTlbrwWMKaERIGqzcE"
    },
    {
      title: "Skinty Fia",
      artist: "Fontaines D.C.",
      image: fontainesPic,
      link: "https://www.youtube.com/watch?v=rwKzmVRaKUY&list=RDrwKzmVRaKUY&start_radio=1"
    },
    {
      title: "Mezzanine",
      artist: "Massive Attack",
      image: massivePic,
      link: "https://www.youtube.com/watch?v=fQtyrAEjHAU&list=PLfGibfZATlGr5c_eKUQ6EuDyB7yw3OrYb"
    }
  ];

  const movieList = [
    {
      title: "Fantastic Mr. Fox",
      genre: "Animation • Adventure",
      image: foxPic,
      link: "https://www.imdb.com/title/tt0432283/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_mr%2520fox"
    },
    {
      title: "Metronom",
      genre: "Drama • History",
      image: metronomPic,
      link: "https://www.imdb.com/title/tt12253164/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_metronom"
    },
    {
      title: "Whiplash",
      genre: "Drama • Music",
      image: whiplashPic,
      link: "https://www.imdb.com/title/tt2582802/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_whiplash"
    },
    {
      title: "4 luni, 3 săptămâni și 2 zile",
      genre: "Drama • Thriller",
      image: luniPic,
      link: "https://www.imdb.com/title/tt1032846/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_4%2520luni%2520"
    },
    {
      title: "True Detective (S1)",
      genre: "Crime • Mystery",
      image: tdPic,
      link: "https://www.imdb.com/title/tt2356777/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_true"
    },
    {
      title: "Chernobyl",
      genre: "History • Drama",
      image: chernPic,
      link: "https://www.imdb.com/title/tt7366338/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_chern"
    },
  ];

  const containerStyle = {
    height: '100%',
    overflowY: 'auto',
    padding: '15px',
    boxSizing: 'border-box',
    backgroundColor: '#ffffe0', 
    fontFamily: 'Tahoma, sans-serif',
    overflowX: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #0055EA',
    paddingBottom: '10px'
  };

  const sectionHeaderStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0055EA',
    margin: '25px 0 10px 0',
    borderBottom: '1px dotted #ccc',
    paddingBottom: '5px'
  };

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #dcdcdc',
    borderRadius: '3px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '2px 2px 3px rgba(0,0,0,0.05)'
  };

  const titleStyle = {
    margin: '0 0 5px 0',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const subtitleStyle = {
    fontSize: '11px',
    color: '#666',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
    textTransform: 'uppercase'
  };

  const descStyle = {
    fontSize: '13px',
    lineHeight: '1.4',
    color: '#555',
    marginBottom: '15px'
  };

  const photoContainerStyle = {
    width: '100%',
    height: '180px',
    backgroundColor: '#e1e1e1',
    border: '2px inset #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginBottom: '10px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #999',
    borderRadius: '2px',
    color: '#333',
    fontSize: '11px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '5px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ fontSize: '24px', marginRight: '10px' }}>💿</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#0055EA' }}>Media Center</h2>
          <span style={{ fontSize: '11px', color: '#888' }}>
            My playlist & watchlist
          </span>
        </div>
      </div>

      <div style={{ ...sectionHeaderStyle, marginTop: '10px' }}>🎵 Favorite Tunes</div>
      
      <div>
        {musicList.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <span style={subtitleStyle}>{item.artist}</span>
            <div style={photoContainerStyle}>
              <img src={item.image} alt={item.title} style={imageStyle} />
            </div>
            <p style={descStyle}>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" style={buttonStyle}>
              ▶ Listen
            </a>
          </div>
        ))}
      </div>

      <div style={sectionHeaderStyle}>🎬 Top Movies & Series</div>

      <div>
        {movieList.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <span style={subtitleStyle}>{item.genre}</span>
            <div style={photoContainerStyle}>
              <img src={item.image} alt={item.title} style={imageStyle} />
            </div>
            <p style={descStyle}>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" style={buttonStyle}>
              ★ IMDB / Watch
            </a>
          </div>
        ))}
      </div>

      <div style={{ height: '20px', textAlign: 'center', color: '#aaa', fontSize: '11px' }}>
        End of list
      </div>
    </div>
  );
};

export default Media;