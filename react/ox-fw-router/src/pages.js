
import React from 'react'

let Shop = () =>
    <section className="shop">
        <h1>Shop</h1>
    </section>

let Stockists = () =>
    <section className="stockists">
        <h1>Shops that carry our stock</h1>
    </section>

let Team = () =>
    <section className="team">
        <h1>Our Team</h1>
    </section>

let Contact = () =>
    <section className="contact">
        <h1>Contact Us</h1>
    </section>

let History = () =>
    <section className="history">
        <h1>The history of our company</h1>
    </section>

// let Error = ({location}) =>
//     <section className="error">
//         <h1>Missing 404</h1>
//         <h2>{location.pathname}</h2>
//     </section>

export { Shop, Stockists, Team, Contact, History, Error };
