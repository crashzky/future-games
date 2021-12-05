import Head from 'next/head';
import './global.css';

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
	return (
		<div>
			<Head>
				<title>
					Игра-квест от кружкового движения
				</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
};

interface Props {
	Component: any;
	pageProps: object;
}

export default MyApp;
