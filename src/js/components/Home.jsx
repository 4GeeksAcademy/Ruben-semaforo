import React from "react";
import { useState } from "react";
import Light from "./Light";

//create your first component
const Home = () => {

	const [active, setActive] = useState("");
	
	const activeFunction = (color) => {
		if(active.includes(color)){
			setActive("");
			return
		}
		setActive(`rounded-cicler light m-1 ${color}`)
	}

	return (
		<div className="min-vh-100 d-flex">
			<div className="d-flex bg-dark rounded m-auto flex-column p-3">

				<Light clases={active.includes("red") ? active + " selected-red" : "rounded-circle light m-1 red"} utility={() => {
					if (active.includes("red")) {
						setActive("")
						return
					}
					setActive("rounded-circle light m-1 red")
				}} />
				
				<Light clases={active.includes("yellow") ? active + " selected-yellow" : "rounded-circle light m-1 yellow"} utility={() => {
					if (active.includes("yellow")) {
						setActive("")
						return
					}
					setActive("rounded-circle light m-1 yellow")
				}} />

				<Light clases={active.includes("green") ? active + " selected-green" : "rounded-circle light m-1 green"} utility={() => {
					if (active.includes("green")) {
						setActive("")
						return
					}
					setActive("rounded-circle light m-1 green")
				}} />

			</div>
		</div>
	);
};

export default Home;