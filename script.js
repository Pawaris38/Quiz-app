const quizData=[
    {
        question:'คุณอายุเท่าไหร่',
        a : "10",
        b : "17",
        c : "26",
        d : "110",
        correct: "c"
    },
    {
        question:"ภาษาโปรแกรมมิ่งที่คนใช้มากที่สุดคือภาษาอะไร",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question:"ใครคือนายกรัฐมนตรีในประเทศไทย",
        a: "ตูน บอดี้แสลม",
        b: "ประยุทธ จันทรโอชา",
        c: "ปั๊ป โปเตโต้",
        d: "ตู่ ภพทร",
        correct: "b"
    },
    {
        question:"อะไรคือความหมายของ HTML",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motoboats Lamboginis",
        correct: "a"
    },
    {
        question:"JavaScript ปล่อยให้ใช้ในปีอะไร",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() { 
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

   
}

function getSelected(){  
    let answer = undefined;
    
    answerEls.forEach((answerEl)=>{
      if(answerEl.checked) {
          answer = answerEl.id;
      }
    });

   return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});