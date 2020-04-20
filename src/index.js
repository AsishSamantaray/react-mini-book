import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Stateless Component..
function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <section className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51cHCkvvKiL._SY498_BO1,204,203,200_.jpg"
        width="200"
        alt="Wonky Donky"
      />
      <Title />
      <Author />
    </section>
  );
};

const Title = () => {
  return <h1 style={{ color: "red" }}>The Wonky Donkey</h1>;
};

const authorStyle = {
  letterSpacing: "10px",
  color: "green",
};

const Author = () => {
  return <p style={authorStyle}>by Craig Smith </p>;
};

ReactDom.render(<Books />, document.getElementById("root"));
