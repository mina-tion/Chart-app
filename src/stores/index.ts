import { createContext, useContext } from 'react';
import { configure, observable } from 'mobx';
import exchangeStore from 'stores/Exchange';
import loginStore from 'stores/Login';
import tableStore from 'stores/Table';

configure({ enforceActions: 'observed' });

class RootStore {
	@observable exchangeStore = exchangeStore;
	@observable loginStore = loginStore;
	@observable tableStore = tableStore;
}

const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

export const useStore = (): RootStore => {
	const store = useContext(StoreContext);
	if (!store) {
		throw new Error('You have forgot to use StoreProvider, shame on you.');
	}
	return store;
};

export default new RootStore();
