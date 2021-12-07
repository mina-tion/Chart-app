import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// utils
import { isLogin } from 'utils/login';

const PublicRoute = ({
	component: Component,
	restricted,
	...rest
}: any): any => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() && restricted ? <Redirect to='/' /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
