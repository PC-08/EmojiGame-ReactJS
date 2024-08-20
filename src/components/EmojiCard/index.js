// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {uid, emojiName, emojiUrl, onClickEmojiCard, getSelectedEmojiId} = props

  const onEmojiCardClick = () => {
    onClickEmojiCard()
    getSelectedEmojiId(uid)
  }

  return (
    <li>
      <button
        onClick={onEmojiCardClick}
        className="emoji-card-btn"
        type="button"
      >
        <img className="cardimg" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
