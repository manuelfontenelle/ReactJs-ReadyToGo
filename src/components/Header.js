import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
	return (
		<div className="header">
			<FontAwesomeIcon
				className="space-shuttle"
				icon="space-shuttle"
				size="2x"
			/>
			Ready To Go
		</div>
	)
}

export default Header
