import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

export default function MainAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar>
				<Toolbar variant="dense">
					<Typography>Home</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar variant="dense" />
		</React.Fragment>
	);
}
