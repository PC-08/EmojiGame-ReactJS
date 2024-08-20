// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, score, onClickPlayAgain} = props

  const img =
    result === 'won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const head = result === 'won' ? 'You Won' : 'You Lose'

  const palyAgains = () => {
    onClickPlayAgain(score)
  }

  return (
    <div className="wl-card">
      <div className="wl-box">
        <h1 className="wl-head">{head}</h1>
        <p className="wl-res">{result === 'won' ? 'Best Score' : 'Score'}</p>
        <p className="wl-score">{score}/12</p>
        <button type="button" onClick={palyAgains} className="wl-btn">
          Play Again
        </button>
      </div>

      <img alt="win or lose" className="wl-img" src={img} />
    </div>
  )
}

export default WinOrLoseCard
