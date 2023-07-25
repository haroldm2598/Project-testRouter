import './assets/index.css';

import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import useFetch from './component/useFetch';

import Home from './pages/Home';
import About from './pages/About';

function App() {
	const { data, loading, error } = useFetch(
		'https://fakestoreapi.com/products/1'
	);

	if (loading) return <h1>LOADING .....</h1>;
	if (error) console.log(error);

	return (
		<HashRouter>
			<header className='mx-5'>
				<nav>
					<h1 className='text-xl font-bold'>Testing Router GH-pages</h1>
					<Link to='/' className='mr-2'>
						Home
					</Link>
					<NavLink to='about'>About</NavLink>
				</nav>
			</header>

			<main>
				<Routes>
					<Route index element={<Home data={data} />} />
					<Route path='about' element={<About />} />
				</Routes>
			</main>
		</HashRouter>
	);
}

export default App;
