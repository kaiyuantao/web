import React, { useState } from 'react';    

require("./header.css");
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
let jsonp = require('../util/jsonp.js');

import mybook from '../../public/image/mybook.png'
import left from '../../public/image/left.png'

export default function Header(){
	const [imgUrls, setImgUrls] = useState([left]);

	return (
		<div id="header">
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{
						imgUrls.map((url: any, index: number) => {
							return <div className="swiper-slide" key={index}>
										<img className="img" src={url} />
										<span style={{position: "absolute", top: 150, left: 150, color:'white'}}>
											我步入丛林，希望生活得有意义
											<br/>
											以免当我老去，发现我从未活过...
										</span>
									</div>
						})
					}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	);

} 



