class FamilyFeudGame {
    constructor() {
        this.players = [];
        this.currentPlayer;
        this.questionCounter = 0;
        this.correctAnswersCounter = 0;
        this.incorrectAnswers = 0;
        this.playerPoints = 0;
        //this.currentQuestion = this.questions[questionCounter];
        this.questions = [{
                question: "Name a bad job for someone who's accident-prone.",
                answers: [{
                        answer: "Driver",
                        percentage: 33
                    },
                    {
                        answer: "Construction Worker",
                        percentage: 20
                    },
                    {
                        answer: "Police Officer",
                        percentage: 11
                    },
                    {
                        answer: "Food Service",
                        percentage: 10
                    },
                    {
                        answer: "Glass Maker",
                        percentage: 9
                    },
                    {
                        answer: "Window Washer",
                        percentage: 7
                    },
                    {
                        answer: "Surgeon",
                        percentage: 6
                    }
                ]
            },
            {
                question: "Name something that you hang up.",
                answers: [{
                        answer: "The Phone",
                        percentage: 54
                    },
                    {
                        answer: "Clothes",
                        percentage: 38
                    },
                    {
                        answer: "Towel",
                        percentage: 4
                    },
                    {
                        answer: "Picture Frame",
                        percentage: 3
                    }
                ]
            },
            {
                question: "Name something people do just once a week.",
                answers:[{answer: "Church",
                          percentage: 35
                        },
                        {
                           answer: "Groceries",
                           percentage: 24
                        },
                        {
                            answer: "Laundry",
                            percentage: 12
                        },
                        {
                            answer: "Clean House",
                            percentage:6
                        },
                        {
                            answer: "Sleep In",
                            percentage: 6
                        },
                        {
                            answer: "Eat Out",
                            percentage: 4
                        }]
            },
            {
                question: "Name something you might eat with a hamburger.",
                asnwers:[{
                            answer: "Fries",
                            percentage: 60
                        },
                        {
                            answer: "Soup",
                            percentage: 12
                        },
                        {
                            answer: "Salad",
                            percentage: 9
                        },
                        {
                            answer: "Onion Rings",
                            percentage: 5
                        },
                        {
                            answer: "Tater Tots",
                            percentage: 5
                        },
                        {
                            answer: "Pickles",
                            percentage: 3
                        }]
            },
            {
                question: "Name a famous wizard.",
                answers:[{
                            answer: "Harry Potter",
                            percentage: 37
                        },
                        {
                            answer: "Merlin",
                            percentage: 26
                        },
                        {
                            answer: "Gandalf",
                            percentage: 11
                        },
                        {
                            answer: "Dr. Strange",
                            percentage: 9
                        },
                        {
                            answer: "The Wizard of Oz",
                            percentage: 8
                        },
                        {
                            answer: "Voldemort",
                            percentage: 3
                        },
                        {
                            answer: "Newt Scamander",
                            percentage: 2
                        }]
            },
            {
                question: "Name a language that makes anything sound romantic.",
                answers:[{
                            answer: "French",
                            percentage: 40
                        },
                        {
                            answer: "Italian",
                            percentage: 21
                        },
                        {
                            answer: "Spanish",
                            percentage: 11
                        },
                        {
                            answer: "British",
                            percentage: 10
                        },
                        {
                            answer: "Portuguese",
                            percentage: 9
                        },
                        {
                            answer: "German",
                            percentage: 3
                        },
                        {
                            answer: "Japanese",
                            percentage: 3
                        }]
            },
            {
                question: "Name a place you might pick up a date who isn't interested in a serious relationship.",
                answers: [{
                            answer: "Bar",
                            percentage: 31
                        },
                        {
                            answer: "Club",
                            percentage: 19
                        },
                        {
                            answer: "Tinder",
                            percentage: 18
                        },
                        {
                            answer: "College",
                            percentage: 13
                        },
                        {
                            answer: "Party",
                            percentage: 10
                        },
                        {
                            answer: "The Mall",
                            percentage: 2
                        }]
            },
            {
                question: "Name a word that people yell at their dogs.",
                answers:[{
                            answer: "No",
                            percentage: 27
                        },
                        {
                            answer: "Sit",
                            percentage: 23
                        },
                        {
                            answer: "Stop",
                            percentage: 14
                        },
                        {
                            answer: "Down",
                            percentage: 7
                        },
                        {
                            answer: "Fetch",
                            percentage: 6
                        },
                        {
                            answer: "Bad",
                            percentage: 5
                        }]
            }
        ]

    }


    addPlayer() {
        this.players.push(new Player);
    }

    checkIfRight(submittedAnswer) {
        let answersArray = this.questions[this.questionCounter].answers
        for (let i =0; i < answersArray.length; i++){
            let answer = answersArray[i];
            if (answer.answer.toLowerCase() === submittedAnswer.toLowerCase()) {
                debugger
                document.querySelector(`.answer-${i}`).style.backgroundColor = "transparent";
                //document.querySelector(`.percentage-${i}`).innerHTML = this.playerPoints.value
                this.correctAnswersCounter++;
                this.playerPoints += answer.percentage
                document.querySelector("#points").innerHTML = this.playerPoints
                document.getElementsByTagName('input').innerHTML = "";
                return;
            }
        } 
        // this.showBigRedX();
        this.incorrectAnswers++;
    }


    // showBigRedX() {
    //     var bigRedX = document.querySelector(".big-red-x");
    //     if (bigRedX.style.display === "none") {
    //         bigRedX.style.display = "block";
    //     } else {
    //         bigRedX.style.display = "none";
    //     }
    // }

    nextQuestion() {
        if (this.correctAnswersCounter === this.questions[this.questionCounter].answers.length || this.incorrectAnswers === 3){
            this.questionCounter++;
            this.correctAnswersCounter = 0;
      
            renderQuestion(this.questions[this.questionCounter]);
        } 
    }

    checkGameOver() {
        if (this.questionsCounter === this.questions.length) {
            return true;
        } else if (this.questionsCounter < this.questions.length) {
            return false;
            document.querySelector('.')
        }
    }
}






class Player {
    constructor() {
        this.wrongAnswers = 0;
        this.rightAnswers = 0;
    }

    checkGameOver() {
        if (this.questionsAnswered === questions.length) {
            return true;
        } else if (this.questionsAnswered < questions.length) {
            return false;
        }
    }
}