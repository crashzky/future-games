import Footer from '../Footer';
import Props from './Contest.props';

import styles from './Contest.module.scss';
import Header from '../Main/Header';

const ContestLayout = ({ backgroundColor, label, children }: Props): JSX.Element => {
	return (
		<div className={backgroundColor}>
			<h1 className='md:hidden font-black text-xl mx-7 py-5'>
				{label}
			</h1>
			<Header variant='hiddenMobile' />
			<div
				className={
					styles.container
					+ ' bg-black rounded-t-4xl md:rounded-4xl p-4 md:p-16 h-full md:w-px-700 mx-auto md:my-14'
				}
			>
				<main>
					{children}
				</main>
				<Footer variant='showMobile' />
			</div>
			<Footer variant='showDesktop' /> 
		</div>
	);
};

export default ContestLayout;
