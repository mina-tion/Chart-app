import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
//components
// style
import styles from './styles.module.scss';

const headerTitles = ['Id', 'Name', 'Email', 'Body', 'Email'];

const Table: React.FC = observer(() => {
	const { tableStore } = useStore();
	console.log(tableStore.commentsData.length);
	useEffect(() => {
		tableStore.fetchTableData();
	}, []);

	return (
		<table className={styles.table}>
			<thead className={styles.header}>
				{headerTitles.map((title) => (
					<th className={styles.title}>{title}</th>
				))}
			</thead>
			<tbody>
				{tableStore.commentsData.map((comment: any) => (
					<tr className={styles.row}>
						{Object.keys(comment).map((key): any => (
							<td className={styles.item}>{comment[key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
});

export default Table;
