import MainLayout from '../layouts/Main';

const AboutPage = (): JSX.Element => {
	return (
		<MainLayout>
			<div
				className='transition-all md:duration-300 bg-black md:w-px-700 mx-auto rounded-3xl md:p-16 md:mt-14'
			>
				<h1 className='font-bold font-benzin text-2xl text-center mt-8 md:mt-0'>
					Игра о практиках будущего
				</h1>
				<div className='px-4 md:px-0'>
					<p className='mt-8 pt-0.5'>
						Познакомьтесь с примерами социального и технологического предпринимательства,
						которые уже сейчас могут изменить образ жизни людей, а в будущем — стать распространенной практикой.
					</p>
					<p className='mt-4'>
						Выберите практику и ответьте на три вопроса о ней. Каждый вопрос поможет вам
						лучше разобраться в технологиях, их влиянии на человека и общество.
					</p>
					<p className='mt-4'>
						В этой игре нет правильных или неправильных ответов, есть только ваши выборы.
						Выбирайте те ответы, которые вам сейчас ближе, или наоборот те, в которых хотите
						разобраться, узнавайте о них больше и принимайте решения. Вы всегда можете передумать
						или пройти игру заново. 
					</p>
				</div>
			</div>
		</MainLayout>
	);
};

export default AboutPage;
