import {useState} from 'react'

require('./more.css');
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
let jsonp = require('../util/jsonp.js');
import React from 'react'; 

export default function More() {
	const [more1, setMore1] = useState([]);
	const [more2, setMore2] = useState([]);
	const [more3, setMore3] = useState([]);

	let countId = 0;
	return (
		<div id="more">
			<div className="more_top">
				{
					more1.map((item: any) => {
						return <div className="more_link" key={"more" + countId++}>
									<a href={item.url}>
										<img src={item.icon} alt=""/>
									</a>
								</div>
					})
				}
			</div>
			<div className="more_middle">
				{
					more2.map((item: any) => {
						return <div className="more_style" key={"more" + countId++}>
									<a href={item.url}>
										<img src={item.icon} alt=""/>
									</a>
								</div>
					})
				}
			</div>
			<div className="more_bottom">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{
							more3.map((item: any) => {
								return  <div className="swiper-slide" key={"more" + countId++}>
											<a href={item.url}>
												<img src={item.icon} alt=""/>
											</a>
										</div>
							})
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</div>
	);
}
	
