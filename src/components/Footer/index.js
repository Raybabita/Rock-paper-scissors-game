import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'

import {
  PopupContainer,
  RuleImage,
  MainContainer,
  PopupButton,
  CloseButton,
} from './styledComponents'

const Footer = () => (
  <MainContainer>
    <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
      {close => (
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <AiOutlineClose />
          </CloseButton>
          <RuleImage
            alt="rules"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          />
        </PopupContainer>
      )}
    </Popup>
  </MainContainer>
)
export default Footer
