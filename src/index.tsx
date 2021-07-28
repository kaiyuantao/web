import React from 'react'
import ReactDOM from 'react-dom'

require('./lib/common.css');
import Header from './components/header'; 
import Search from './components/search';
import Spike from './components/spike';
import More from './components/more';
import Like from './components/like';

ReactDOM.render(
    <div>
		<Search />
		<Header />
		<Spike />
		<More />
		<Like />
	</div>, 
    document.getElementById('root')
)

