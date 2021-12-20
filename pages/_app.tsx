import Head from 'next/head';
import './global.css';
import { YMInitializer } from 'react-yandex-metrika';

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
	return (
		<div>
			<Head>
				<title>
					Город практик будущего
				</title>
			</Head>
			<YMInitializer accounts={[86930852]} options={{ webvisor: true }} />
			<Component {...pageProps} />
		</div>
	);
};

interface Props {
	Component: any;
	pageProps: object;
}

export default MyApp;
