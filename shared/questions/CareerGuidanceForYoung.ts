/* eslint-disable max-len */
import { Question } from '../types/Question';

export const CareerGuidanceForYoung: Question[] = [
	{
		id: 1,
		title: 'В каком виде будет реализован проект?',
		answers: [{ 'id': 1, 'title': 'Программный продукт', 'description': 'В городе развернется компьютерная программа, которая сможет проанализировать склонности, таланты человека на основе открытых данных и анкетирования и предложит подходящую профессию.', 'titleOnSelect': 'Вы уверены, что программа поможет в выборе будущей профессии?', 'objection': 'Программа не учитывает желания и волю человека. Даже в отсутствие склонностей и таланта человек может с помощью труда и упорства достичь вершин в профессии.' }, { 'id': 2, 'title': 'Сообщество по интересам', 'description': 'Весь город будет площадкой для профориентации. Школьники смогут легко входить в сообщества представителей разных профессий, разного возраста, с которыми можно будет реализовать совместные проекты и через практику определиться с профессией.', 'titleOnSelect': 'Вы уверены, что сообщество поможет в выборе будущей профессии?', 'objection': 'Человек, который идет в сообщество за профориентацией, не знает про свои склонности и перспективы. Он будет выяснять это методом проб и ошибок. Могут пройти годы, а человек так и не найдет себя.' }, { 'id': 3, 'title': 'Набор учебных материалов', 'description': 'Профессионалы из разных областей разработают наборы учебных материалов для школьников. Истории о тонкостях профессии, советы и секреты помогут молодежи выбрать свой путь.', 'titleOnSelect': 'Вы уверены, что учебные материалы помогут в выборе будущей профессии?', 'objection': 'Люди, которые уже стали профессионалами, делятся своим опытом, то есть тем, как можно было развиваться в профессии в прошлом. Такие сведения могут быть неактуальны в настоящем и будущем.' }],
	},
	{
		id: 2,
		title: 'Ответ на какой главный вопрос узнает человек в результате профориентации?',
		answers: [{ 'id': 1, 'title': 'Что у тебя получается лучше всего?', 'description': 'Человек поймет, какие у него есть склонности, и как их развивать, какие профессии ему подойдут.', 'titleOnSelect': 'Вы уверены, что ответ на этот вопрос поможет в выборе будущей профессии?', 'objection': 'Если человек будет делать свой профессиональный выбор, основываясь на ответе на такой вопрос, то может оказаться так, что он будет заниматься тем, что никому не нужно и не важно.' }, { 'id': 2, 'title': 'Кто твои единомышленники?', 'description': 'Человек узнает про людей со схожими интересами и ценностями, и сможет объединяться с ними в группы.', 'titleOnSelect': 'Вы уверены, что ответ на этот вопрос поможет в выборе будущей профессии?', 'objection': 'Ответ на вопрос о том, кто думает так же, как ты, не означает, что вы сможете работать вместе и достигать результатов.' }, { 'id': 3, 'title': 'Каким может быть твой вклад в развитие общества?', 'description': 'Человек узнает, как именно он может помочь в развитии общества, какие его умения и способности помогут людям.', 'titleOnSelect': 'Вы уверены, что ответ на этот вопрос поможет в выборе будущей профессии?', 'objection': 'Если человек будет делать свой профессиональный выбор, основываясь на ответе на такой вопрос, то может случиться так, что он будет делать то, что ему неинтересно, с людьми, которые ему не близки.' }],
	},
	{
		id: 3,
		title: 'На кого в первую очередь направлен проект, и какая от него польза?\n',
		answers: [{ 'id': 1, 'title': 'На молодого человека', 'description': 'Самоопределение и поиск профессионального пути требует от молодого человека времени и усилий. Найти себя и свое дело редко получается с первого раза. Из-за частых неудач могут опускаться руки. Если будут программы поддержки, то найти свой путь смогут больше людей с меньшими усилиями.', 'titleOnSelect': 'Вы уверены, что проект принесет пользу молодым людям?', 'objection': 'Человек за свою профессиональную жизнь может много раз сменить направление деятельности. Если проект направлен на отдельных людей, то он будет решать сиюминутные задачи и не будет формировать программу развития города и сообщества, которые смогут ее реализовать.' }, { 'id': 2, 'title': 'На местное сообщество', 'description': 'Большинство инициатив по изменению жизни к лучшему появляется и реализуется в локальных сообществах. Сообщества выиграют от эффективной программы профориентации, потому что, чем раньше человек найдет себя, тем раньше он станет способным к реальным делам.', 'titleOnSelect': 'Вы уверены, что проект принесет пользу сообществам?', 'objection': 'За редким исключением сообщество может обеспечить молодым людям и профориентацию, и образование, и трудоустройство. Для того, чтобы проект был успешен, сообщество должно взаимодействовать с другими сообществами, государством и отдельными людьми.' }, { 'id': 3, 'title': 'На государство', 'description': 'Для развития государства важно, чтобы в значимых для экономики отраслях работало достаточно квалифицированных специалистов. С помощью программы профориентации можно спланировать подготовку специалистов и решить проблему кадрового дефицита.', 'titleOnSelect': 'Вы уверены, что проект принесет пользу государству?', 'objection': 'Государство планирует и действует на больших масштабах и не может учитывать реального положения дел в регионах. Поэтому программа может показывать разную эффективность для разных регионов.' }],
	},
];
