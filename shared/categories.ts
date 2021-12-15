/* eslint-disable max-len */
import { Category } from './types/Category';
import { HappinessAndHealth } from './questions/HappinessAndHealth';
import { CareAboutOlderGeneration } from './questions/CareAboutOlderGeneration';
import { WorkDivision } from './questions/WorkDivision';
import { CityPowerSupply } from './questions/CityPowerSupply';
import { CareerGuidanceForYoung } from './questions/CareerGuidanceForYoung';
import { AvailableOptions } from './questions/AvailableOptions';
import { LivingSpaceTransformation } from './questions/LivingSpaceTransformation';
import { FoodProduction } from './questions/FoodProduction';

export const availableCategories: Category[] = [
	{
		link: 'health',
		value: 'Здоровье человека',
		description: `
			Жители города ежедневно подвергаются стрессу. Это снижает качество жизни и негативным
			образом сказывается на здоровье. Врачи утверждают, что именно стресс является причиной большинства
			болезней, и что люди могли бы жить более долгую и счастливую жизнь, если бы могли снизить уровень стресса.
		`,
		idea: 'Реализуйте проект, который поможет людям управлять уровнем стресса в своей жизни.',
		appeal: 'Помоги людям справиться со стрессом в Городе практик будущего',
		backgroundStyle: 'bg-red-1',
		quiz: HappinessAndHealth,
		image: '/love.png',
		resultImage: '/love_result.png',
		results: [
			{
				id: 1,
				combinations: [[1, 2, 2], [2, 2, 2], [3, 2, 2], [2, 2, 3]],
				header: 'Я помогаю людям справиться со стрессом',
				description: 'Чтобы они могли самостоятельно изменить свою жизнь к лучшему',
			},
			{
				id: 2,
				combinations: [[1, 1, 1], [1, 2, 1], [1, 3, 1], [3, 1, 1], [3, 2, 1], [3, 3, 1]],
				header: 'Я помогаю людям справиться со стрессом',
				description: 'Чтобы они могли достигать большего и становились успешнее',
			},
			{
				id: 3,
				combinations: [[2, 1, 2], [2, 3, 2], [3, 1, 2], [1, 1, 2], [1, 3, 2], [3, 3, 2]],
				header: 'Я помогаю людям справиться со стрессом',
				description: 'Чтобы они могли лучше понять себя',
			},
			{
				id: 4,
				combinations: [[1, 1, 3],
					[1, 3, 3],
					[3, 3, 3],
					[2, 3, 3],
					[1, 2, 3],
					[2, 1, 3],
					[3, 1, 3],
					[3, 2, 3]],
				header: 'Я помогаю людям справиться со стрессом',
				description: 'Чтобы они почувствовали себя свободнее и счастливее',
			},
			{
				id: 5,
				combinations: [[2, 1, 1], [2, 2, 1], [2, 3, 1]],
				header: 'Я помогаю людям справиться со стрессом',
				description: 'Чтобы они научились лучше справляться с жизненными сложностями',
			},
		],
	},
	{
		link: 'city_power_supply',
		value: 'Энергообеспечение города',
		backgroundStyle: 'bg-blue-1',
		description: `
			Город нуждается в энергетической инфраструктуре. Сейчас мы используем централизованную систему производства и потребления энергии. Но она уже достигла предела своей ресурсной эффективности – потребности растут, а увеличить эффективность энергосистемы невозможно. Нужно разработать план изменения энергосистемы.
		`,
		idea: 'Создайте проект энергосистемы, который позволит обеспечивать жителей города экологичной и надежной, бесперебойной энергией.',
		appeal: 'Создай свой проект энергосистемы в Городе Практик Будущего',
		quiz: CityPowerSupply,
		image: '/energy.png',
		resultImage: '/energy_result.png',
		results: [
			{
				id: 1,
				combinations: [[3, 3, 2], [3, 3, 1], [3, 3, 3]],
				header: 'Я создаю новую энергетическую систему, которая безопасна для людей',
				description: 'В ней используются экологичные источники, а электростанции расположены на безопасном от города расстоянии',
			},
			{
				id: 2,
				combinations: [[1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 3, 1], [2, 2, 1], [2, 2, 2], [2, 1, 2], [2, 1, 1], [3, 1, 1]],
				header: 'Я создаю новую энергетическую систему, которая эффективна',
				description: 'Она удовлетворяет растущие потребности жителей города',
			},
			{
				id: 3,
				combinations: [[2, 1, 3], [2, 2, 3], [2, 3, 2], [2, 3, 3], [3, 2, 3], [3, 1, 3], [3, 1, 2]],
				header: 'Я создаю новую энергетическую систему, которая экологична',
				description: 'В ней используются возобновляемые источники и снижены энергопотери',
			},
			{
				id: 4,
				combinations: [[1, 2, 2], [1, 2, 3], [3, 2, 2], [3, 2, 1], [3, 1, 1]],
				header: 'Я создаю новую энергетическую систему, которая экономически выгодна',
				description: 'Для нее не нужно строить новую инфраструктуру',
			},
			{
				id: 5,
				combinations: [[1, 3, 1], [1, 3, 2], [1, 3, 3], [1, 1, 3]],
				header: 'Я создаю новую энергетическую систему, которая надежна',
				description: 'Она работает на технологиях, проверенных временем',
			},
		],
	},
	{
		link: 'career_guidance_for_young',
		value: 'Профориентация молодых людей',
		description: 'Профессиональная самореализация — значимая часть жизни человека. Общество также заинтересовано в раскрытии потенциала своих участников: больше деятельных профессионалов — динамично развивающееся общество. Для профессиональной самореализации нужно выбрать направление развития и приобрести необходимый опыт и навыки. Но в юном возрасте сложно самому выбрать свою профессиональную траекторию.',
		idea: 'Создайте проект, который поможет молодым людям определиться с профессиональной траекторией: чем, с кем и для чего заниматься?',
		appeal: 'Помоги молодым людям определиться с будущей профессией в Городе практик будущего',
		backgroundStyle: 'bg-purple-1',
		quiz: CareerGuidanceForYoung,
		image: '/books.png',
		resultImage: '/books_result.png',
		results: [
			{
				id: 1,
				combinations: [[1, 1, 1], [2, 1, 1], [3, 1, 1], [1, 1, 2], [1, 2, 1]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который поможет молодым людям найти себя и свое дело',
			},
			{
				id: 2,
				combinations: [[2, 2, 1], [2, 2, 2], [2, 2, 3], [1, 2, 2]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который поможет найти единомышленников и союзников',
			},
			{
				id: 3,
				combinations: [[1, 3, 2], [2, 3, 2], [3, 3, 2], [2, 1, 2], [2, 1, 3]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который поможет не одному человеку, а сообществу',
			},
			{
				id: 4,
				combinations: [[1, 3, 3], [2, 3, 3], [3, 3, 3], [1, 1, 3], [1, 2, 3]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который поможет подготовить достаточно специалистов для развития экономики страны',
			},
			{
				id: 5,
				combinations: [[1, 3, 1], [2, 3, 1], [3, 3, 1]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который поможет найти то, что хорошо и для человека, и для мира',
			},
			{
				id: 6,
				combinations: [[3, 1, 2], [3, 1, 3], [3, 2, 1], [3, 2, 2], [3, 2, 3]],
				header: 'Я создаю проект по профориентации ',
				description: 'Который находит и масштабирует лучшие практики',
			},
		],
	},
	{
		link: 'care_about_oldest_generation',
		value: 'Забота о старшем поколении',
		backgroundStyle: 'bg-green-1',
		description: `
			Продолжительность жизни растет, население стареет. Людям старшего возраста сложно жить полной и интересной жизнью: трудно заниматься любимым делом и встречаться с дорогими людьми, потому что становится меньше сил, тяжело передвигаться, слышать, читать и вообще усваивать новую информацию. К 2030 году больше 30% населения будет старше 65 лет. А научных открытий в области медицины, которые могли бы уменьшить возрастные изменения, к этому времени не предвидится.
		`,
		idea: 'Реализуйте проект, который будет удовлетворять особые потребности пожилых людей и обеспечивать им полноту жизни.',
		appeal: 'Позаботься о старшем поколении в Городе практик будущего',
		quiz: CareAboutOlderGeneration,
		image: '/stick.png',
		resultImage: '/stick_result.png',
		results: [
			{
				id: 1,
				combinations: [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 3, 1]],
				header: 'Я помогаю пожилым людям жить полной жизнью',
				description: 'Не подвергая себя опасности получить травму или заболеть',
			},
			{
				id: 2,
				combinations: [[3, 1, 3], [3, 2, 3], [3, 3, 3], [3, 3, 2], [3, 3, 1], [1, 3, 3]],
				header: 'Я помогаю пожилым людям жить полной жизнью',
				description: 'В окружении тех, кто их понимает и может помочь',
			},
			{
				id: 3,
				combinations: [[1, 2, 2], [2, 2, 2], [3, 2, 2], [1, 3, 2]],
				header: 'Я помогаю пожилым людям жить полной жизнью',
				description: 'И делать то, что им нравится, но было бы трудно без поддержки',
			},
			{
				id: 4,
				combinations: [[2, 2, 1], [2, 1, 1], [1, 2, 1], [2, 3, 1]],
				header: 'Я помогаю пожилым людям жить полной жизнью',
				description: 'И быть независимыми от помощи других людей',
			},
			{
				id: 5,
				combinations: [[2, 1, 3], [2, 1, 2], [2, 3, 2], [2, 3, 3]],
				header: 'Я помогаю пожилым людям жить полной жизнью',
				description: 'И получать новые впечатления от путешествий, мероприятий и общения с людьми',
			},
			{
				id: 6,
				combinations: [[3, 1, 1], [3, 2, 1], [3, 1, 2], [1, 2, 3], [2, 2, 3]],
				header: 'Я помогаю пожилым людям жить полной жизнью  ',
				description: 'И пользоваться благами современных технологий',
			},
		],
	},
	{
		link: 'available_options',
		value: 'Среда доступных возможностей',
		description: 'В городе много возможностей для действия и развития. Но не все ими пользуются. Иногда это связано с тем, что люди не знают об их существовании. Но иногда люди просто не могут ими воспользоваться: не могут обучиться новой профессии на бесплатном онлайн-курсе, потому что у них нет компьютера, не могут добраться до места, где проходит мероприятие, потому что в здании нет лифта, не могут участвовать в общественной жизни города, потому что не с кем оставить маленьких детей, и т.д. Такие препятствия к тому, чтобы воспользоваться возможностью, приводят к увеличению неравенства между жителями города.',
		idea: 'Разработайте программу развития городской среды, которая станет руководством для компаний и организаций города по повышению доступности их сервисов и пространств.',
		appeal: 'Создай свою среду доступных возможностей в Городе практик будущего',
		backgroundStyle: 'bg-pink-1',
		quiz: AvailableOptions,
		image: '/hand.png',
		resultImage: '/hand_result.png',
		results: [
			{
				id: 1,
				combinations: [[3, 1, 3], [3, 2, 3], [3, 3, 3]],
				header: 'Я создаю программу развития городской среды',
				description: 'Для комфорта и безопасности всех жителей',
			},
			{
				id: 2,
				combinations: [[1, 1, 3], [1, 2, 3], [1, 3, 3], [1, 2, 2], [1, 3, 2], [1, 1, 2]],
				header: 'Я создаю программу развития городской среды',
				description: 'Чтобы помогать тем, кто нуждается в этом больше всего',
			},
			{
				id: 3,
				combinations: [[1, 3, 1], [1, 2, 1], [2, 2, 1], [1, 1, 1], [2, 3, 1]],
				header: 'Я создаю программу развития городской среды',
				description: 'И буду реализовывать ее вместе с теми, для кого это важно',
			},
			{
				id: 4,
				combinations: [[2, 1, 1], [2, 1, 2], [2, 1, 3]],
				header: 'Я создаю программу развития городской среды',
				description: 'Чтобы предлагать людям именно ту помощь, которая им нужна',
			},
			{
				id: 5,
				combinations: [[3, 3, 1],
					[3, 3, 2],
					[3, 2, 1],
					[3, 2, 2],
					[2, 2, 2],
					[2, 2, 3],
					[2, 3, 2],
					[2, 3, 3]],
				header: 'Я создаю программу развития городской среды',
				description: 'Потому что даже небольшие изменения могут сделать жизнь многих лучше',
			},
			{
				id: 6,
				combinations: [[3, 1, 1], [3, 1, 2]],
				header: 'Я создаю программу развития городской среды',
				description: 'Чтобы у всех жителей была возможность учиться и работать',
			},
		],
	},
	{
		link: 'living_space_transformation',
		value: 'Преобразование жилых пространств',
		description: 'Несмотря на то, что человек проводит в домах большое количество времени и воспринимает их как свою связь с большим миром и часть собственного самовыражения, современные пространства не позволяют выражать себя и экспериментировать с содержимым. Это сдерживает реализацию потребностей как отдельного человека, так и сообщества в целом. Люди не могут напрямую взаимодействовать с территорией, изменять ее, вносить вклад в ее развитие, а значит не могут влиять на то, что их окружает.',
		idea: 'Разработайте проект домов, которые смогут по-новому организовать жилые пространства и быт внутри них так, чтобы человек мог самовыражаться.',
		appeal: 'Создай свой дом будущего в Городе практик будущего',
		backgroundStyle: 'bg-yellow-1',
		quiz: LivingSpaceTransformation,
		image: '/house.png',
		resultImage: '/house_result.png',
		results: [
			{
				id: 1,
				combinations: [[1, 2, 2]],
				header: 'Я строю дом, где можно быть и экстравертным интровертом, и интровертным экстравертом',
				description: 'и чувствовать себя комфортно. Гибкое пространство для социального маневра и поддержка соседей - что еще нужно?',
			},
			{
				id: 2,
				combinations: [[2, 2, 2], [2, 2, 1], [3, 2, 3]],
				header: 'Я строю дом, в котором можно не мыть посуду каждый вечер',
				description: 'А заняться чем-то более важным. Тут нет принуждения, а жить можно среди вещей, созданных с любовью.',
			},
			{
				id: 3,
				combinations: [[3, 3, 2], [3, 2, 2]],
				header: 'Я строю дом, где у меня есть больше, чем то, чем я владею',
				description: 'Воспоминания об уютных соседских ужинах, встреченных рассветах и бессонных ночах, нельзя зафиксировать как собственность, но они живут у тебя в сердце',
			},
			{
				id: 4,
				combinations: [[2, 1, 3], [2, 2, 3], [2, 3, 3]],
				header: 'Я строю дом, где один за всех и все за одного.',
				description: 'Соседское сообщество - больше не слова на бумаге, а люди, воплощающие свои идеи и искренне поддерживающие друг друга.',
			},
			{
				id: 5,
				combinations: [[1, 1, 1], [2, 1, 1], [1, 1, 2], [1, 2, 1]],
				header: 'Я строю дом, в котором не стыдно заботиться о своем комфорте, а границы - не про ограничения',
				description: 'Место, где чувствуешь себя настоящим, и никто не спрашивает, не много ли ты хочешь.',
			},
			{
				id: 6,
				combinations: [[3, 3, 3], [2, 3, 2], [2, 1, 2], [3, 3, 1], [3, 1, 3]],
				header: 'Я построил дом, где люди ближе, чем ты привык, и это классно!',
				description: 'Правило 5 “П”: Поверить, прикрыть, поддержать, помочь, положиться.',
			},
			{
				id: 7,
				combinations: [[1, 3, 2],
					[2, 3, 1],
					[3, 2, 1],
					[1, 2, 3],
					[3, 1, 2],
					[1, 3, 1],
					[3, 1, 1],
					[1, 1, 3],
					[1, 3, 3]],
				header: 'Я строю дом, где контрасты дополняют, а не разрушают',
				description: 'Здесь личное - не противоположность коллективному, а ответственность не ограничивает свободу.',
			},
		],
	},
	{
		link: 'food_production',
		value: 'Производство продуктов питания',
		description: 'С ростом населения увеличивается и потребность в продуктах питания. Сельское хозяйство меняется, чтобы обеспечить людей едой. Увеличение интенсивности производства приводит к тому, что плодородие почв снижается, растет необходимость в удобрениях и пестицидах. Промышленные плантации занимают огромные территории и разрушают естественные экосистемы. Все это уже сейчас плохо сказывается на экологии, а в дальнейшем будет влиять и на здоровье людей. Сельское хозяйство нуждается в новых практиках, которые позволят производить достаточно еды с минимальными последствиями для окружающей среды.',
		idea: 'Разработайте такой подход к производству продуктов питания для жителей города, который будет экологичным и эффективным.',
		appeal: 'Создай сельское хозяйство будущего в Городе практик будущего',
		backgroundStyle: 'bg-blue-400',
		quiz: FoodProduction,
		image: '/carrot.png',
		resultImage: '/carrot_result.png',
		results: [
			{
				id: 1,
				combinations: [[2, 2, 2], [2, 3, 2], [2, 2, 1], [2, 2, 3]],
				header: 'Я меняю сельское хозяйство так, чтобы природа стала частью моего быта',
				description: 'и больше не было жестких границ между искусственным и естественным.',
			},
			{
				id: 2,
				combinations: [[3, 3, 3], [3, 2, 3], [3, 2, 2], [3, 3, 2], [2, 3, 3]],
				header: 'Я меняю сельское хозяйство, чтобы оставить свой след в истории, а не на земле.',
				description: 'Природа имеет право самостоятельно распоряжаться своей жизнью и быть услышанной',
			},
			{
				id: 3,
				combinations: [[1, 1, 1], [1, 2, 1], [1, 1, 2], [1, 1, 3]],
				header: 'Я меняю сельское хозяйство, чтобы не полагаться на милость природы и не считать свои потребности злом',
				description: 'Пусть ограничения останутся в прошлом, мир вновь станет стабильным, а люди - счастливее',
			},
			{
				id: 4,
				combinations: [[1, 3, 1], [2, 1, 1]],
				header: 'Я меняю сельское хозяйство так, чтобы делиться, не теряя',
				description: 'Выращивать, чтобы сохранять и дарить воспоминания об особенных трапезах людям с разных уголков планеты',
			},
			{
				id: 5,
				combinations: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
				header: 'Я меняю сельское хозяйство, потому что истинная красота - в разнообразии',
				description: 'Пусть будет место и для человека, и для природы, и даже буферная зона, где мы сосуществуем',
			},
			{
				id: 8,
				combinations: [[1, 2, 2], [2, 1, 2]],
				header: 'Я меняю сельское хозяйство так, чтобы знать производителя лично',
				description: '- это же мой сосед! В моду вот-вот войдет новое слово - просьюмеризм, а продукты станут про доверие, про знакомые лица и имена и про новые вкусы.',
			},
			{
				id: 7,
				combinations: [[3, 1, 1], [3, 1, 3], [3, 3, 1], [1, 3, 3]],
				header: 'Я меняю сельское хозяйство, потому что люблю отношения на расстоянии',
				description: 'Мы с природой вроде вместе, а вроде и с запасом личного пространства',
			},
		],
	},
	{
		link: 'work_division',
		value: 'Разделение труда между людьми и роботами',
		description: 'Развитие технологий в области искусственного интеллекта и робототехники позволяют автоматизировать существенную часть работ, которые сейчас делает человек. При этом вопрос внедрения этих технологий в существующие рабочие и социальные процессы остается неразрешенным. Технологии могут как оказывать людям поддержку при решении сложных задач, так и лишить их возможности выбора и реализации творческого потенциала. То, как изменится жизнь людей, зависит от того, как компании подойдут к внедрению технологий автоматизации рабочих процессов.',
		idea: 'Разработайте программу внедрения технологий автоматизации рабочих задач на основе искусственного интеллекта и робототехники, которая станет руководством для компаний и организаций города по преобразованию рабочей жизни жителей города.',
		appeal: 'Реши, какими будут трудовые отношения с роботами в Городе Практик Будущего',
		backgroundStyle: 'bg-red-2',
		quiz: WorkDivision,
		image: '/robot.png',
		resultImage: '/robot_result.png',
		results: [
			{
				id: 1,
				combinations: [[2, 3, 2], [1, 3, 2], [2, 1, 2]],
				header: 'Я автоматизирую рабочие задачи, чтобы человек мог работать еще больше',
				description: 'Но над тем, что ему важно и интересно',
			},
			{
				id: 2,
				combinations: [[1, 1, 3], [1, 2, 3], [1, 3, 3], [2, 2, 3], [2, 3, 3], [2, 1, 3]],
				header: 'Я автоматизирую рабочие задачи, но это ничего не поменяет',
				description: 'Потому что люди продолжат работать так, как работали',
			},
			{
				id: 3,
				combinations: [[2, 2, 2], [1, 2, 2], [3, 2, 2]],
				header: 'Я автоматизирую рабочие задачи, чтобы работать вместе с роботами',
				description: 'Работать вместе у нас получится лучше чем по отдельности',
			},
			{
				id: 4,
				combinations: [[1, 1, 1], [1, 1, 2], [1, 3, 1], [1, 2, 1], [2, 3, 1], [3, 3, 1]],
				header: 'Я автоматизирую рабочие задачи, потому что роботы нужны для работы',
				description: 'А человеку нужна свобода и возможность для творчества',
			},
			{
				id: 5,
				combinations: [[3, 1, 1], [3, 2, 1], [2, 1, 1], [2, 2, 1], [3, 1, 3], [3, 2, 3], [3, 3, 3], [3, 1, 2], [3, 3, 2]],
				header: 'Я автоматизирую рабочие задачи и создаю конкуренцию между роботами и людьми',
				description: 'Теперь людям нужно знать, что они могут делать такого, что машина не может',
			},
		],
	},
];
