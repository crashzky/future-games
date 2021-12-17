import Footer from '../Footer';
import Props from './Contest.props';

import styles from './Contest.module.scss';

const ContestLayout = ({ backgroundColor, label, children }: Props): JSX.Element => {
	return (
		<div className={backgroundColor}>
			<h1 className='font-black text-xl mx-7 py-5'>
				{label}
			</h1>
			<div className={styles.container + ' bg-black rounded-t-2xl p-4 h-full'}>
				<main>
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default ContestLayout;
