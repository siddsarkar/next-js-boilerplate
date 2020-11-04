import { Paper } from '@material-ui/core';
import MainAppBar from './appbar';
export default function Layout({ children, page }) {
	switch (page) {
		case 'homepage':
			return (
				<Paper style={{ minWidth: '100vw', minHeight: '100vh' }}>
					<MainAppBar />
					{children}
				</Paper>
			);
			break;
		case 'article':
			return <div>article</div>;
			break;

		default:
			return <div>{children}</div>;
			break;
	}
}
