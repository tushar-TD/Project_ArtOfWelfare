import React, { useState, useEffect } from 'react';
import './ArtGallery.css'; // Import your CSS file for styling

const ArtGallery = () => {
    const [artList, setArtList] = useState([]);

    useEffect(() => {
        // Fetch art data from an API (replace with your API endpoint)
        fetch('http://localhost:8080/unsoldarts')
            .then(response => response.json())
            .then(data => {
                setArtList(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="art-gallery">
            {artList.map((artPiece) => (
                <div key={artPiece.art_id} className="art-card">
                    <img src={artPiece.image} alt={artPiece.title} />
                    <h3>{artPiece.art_name}</h3>
                    <p>Description: {artPiece.description}</p>
                    <p>Artist: {artPiece.artist_name}</p>
                    <p>Price: {artPiece.price}</p>
                    <button className="btn btn-danger" >Buy Now</button>
                </div>
            ))
            }

        </div >
    );
};

export default ArtGallery;
