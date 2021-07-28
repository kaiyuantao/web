
require('./like.css');
let jsonp = require('../util/jsonp.js');
import React, { useState } from 'react'; 

export default function Like(){
	const [stores, setStores] = useState([]);
	let countId = 0;
	return (
		<div id="like">
			<p>猜你喜欢</p>
			{
				stores.map((item: any) => {
					return <div className="like_content" key={"like" + countId++}>
								<div className="like_link">
									<a href={ item.url }>
										<img src={ item.icon } alt=""/>
									</a>
								</div>
								<div className="like_desc">
									<span>
										{ item.desc }		
									</span>
								</div>
								<div className="like_price">
									<span>¥{ item.price }</span>
									<div><a href={ item.more }>看相似</a></div>
								</div>
							</div>
				})
			}
		</div>
	);

}
