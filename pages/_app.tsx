import Head from 'next/head';
import './global.css';
import { YMInitializer } from 'react-yandex-metrika';

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
	return (
		<div>
			<Head>
				<title>
					Игра-квест от кружкового движения
				</title>
			</Head>
			<YMInitializer accounts={[86857054]} options={{ webvisor: true }} />
			<Component {...pageProps} />
		</div>
	);
};

interface Props {
	Component: any;
	pageProps: object;
}

export default MyApp;
