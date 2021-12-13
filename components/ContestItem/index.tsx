import { CheckCircle, Circle } from 'lucide-react';
import Props from './ContestItem.props';
import React from 'react';
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
	buttonStyle,
	...props
}: Props): JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState<number>();
	const [watchCheckMenu, setWatchCheckMenu] = useState(false);
	const [clicked, setClicked] = useState(false);
	const updateAnswers = useStore((state) => state.updateAnswers);

	const onItemPress = (index): void => {
		if(!clicked) {
			updateAnswers({
				questionId: question.id,
				answerId: index,
			});
			setSelectedIndex(index);
		}
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
					<React.Fragment key={num}>
						<button key={num + '_circle'} className='h-4' onClick={() => onItemPress(num)}>
							{selectedIndex === num ? (
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
					</React.Fragment>
				))}
			</div>
			{(watchCheckMenu && selectedIndex !== undefined) && (
				<>
					<h3 className='font-bold text-center mt-11'>
						{question.answers[selectedIndex].titleOnSelect}
					</h3>
					<p className='text-sm text-center mt-2'>
						{question.answers[selectedIndex].objection}
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
							className={buttonStyle}
							onClick={() => {
								onClick();
								setClicked(true);
								setWatchCheckMenu(false);
							}} />
					</div>
				</>
			)}
			{!clicked && (!watchCheckMenu || selectedIndex === undefined) && (
				<Button
					className={'mt-11 ' + (selectedIndex !== undefined && buttonStyle)}
					label='Подтвердить'
					variant={selectedIndex !== undefined ? 'enabled' : 'disabled'}
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
