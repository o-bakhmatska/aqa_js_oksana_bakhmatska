//Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 100;

switch (true) {
	case averageGrade < 60:
		console.log('Незадовільно');
		break;
	case averageGrade >= 60 && averageGrade <= 70:
		console.log('Задовільно');
		break;
	case averageGrade >= 71 && averageGrade <= 80:
		console.log('Добре');
		break;
	case averageGrade >= 81 && averageGrade <= 90:
		console.log('Дуже добре');
		break;
	default:
		console.log('Відмінно');
}
