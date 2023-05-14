import './index.css'

const ThumbnailItem = props => {
  const {each, onChangeItem, forStyle} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText, id} = each
  const onChange = () => {
    onChangeItem(imageUrl, imageAltText, id)
  }
  const forStyleOpac = forStyle ? ' ' : 'for-opac'
  return (
    <li className="li">
      <button className={`button ${forStyleOpac}`} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={onChange} />
      </button>
    </li>
  )
}
export default ThumbnailItem
