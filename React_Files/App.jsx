import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import ReactDOM from "react-dom";

const Header = lazy(() => import("./Components/Header"));
const Home = lazy(() => import("./Pages/Home"));
const Sigin = lazy(() => import("./Pages/Signin"));

require("./static/layout.scss");

const csrfToken = () => {
	const token = document.querySelector("input[name='csrfmiddlewaretoken']").value;
	console.log(`csrf token : ${token}`);
	document.querySelector("input[name='csrfmiddlewaretoken']").remove();
	return token;
};

const csrfCookie = () => {
	let name = "csrftoken";
	let cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	console.log(`csrfCookie : ${cookieValue}`);
	return cookieValue;
};

csrfToken();
csrfCookie();

class App extends Component {
	render() {
		return (
			<>
				<div className='cursive text-6xl text-center font-extrabold shadow-sm'>
					Wajid Areeb
				</div>
				<h1 className='text-4xl font-bold'>
					Project 1:
					<br />
					Ecommerce
				</h1>
				This is <div className='code'>working</div>.
				<BrowserRouter>
					<Suspense fallback={<div className='loading'></div>}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/header' component={Header} />
							<Route exact path='/signin' component={Sigin} />
						</Switch>
					</Suspense>
				</BrowserRouter>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
