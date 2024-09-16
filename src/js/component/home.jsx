import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let {prop1, prop2, prop3, prop4, prop5, prop6} = props;

	return (
		<div className="container-fluid d-flex">
			<div className="border p-5">clock</div>
			<div className="border p-5">{prop1}</div>
			<div className="border p-5">{prop2}</div>
			<div className="border p-5">{prop3}</div>
			<div className="border p-5">{prop4}</div>
			<div className="border p-5">{prop5}</div>
			<div className="border p-5">{prop6}</div>
		</div>
	);
};

export default Home;
