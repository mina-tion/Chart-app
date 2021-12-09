import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

//components
import { Layout } from 'antd';
import BrendIcon from 'components/BrendIcon';
import MenuBar from 'components/MenuBar';
import HeaderProfile from 'components/HeaderProfile';
import SiderContent from 'components/SiderContent';
import ExchangePage from 'components/ExchangePage';
import { useStore } from 'stores';
// style
import styles from './styles.module.scss';

const { Header, Sider, Content } = Layout;

const Main: React.FC = () => {
	const { exchangeStore } = useStore();

	useEffect(() => {
		exchangeStore.fetchGraphData();
	}, []);

	return (
		<Layout className={styles.container}>
			<Header className={styles.header}>
				<BrendIcon />
				<MenuBar />
				<HeaderProfile />
			</Header>
			<Layout className={styles.main}>
				<Sider className={styles.sider}>
					<SiderContent />
				</Sider>
				<Content className={styles.content}>
					<ExchangePage />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Main;
