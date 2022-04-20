const quizData = [   // Här är alla frågorna 
    {
       Fråga: " Fråga 1 Vilken teori är einstein känd för?",
a: " Stringteorin",
b: " Hawkingradiation",
c: "Kvantfysik",
d: "Relativitetsteorin",
        KorrektSvar: "d",
    },
    {
        Fråga: " Fråga 2 Vad upptäckte Marie Curie",
        a:" Radium",
        b:" Uran",
        c:" Kvicksilver",
        d:" Titanium",
        KorrektSvar: "a",
    },
    {
        Fråga: " Fråga 3 Vad sägs ha fallit på Isaac Newtons huvud?",
        a: "Löv",
        b: "Sten",
        c: "Äpple",
        d: "Päron",
        KorrektSvar: "c",
    },
    {
        Fråga: " Fråga 4 Vem stal Nicolas Tesla ide om parallellkoppling?",
        a: "Tomas Eddison",
        b: "Elon Musk",
        c: "Marie Curie",
        d: "Jefree Bezos",
        KorrektSvar: "a",
    },

    {
        Fråga: "Fråga 5 Vem förknippas med formlen E=mc^2",
        a: "Einstein",
        b: "Newton",
        c: "Edison",
        d: "Curie",
        KorrektSvar: "a",
    },


];   

const quiz= document.getElementById('quiz')

const answerEls = document.querySelectorAll('.Svar')

const FrågaEl = document.getElementById('Fråga')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const SvaraBtn = document.getElementById('Svara')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    FrågaEl.innerText = currentQuizData.Fråga
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


SvaraBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].KorrektSvar) {   // Detta gör så att  om man får ett korrekt svar så kommer man få ett poäng
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Du fick  ${score}/${quizData.length} rätt. Bra jobbat! </h2>

           <button onclick="location.reload()">Börja om</button>
           `
       }
    }
})