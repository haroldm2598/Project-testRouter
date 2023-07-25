// https://pokeapi.co/api/v2/pokemon/ditto

import useFetch from './component/useFetch';

function App() {
	const { data, loading, error } = useFetch(
		'https://pokeapi.co/api/v2/pokemon/ditto'
	);

	if (loading) return <h1>LOADING .....</h1>;
	if (error) console.log(error);

	return (
		<>
			<h1>{data?.name}</h1>
			{data?.abilities.map((item, index) => (
				<p key={index}>{item.ability.name}</p>
			))}
		</>
	);
}

export default App;
