import { observable, action, makeObservable } from 'mobx';

import { api } from 'config';

class Store {
	constructor() {
		makeObservable(this);
	}

	//charts
	@observable commentsData: any = [];
	@observable isLoading: boolean = false;
	@observable currentPage: number = 1;
	@observable commentsPerPage: number = 10;

	@action setCurrentPage(value: number) {
		this.currentPage = value;
	}
	@action setLoading(value: boolean) {
		this.isLoading = value;
	}

	@action
	async fetchTableData() {
		console.log(this.currentPage, 'curPage');
		const res = await api.get(
			`https://jsonplaceholder.typicode.com/comments?_page=${this.currentPage}&_limit=10`
		);
		console.log(res);
		res.data.forEach((comment: any) => {
			let commentInfo = {
				id: comment.id,
				name: comment.name,
				email: comment.email,
				body: comment.body,
			};
			this.commentsData.push(commentInfo);
		});
	}
}

export default new Store();
