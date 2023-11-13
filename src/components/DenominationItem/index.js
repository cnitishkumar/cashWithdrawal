import './index.css'

const Currency = props => {
  const {denominationsDetails, getValue} = props
  const {value} = denominationsDetails
  const onClickingBtn = () => {
    getValue(value)
  }

  return (
    <li className="li-el">
      <button type="button" className="button" onClick={onClickingBtn}>
        {value}
      </button>
    </li>
  )
}

export default Currency
