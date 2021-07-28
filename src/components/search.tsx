
require('./search.css');
import React, { useEffect, useState } from 'react'; 

export default function Search(){
	const [bg, setBg] = useState("transparent");

	useEffect(()=>{
		window.onscroll = (event: any) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.8 * (realHeight/142);
			if(optatic <= 0.8 ) {
				setBg(`rgba(234, 44, 44, ${optatic})`)
			}
		}
	}, []);

	let bColor = bg ? bg : 'transprent';
	return (
		<div id="search" className="pf"  style={{ background: bColor }}>
			<div className="search pr">
				<div className="sl pa">
					<i></i>
				</div>
				<div className="frc pr">
					<span className="searchicon pa"></span>
					<form>
						<input placeholder="搜索，有彩蛋" type="text"/>
					</form>
				</div>
				<div className="sub pa">
					<span>登录</span>
				</div>
			</div>
		</div>
	);
}

