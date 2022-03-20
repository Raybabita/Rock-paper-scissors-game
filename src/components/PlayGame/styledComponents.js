import styled from 'styled-components'

export const PlayGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  flex-wrap: wrap;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`
export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  margin: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`

export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

export const GameResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-direction: column;
`

export const PlayButton = styled.button`
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 30px;
  background-color: #fff;
  color: #101640;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
`

export const ResultTextParagraph = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.playerText ? '#fff' : ' #101640')};
  font-size: 16px;
  font-weight: bold;
`
