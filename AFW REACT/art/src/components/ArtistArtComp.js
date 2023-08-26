import React, { useEffect, useState } from "react";

const MyArts = () => {
  const [arts, setArts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const loggedArtist = JSON.parse(localStorage.getItem("loggedartist"));

  useEffect(() => {
    if (loggedArtist && loggedArtist.artist_id) {
      const artistId = loggedArtist.artist_id;

      fetch("http://localhost:8080/getArtByArtistId?artist_id=" + artistId)
        .then((resp) => resp.json())
        .then((obj) => {
          setArts(obj);
        });
    }
  }, [loggedArtist]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(storedCartItems || []);
  }, []);

  const handleAddToCart = (artPiece) => {
    if (!cartItems.some((item) => item.art_id === artPiece.art_id)) {
      const updatedCartItems = [...cartItems, artPiece];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="art-gallery">
      {arts.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          <p>Artist: {artPiece.artist_name}</p>
          <p>Price: {artPiece.price}</p>
          <p>Status: {artPiece.status}</p>
          <button
            onClick={() => handleAddToCart(artPiece)}
            disabled={cartItems.some((item) => item.art_id === artPiece.art_id)}
          >
            {cartItems.some((item) => item.art_id === artPiece.art_id) ? "Already in Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyArts;
