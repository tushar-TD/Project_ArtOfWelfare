import React, { useState, useEffect } from 'react';
import './ArtGallery.css'; // Import your CSS file for styling

const ArtGallery = () => {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/unsoldarts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArtList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="art-gallery">
      {artList.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          <p>Artist: {artPiece.artist_name}</p>
          <p>Price: {artPiece.price}</p>
          <button className="btn btn-danger">Buy Now</button>
        </div>
      ))}
    </div>

  );
};

export default ArtGallery;