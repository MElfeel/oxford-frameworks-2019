import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import './style.css';

import { HashRouter,Route,Link } from 'react-router-dom'
import { Shop, Stockists, Team, Contact, History, Error } from './pages'

render(

  <HashRouter>

    <div>

		<nav>
			<ul>
				<li><Link to="/">Shop</Link></li>
				<li><a href="#/stockists">Stockists</a></li>
				<li><Link to="/team">Team</Link></li>
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/history">History</Link></li>
			</ul>
		</nav>

        <Route exact path="/" component={Shop} />
        <Route path="/stockists" component={Stockists} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/history" component={History} />

    </div>

  </HashRouter>,

  document.getElementById('root')
)

