import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 8px;
  width: 85%;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.textColor ? '#101640' : '#fff')};
  font-weight: 400;
  margin: 0px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const ScoreParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.textColor ? '#101640' : '#fff')};
  font-weight: 400;
  margin: 0px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  background-color: #fff;
  color: #101640;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    padding: 14px;
    margin: 5px;
  }
`
