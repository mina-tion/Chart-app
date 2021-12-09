import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
//components
// style
import styles from './styles.module.scss';
import { Pagination } from 'antd';

const headerTitles = ['Id', 'Name', 'Email', 'Body'];

const Table: React.FC = observer(() => {
	const { tableStore } = useStore();
	
	useEffect(() => {
		tableStore.setLoading(true);
		tableStore.fetchTableData();
		tableStore.setLoading(false);
	}, []);

	const handlerChange = (page: number) => {
		tableStore.setCurrentPage(page);
	};

	if (tableStore.isLoading) {
		return <h1>Loading...</h1>;
	}
	console.log(tableStore.commentsData)
	return (
		<>
			<table className={styles.table}>
				<thead className={styles.header}>
					{headerTitles.map((title) => (
						<th className={styles.title}>{title}</th>
					))}
				</thead>
				<tbody className={styles.body}>
					{tableStore.commentsData.map((comment: any) => (
						<tr className={styles.row}>
							{Object.keys(comment).map((key): any => (
								<td className={styles.item}>{comment[key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				current={tableStore.currentPage}
				onChange={handlerChange}
				total={500}
			/>
		</>
	);
});

export default Table;
