import React from 'react';
import { observer } from 'mobx-react';

//components
import { Layout } from 'antd';
import HomePage from 'components/HomePage';

// style
import styles from './styles.module.scss';
import BrendIcon from 'components/BrendIcon';
import MenuBar from 'components/MenuBar';
import HeaderProfile from 'components/HeaderProfile';

const { Header, Sider, Content } = Layout;

const Main: React.FC = observer(() => {
	return (
		<Layout className={styles.container}>
			<Header className={styles.header}>
		{/* 	<div className={styles.blockA}></div>
				<div className={styles.blockB}></div>
				<div className={styles.blockC}></div> */}

				<BrendIcon />
				<MenuBar />
				<HeaderProfile /> 
			</Header>
			<Layout className={styles.main}>
				<Sider className={styles.sider}>Sider</Sider>
				<Content className={styles.content}>
					<HomePage />
				</Content>
			</Layout>
			{/* <Footer className={styles.footer}>Footer</Footer> */}
		</Layout>
	);
});

export default Main;
