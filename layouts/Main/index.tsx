import Header from './Header';

import Props from './Main.props';
import styles from './Main.module.scss';
import Footer from '../Footer';

const MainLayout = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.main} id='topBlock'>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
