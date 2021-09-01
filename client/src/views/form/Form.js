// form component
// import deps
import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

// import styles
import useStyles from './styles';

// import actions
import { postActions } from '../../actions';
const { createPost, updatePost } = postActions;

// initial state
const initialFormData = {
	creator: '',
	title: '',
	message: '',
	tags: '',
	selectedFile: '',
};

// initialize form arrow function component
const Form = ({ currentPostId, setCurrentPostId }) => {
	const [formData, setFormData] = React.useState(initialFormData);
	const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
	const { root, paper, form: formClass, fileInput, buttonSubmit } = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!formData.creator || !formData.title || !formData.message) {
			setSubmitIsDisabled(true);
		} else {
			setSubmitIsDisabled(false);
		}
	}, [formData]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentPostId) {
			dispatch(updatePost(currentPostId, formData));
		} else {
			dispatch(createPost(formData));
		}
	};

	const clear = () => {};

	return (
		<Paper className={paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${root} ${formClass}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">Creating a memory</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={formData.creator}
					onChange={(e) =>
						setFormData({ ...formData, creator: e.target.value })
					}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={formData.title}
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={formData.message}
					onChange={(e) =>
						setFormData({ ...formData, message: e.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={formData.tags}
					onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
				/>
				<div className={fileInput}>
					<FileBase
						type="file"
						mulitple={false}
						onDone={({ base64 }) =>
							setFormData({ ...formData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
					disabled={submitIsDisabled}
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

// export form component
export default Form;
