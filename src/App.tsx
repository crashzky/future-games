import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import SourcesContestPage from './pages/SourcesContest';

const App = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path='/sources' element={<SourcesContestPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</Router>
	);
};

export default App;
