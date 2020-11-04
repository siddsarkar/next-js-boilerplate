import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Examples from '../components/examples';
import Layout from '../components/layout';
import { startClock } from '../store/actions/counterActions';
const Index = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(startClock());
		},
		[ dispatch ]
	);

	return (
		<Layout page="homepage">
			<Examples />
			<Link href="/show-redux-state">
				<a>Click to see current Redux State</a>
			</Link>
		</Layout>
	);
};

export default Index;
