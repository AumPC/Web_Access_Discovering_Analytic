import React, {Component} from 'react';
import axios, {post} from 'axios';

class UploadFile extends Component {
	constructor(props) {
		super(props);
		this.state ={
			file:null
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.fileUpload = this.fileUpload.bind(this)
	}

	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(this.state.file).then((response)=>{
			console.log(response.data);
		})
	}

	onChange(e) {
		this.setState({file:e.target.files[0]})
	}

	fileUpload(file) {
		const url = 'http://localhost:8080/upload';
		// const url = '/public/logs';
		const formData = new FormData();
		formData.append('file',file)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		return  post(url, formData, config)
	}

	render() {
		return (
			<div className="card">
				<form onSubmit={this.onFormSubmit}>
				<h3>File Upload</h3>
				<input type="file" onChange={this.onChange} multiple/>
				<button type="submit">Upload</button>
				</form>
			</div>
			);
	}
};

export default UploadFile;