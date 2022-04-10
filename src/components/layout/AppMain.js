import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Beers from '../pages/Beers';
import NewBeer from '../pages/NewBeer';
import RandomBeer from '../pages/RandomBeer';

const AppMain = () => {
	return (
		<>
			<Header/>
			<Routes>
				<Route path="/beers" element={<Beers />} />
				<Route path="/random-beer" element={<RandomBeer />} />
				<Route path="/new-beer" element={<NewBeer />} />
			</Routes>
		</>
	)
}

export default AppMain