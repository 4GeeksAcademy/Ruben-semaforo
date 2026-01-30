import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	const [active,setActive] = useState();

	return (
		<div className="min-vh-100 d-flex">
			<div className="d-flex bg-dark rounded m-auto flex-column p-3">
				<div className={active=="rounded-circle m-1 red"? active+" selected-red" : "rounded-circle m-1 red"} style={{width: "75px",height: "75px"}} onClick={()=>{
					setActive("rounded-circle m-1 red")
				}}></div>
				<div className={active=="rounded-circle m-1 yellow"? active+" selected-yellow" : "rounded-circle m-1 yellow"} style={{ width: "75px", height: "75px" }} onClick={()=>{
					setActive("rounded-circle m-1 yellow")
				}}></div>
				<div className={active=="rounded-circle m-1 green"? active+" selected-green" : "rounded-circle m-1 green"} style={{ width: "75px", height: "75px" }} onClick={()=>{
					setActive("rounded-circle m-1 green")
				}}></div>
			</div>
		</div>
	);
};

export default Home;