import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { YMInitializer } from 'react-yandex-metrika';

class MyDocument extends Document {
	static async getStaticProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang='ru'>
				<Head />
				<YMInitializer accounts={[86857054]} options={{ webvisor: true }} />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>	
		);
	}
}

export default MyDocument;
