import React, { Component, lazy, Suspense } from "react";

import ReactDOM from "react-dom";
import Card from "./Components/Card";

document.querySelector("body").className = "";

class App extends Component {
	render() {
		return (
			<>
				<div className='h-screen flex flex-col shadow-md z-40'>
					<div className='w-full select-none my-auto pb-4  cursive text-6xl text-center font-extrabold sticky top-0'>
						Wajid Areeb
					</div>
					<a className='ml-auto' href='https://github.com/Wajid2001'>
						Github
					</a>
				</div>

				<Suspense fallback={<div className='loading'></div>}>
					<div className='z-0 bg-gray-50 h-screen flex border-t'>
						<Card />
					</div>
				</Suspense>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
