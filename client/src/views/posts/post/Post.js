// post component
// import deps
import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';

// import styles
import useStyles from './styles';

// initialize post view arrow function component
const Post = ({ post }) => {
	const {
		createdAt,
		creator,
		likeCount,
		message,
		selectedFile,
		tags,
		title: postTitle,
	} = post;
	const classes = useStyles();
	const { card, cardActions, details, media, overlay, overlay2, title } =
		classes;

	return (
		<Card className={card}>
			<CardMedia className={media} image={selectedFile} title={postTitle} />
			<div className={overlay}>
				<Typography variant="h6">{creator}</Typography>
				<Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
			</div>
			<div className={overlay2}>
				<Button style={{ color: 'white' }} size="small" onClick={() => {}}>
					<MoreHorizIcon fontSize="medium" />
				</Button>
			</div>
			<div className={details}>
				<Typography variant="body2" color="textSecondary">
					{tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<CardContent>
				<Typography className={title} variant="h5" gutterBottom>
					{message}
				</Typography>
			</CardContent>
			<CardActions className={cardActions}>
				<Button size="small" color="primary" onClick={() => {}}>
					{likeCount}&nbsp;
					<ThumbUpAltIcon fontSize="small" />
					Like
				</Button>
				<Button size="small" color="primary" onClick={() => {}}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

// export post component
export default Post;
