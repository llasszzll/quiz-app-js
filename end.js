const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

console.log(highScores);

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }
    // Get the score, Sort it, Narrow down to top 5
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))

    window.location.assign('/')
}