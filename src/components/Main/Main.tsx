// Functional
import React from "react"
// React-router
import {Routes, Route} from "react-router-dom"
// Pages
import {FavouritesPage, HomePage, NotFound, PlanetsPage} from "../../pages"
// Contants routes
import {
	FAVOURITES_ROUTE,
	MAIN_ROUTE,
	NOT_FOUND,
	PLANETS_ROUTE,
} from "../../utils/routes"

const Main: React.FC = () => {
	return (
		<div className="main">
			<div className="main__container">
				<Routes>
					<Route
						path={MAIN_ROUTE}
						element={<HomePage/>}
					/>
					<Route
						path={PLANETS_ROUTE}
						element={<PlanetsPage/>}
					/>
					<Route
						path={FAVOURITES_ROUTE}
						element={<FavouritesPage/>}
					/>
					<Route
						path={NOT_FOUND}
						element={<NotFound/>}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default Main
