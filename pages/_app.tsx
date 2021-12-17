import Head from 'next/head';
import './global.css';

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
	return (
		<div>
			<Head>
				<title>
					KD GAME
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
