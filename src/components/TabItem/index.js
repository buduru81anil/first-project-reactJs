import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabButton = () => {
    updatedActiveTabId(tabId)
  }

  const activeTabButtonClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTabButton}
        type="button"
        className={`tab-btn ${activeTabButtonClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
