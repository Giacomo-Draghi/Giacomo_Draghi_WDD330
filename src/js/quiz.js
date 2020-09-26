const quiz = [
    ["What is the Capital of Italy?","Rome"],
    ["What is the Color of the white horse of Napoleon?","White"],
    ["Where is Paris in?","France"],
    ["Where do Ninjas come from?","Japan"]
];

function startQuiz(quiz){
    //declaring the score variable
    let score = 0;
    // Loop that shows questiond and correct answers (It is the part that shows at the top of the screen)
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        var input = response.toLowerCase();
        var out = answer.toLowerCase();
        if(input === out){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}