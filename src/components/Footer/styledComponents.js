import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  padding: 10px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`
export const RuleImage = styled.img`
  height: 400px;
  width: 500px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 250px;
  }
`
export const PopupButton = styled.button`
  border-radius: 8px;
  font-size: 14px;
  width: 90px;
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
  :hover {
    background-color: #b7bdb9;
    border-radius: 8px;
  }
  height: 30px;
  width: 30px;
  outline: none;
`
