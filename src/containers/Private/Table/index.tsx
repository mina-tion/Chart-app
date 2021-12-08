import React from 'react';
import { observer } from 'mobx-react';

//components
// style
import styles from './styles.module.scss';

const headerTitles = [
	'First Name',
	'Middle Name',
	'Last Name',
	'Last Position',
	'Email',
	'Phone Number',
	'LinkedIn URL',
	'Company Name',
];

const Table: React.FC = observer(() => {
	return (
		<table className={styles.table}>
			<thead className={styles.header}>
				{headerTitles.map((title) => (
					<th className={styles.title}>{title}</th>
				))}
			</thead>
			<tbody>
				<tr>
					<td>Anna</td>
					<td>Ann</td>
					<td>Skrypnyk</td>
					<td>dfsfsfs</td>
					<td>adad</td>
					<td>Anna</td>
					<td>Ann</td>
					<td>Skrypnyk</td>
				</tr>
			</tbody>
		</table>
	);
});

export default Table;
