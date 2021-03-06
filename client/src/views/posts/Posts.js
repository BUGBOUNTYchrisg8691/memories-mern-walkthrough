// posts component
//import deps
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

// import subview components
import { Post } from './post';

//import styles
import useStyles from './styles';

// initialize posts arrow function component
const Posts = ({ setCurrentPostId }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();
	const { container } = classes;

	return (
		<>
			{!posts.length ? (
				<CircularProgress />
			) : (
				<Grid className={container} container alignItems="stretch" spacing={3}>
					{posts.map((post) => (
						<Grid key={post._id} item xs={12} sm={6}>
							<Post post={post} setCurrentPostId={setCurrentPostId} />
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};

// export posts component
export default Posts;
