/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    emojisList: [
      {
        id: 0,
        emojiName: 'Face with stuck out tongue',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
      },
      {
        id: 1,
        emojiName: 'Face with head bandage',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
      },
      {
        id: 2,
        emojiName: 'Face with hugs',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
      },
      {
        id: 3,
        emojiName: 'Face with laughing',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
      },
      {
        id: 4,
        emojiName: 'Laughing face with hand in front of mouth',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
      },
      {
        id: 5,
        emojiName: 'Face with mask',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
      },
      {
        id: 6,
        emojiName: 'Face with silence',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
      },
      {
        id: 7,
        emojiName: 'Face with stuck out tongue and winked eye',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
      },
      {
        id: 8,
        emojiName: 'Grinning face with sweat',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
      },
      {
        id: 9,
        emojiName: 'Smiling face with heart eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
      },
      {
        id: 10,
        emojiName: 'Grinning face',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
      },
      {
        id: 11,
        emojiName: 'Smiling face with star eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
      },
    ],

    score: 0,
    topScore: 0,
    result: '',
    selectedEmoji: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const sortedEmojiList = emojisList.sort(() => Math.random() - 0.5)

    this.setState({emojisList: sortedEmojiList})
  }

  getSelectedEmojiId = uid => {
    this.setState(prevState => ({
      selectedEmoji: [...prevState.selectedEmoji, uid],
    }))

    const {selectedEmoji, score} = this.state

    const checkEmoji = selectedEmoji.includes(uid)

    if (checkEmoji === false) {
      if (score < 12) {
        this.setState({score: parseInt(score) + 1})
      }
      if (score === 12 || score === 11) {
        this.setState({result: 'won'})
      }
    } else {
      this.setState({result: 'lost'})
    }
  }

  onClickPlayAgain = score => {
    const {topScore, selectedEmoji} = this.state

    if (score > topScore) {
      this.setState({topScore: score, score: 0, result: '', selectedEmoji: []})
    } else {
      this.setState({score: 0, result: '', selectedEmoji: []})
    }
  }

  render() {
    const {emojisList, score, topScore, result} = this.state
    console.log(score, result)

    if (result.length !== 0) {
      return (
        <div className="bg">
          <div>
            <NavBar score={score} topScore={topScore} result={result} />
          </div>
          <div className="worlContainer">
            <WinOrLoseCard
              onClickPlayAgain={this.onClickPlayAgain}
              result={result}
              score={score}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="bg">
        <div>
          <NavBar score={score} topScore={topScore} result={result} />
        </div>
        <div>
          <ul className="emoji-list-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                uid={eachEmoji.id}
                emojiName={eachEmoji.emojiName}
                emojiUrl={eachEmoji.emojiUrl}
                onClickEmojiCard={this.shuffledEmojisList}
                getSelectedEmojiId={this.getSelectedEmojiId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
