import '../assets/index.css';

function Home(props) {
	return (
		<>
			<div className='h-96 w-full m-4'>
				<img
					src={props.data?.image}
					alt={props.data?.title}
					className='h-52 w-52 object-contain'
				/>
				<h1>{props.data?.title}</h1>
				<h2>{props.data?.price}</h2>
				<div className='flex flex-row'>
					<div className='mr-4'>{props.data?.rating?.rate}</div>
					<div>{props.data?.rating?.count}</div>
				</div>
			</div>
		</>
	);
}

export default Home;
