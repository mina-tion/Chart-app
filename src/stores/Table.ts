import { observable, action, makeObservable } from 'mobx';


import { api } from 'config';

class Store {
	constructor() {
		makeObservable(this);
	}

	//charts
	@observable commentsData: any = [];

	@action
	fetchTableData() {
		api
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				console.log(data);
				console.log(data[0].id, data[0].name.split(' ')[0]);
				data.forEach((comment: any) => {
					let commentInfo = {
						id: comment.id,
						name: comment.name,
						email: comment.email,
						body: comment.body,
					};
					this.commentsData.push(commentInfo);
				});
				console.log(this.commentsData);
			})
			.catch((e) => {
				console.log(e);
			});
	}
}

export default new Store();
