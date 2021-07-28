
require('./spike.css');
let jsonp = require('../util/jsonp.js');
import React, { useState } from 'react'; 
import sanjuanlogo from '../../public/image/sanjuanlogo.png'

export default function Spike(){
	const [hour, setHour] = useState("00");
	const [minutes, setMinutes] = useState("00");
	const [second, setSecond] = useState("00");
	const [store, setStore] = useState([1]);
	const [more, setMore] = useState("");

	return (
		<div>
			<div id="spike">
				<div className="spike_header">
					<i></i>
					<span className="spike_title">掌上时间</span>
					<div className="spike_time">
						{
							(() => {
								return  <div>
											<span>{hour}</span>:<span>{minutes}</span>:<span>{second}</span>
										</div>
										
							})()
						}
					</div>
					<div className="spike_more fr">
						<i className="fr"></i>
						<a href={more}>
							<span>更多秒杀</span>
						</a>
						
					</div>
					<div style={{clear:"both"}}></div>
				</div>
			</div>
			<img style={{ borderRadius: '15px'}} src={sanjuanlogo} alt=""/>
		</div>
	);
}
