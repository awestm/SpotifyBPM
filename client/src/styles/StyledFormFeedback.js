import styled from 'styled-components/macro';

const StyledFormFeedback = styled.div`
.info-msg,
.success-msg,
.warning-msg,
.error-msg {
  margin: auto;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  text-align: center;
  width: 50%;
}
.info-msg {
  color: #059;
  background-color: #BEF;
}
.success-msg {
  color: #270;
  background-color: #DFF2BF;
}
.warning-msg {
  color: #9F6000;
  background-color: #FEEFB3;
}
.error-msg {
  color: #D8000C;
  background-color: #FFBABA;
}
`;
export default StyledFormFeedback;