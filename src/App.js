import React, { useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Switch from "./components/Switch"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons"
library.add(faSpaceShuttle)

function App() {
	const [firstSwitch, setFirstSwitch] = useState(false)
	const [secondSwitch, setSecondSwitch] = useState(false)
	const [thirdSwitch, setThirdSwitch] = useState(false)

	return (
		<div className="App">
			<Header />
			<div className="container">
				<div className="switches">
					<Switch switchButton={firstSwitch} setSwitch={setFirstSwitch} />
					<Switch switchButton={secondSwitch} setSwitch={setSecondSwitch} />
					<Switch switchButton={thirdSwitch} setSwitch={setThirdSwitch} />
				</div>

				<div
					className={`go-no-way ${
						firstSwitch && secondSwitch && thirdSwitch ? "go" : "no-way"
					}`}
				>
					{firstSwitch && secondSwitch && thirdSwitch ? "Go !" : "No way !"}
				</div>
			</div>
		</div>
	)
}

export default App
