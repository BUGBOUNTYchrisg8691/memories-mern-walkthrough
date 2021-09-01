// import deps
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// import views
import { Form, Posts } from './views';

// import assets
import memories from './assets/images/memories.png';

// import styles
import useStyles from './styles';

// import actions
import { postActions } from './actions';

// destructure actions from actons modules
const { getAllPosts } = postActions;

const App = () => {
	// keep track of current postId
	const [currentPostId, setCurrentPostId] = React.useState(null);
	// destructure style classes
	const { appBar, heading, image } = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getAllPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={appBar} position="static" color="inherit">
				<Typography className={heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={image} src={memories} alt="memories" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justifyContent="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentPostId={setCurrentPostId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form
								setCurrentPostId={setCurrentPostId}
								currentPostId={currentPostId}
							/>
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
