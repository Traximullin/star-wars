import React from "react"
import HeaderItem from "./HeaderItem"

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__container">
				<HeaderItem title="Главная" to="/"/>
				<HeaderItem title="Планеты" to="/planets"/>
				<HeaderItem title="Избранное" to="/favourites"/>
			</div>
		</header>
	)
}

export default Header
