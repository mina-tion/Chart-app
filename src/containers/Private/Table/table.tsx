import React from 'react';
import { observer } from 'mobx-react';
//components
// style
import styles from './styles.module.scss';
import { Pagination } from 'antd';
import { headerTitles } from 'utils/tableTitles';

interface Props {
	comments: [];
	currentPage: number;
	handlerChange: () => {};
}

const Table: React.FC<Props> = observer(
	({ comments, currentPage, handlerChange }) => {
		return (
			<>
				<table className={styles.table}>
					<thead className={styles.header}>
						{headerTitles.map((title) => (
							<th className={styles.title}>{title}</th>
						))}
					</thead>
					<tbody className={styles.body}>
						{comments.map((comment: any) => (
							<tr className={styles.row}>
								{Object.keys(comment).map((key): any => (
									<td className={styles.item}>{comment[key]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.pagesWrapper}>
					<Pagination
						current={currentPage}
						onChange={handlerChange}
						total={500}
					/>
				</div>
			</>
		);
	}
);

export default Table;
