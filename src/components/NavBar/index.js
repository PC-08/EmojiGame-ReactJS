// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props

  if (result.length > 0) {
    return (
      <nav className="nav">
        <div className="nav-logo-container">
          <img
            className="nav-logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          />
          <h1 className="nav-head">Emoji Game</h1>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav">
      <div className="nav-logo-container">
        <img
          className="nav-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        />
        <h1 className="nav-head">Emoji Game</h1>
      </div>

      <div className="nav-score-container">
        <p className="nav-score">Score: {score}</p>
        <p className="nav-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
