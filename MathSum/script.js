function generateProblem(problemElement) {
    var num1, num2, operator;

    // Generate the operator
    operator = Math.random() < 0.5 ? '+' : '-';

    // Generate the numbers based on the operator
    if (operator === '+') {
        num1 = Math.floor(Math.random() * 901) + 100;
        num2 = Math.floor(Math.random() * 901) + 100;
    } else {
        num1 = Math.floor(Math.random() * 901) + 100;
        num2 = Math.floor(Math.random() * (num1 - 100)) + 100; // Ensure num2 is less than num1
        if (num1 % 100 < num2 % 100) {
            num1 -= num1 % 100; // Adjust num1 to avoid carry forward
        }
    }

    problemElement.getElementsByClassName('num1')[0].textContent = num1;
    problemElement.getElementsByClassName('num2')[0].textContent = num2;
    problemElement.getElementsByClassName('operator')[0].textContent = operator;
    problemElement.getElementsByClassName('answer')[0].value = '';
    problemElement.getElementsByClassName('result')[0].textContent = '';
    problemElement.getElementsByClassName('result')[0].className = 'result';
}



function checkAnswers() {
    var problems = document.getElementsByClassName('problem');

    for (var i = 0; i < problems.length; i++) {
        var problem = problems[i];
        var num1 = parseInt(problem.getElementsByClassName('num1')[0].textContent);
        var num2 = parseInt(problem.getElementsByClassName('num2')[0].textContent);
        var operator = problem.getElementsByClassName('operator')[0].textContent;
        var answer = parseInt(problem.getElementsByClassName('answer')[0].value);
        var correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
        var result = problem.getElementsByClassName('result')[0];

        if (answer === correctAnswer) {
            result.textContent = 'Correct!';
            result.className = 'result correct';
        } else {
            result.textContent = 'Incorrect!';
            result.className = 'result incorrect';
        }
    }
}

document.getElementById('checkButton').addEventListener('click', checkAnswers);

var problems = document.getElementsByClassName('problem');
for (var i = 0; i < problems.length; i++) {
    generateProblem(problems[i]);
}
