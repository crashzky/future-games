import { CheckCircle, Circle } from 'lucide-react';
import Props from './ContestItem.props';

import styles from './ContestItem.module.scss';
import Button from '../Button';
import { useState } from 'react';
import { useStore } from '../../hooks/useStore';

const ContestItem = ({
	currentNumber,
	count,
	question,
	disabled,
	onClick,
	className = '',
	...props
}: Props): JSX.Element => {
	const [selected, setSelected] = useState<number>();
	const [watchCheckMenu, setWatchCheckMenu] = useState(false);
	const [clicked, setClicked] = useState(false);
	const updateAnswers = useStore((state) => state.updateAnswers);

	const onItemPress = (index): void => {
		updateAnswers({
			questionId: question.id,
			answerId: index,
		});
		setSelected(index);
	};

	return (
		<div className={className + ' relative'} {...props}>
			{disabled && (
				<div className={styles.disabled}></div>
			)}
			<p className='mt-4 text-center text-lg'>
				{currentNumber + ' / ' + count}
			</p>
			<h2 className='font-bold text-center mt-4 mx-4'>
				{question.title}
			</h2>
			<div className={styles['grid-columns'] + ' mt-6 grid gap-x-3 gap-y-5'}>
				{question.answers.map((i, num) => (
					// TODO each child in a list should have a unique "key" prop
					<>
						<button key={num + '_circle'} className='h-4' onClick={() => onItemPress(num)}>
							{selected === num ? (
								<CheckCircle color='white' size={16} />
							) : (
								<Circle color='white' size={16} />
							)}
						</button>
						<button key={num + '_div'} onClick={() => onItemPress(num)}>
							<h3 className='font-black text-left'>
								{i.title}
							</h3>
							<p className='font-light text-xs mt-1 text-left'>
								{i.description}
							</p>
						</button>
					</>
				))}
			</div>
			{watchCheckMenu && selected !== undefined ? (
				<>
					<h3 className='font-bold text-center mt-11'>
						{question.answers[selected].titleOnSelect}
					</h3>
					<p className='text-sm text-center mt-2'>
						{question.answers[selected].objection}
					</p>
					<div className='grid grid-cols-2 gap-4 mt-7'>
						<Button
							variant='outlined'
							label='Ещё подумаю'
							onClick={() => {
								if(!clicked) {
									setWatchCheckMenu(false);
									window.scrollBy({
										top: -150,
										behavior: 'smooth',
									});
								}
							}} />
						<Button
							variant='enabled'
							label='Да'
							onClick={() => {
								onClick();
								setClicked(true);
							}} />
					</div>
				</>
			) : (
				<Button
					className='mt-11'
					label='Подтвердить'
					variant={selected !== undefined ? 'enabled' : 'disabled'}
					onClick={() => {
						setWatchCheckMenu(true);
						window.scrollBy({
							top: 150,
							behavior: 'smooth',
						});
					}} />
			)}
		</div>
	);
};

export default ContestItem;
