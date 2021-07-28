
require('./spike.css');
let jsonp = require('../util/jsonp.js');
import React, { useEffect, useState } from 'react'; 
import sanjuanlogo from '../../public/image/sanjuanlogo.png'

export default function Spike(){
	const [hour, setHour] = useState("00");
	const [minutes, setMinutes] = useState("00");
	const [second, setSecond] = useState("00");
	const [store, setStore] = useState([1]);
	const [more, setMore] = useState("");

	useEffect(()=>{
		setInterval(clock,1000);
	}, [])

	var count = 0;
	var clock = ()=>{
		count++;
		let hour = 0,
			minutes = 0,
			second = 0,
			regTwo = /^\d{2}$/,
			regInteger = /^(\d{1,2})\.?\d*$/;
		if(count/3600 >= 1) {
			hour = count/3600;
			count -= hour*3600; 
			setHour(regTwo.test(hour.toString()) ? hour.toString() : `0${hour}`);
		}
		if(count/60 >= 1) {
			minutes = count/60;
			count -= minutes*60; 
			setMinutes(regTwo.test(minutes.toString()) ? minutes.toString() : `0${minutes}`);
		}
		second = count;
		setSecond(regTwo.test(second.toString()) ? second.toString() : `0${second}`);
	}

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
