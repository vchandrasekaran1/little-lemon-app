import React from 'react';
import bruschetta from '../images/bruschetta.jpg';
import greek_salad from '../images/greek_salad.jpg';
import lemon_dessert from '../images/lemon_dessert.jpg';
import special_dish from '../images/special_dish.jpg';

function Main() {
  return (
    <main>
      <section className="intro">
        <h2>Little Lemon</h2>
        <p>
          Chicago<br />
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </section>
      <img src={special_dish} alt="Special dish" className="special-img"/>
      <section className="specials">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
        <div className="cards">
          <article className="card">
            <img src={greek_salad} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Description text here</p>
            <button>Order a delivery</button>
          </article>
          <article className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Description text here</p>
            <button>Order a delivery</button>
          </article>
          <article className="card">
            <img src={lemon_dessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Description text here</p>
            <button>Order a delivery</button>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
