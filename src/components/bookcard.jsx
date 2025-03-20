import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2>{book.name}</h2>
      <h4>{book.genre}</h4>
      <h5>by {book.author}</h5>
    </div>
  );
};

export default BookCard;
