import useFetch from './component/useFetch';
import './assets/index.css';

function App() {
	const { data, loading, error } = useFetch(
		'https://fakestoreapi.com/products/1'
	);

	if (loading) return <h1>LOADING .....</h1>;
	if (error) console.log(error);

	return (
		<>
			<div className='h-96 w-full m-4'>
				<img
					src={data?.image}
					alt={data?.title}
					className='h-52 w-52 object-contain'
				/>
				<h1>{data?.title}</h1>
				<h2>{data?.price}</h2>
				<div className='flex flex-row'>
					<div className='mr-4'>{data?.rating?.rate}</div>
					<div>{data?.rating?.count}</div>
				</div>
			</div>
			;
			{/* {data?.abilities.map((item, index) => (
				<p key={index}>{item.ability.name}</p>
			))} */}
		</>
	);
}

export default App;
