import React, { useEffect, useState } from "react";

const MyArts = () => {
  const [arts, setArts] = useState([]);
  const loggedArtist = JSON.parse(localStorage.getItem("loggedartist"));

  useEffect(() => {
    const fetchData = async () => {
      if (loggedArtist && loggedArtist.artist_id) {
        try {
          const artistId = loggedArtist.artist_id;
          const response = await fetch(`http://localhost:8080/getArtByArtistId?artist_id=${artistId}`);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setArts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [loggedArtist]);


  return (
    <div className="art-gallery">
      {arts.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img
            src={`data:image/jpeg;base64,${artPiece.image}`}
            alt={artPiece.title}
            width="300"  // Set your desired width in pixels
            height="200" // Set your desired height in pixels
          />

          <div className="art-piece-container">
            <h3 className="art-title">{artPiece.art_name}</h3>
            <p className="art-description">Description: {artPiece.description}</p>
            <p className="art-artist">Artist: {artPiece.artist_name}</p>
            <p className="art-price">Price: {artPiece.price}</p>
            <p className="art-status">Status: {artPiece.status}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MyArts;
