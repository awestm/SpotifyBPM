import styled from 'styled-components/macro';

const StyledBPMForm = styled.form`


.section__inner {
width: 100%;
max-width: var(--site-max-width);
margin: 0 auto;
position: relative;
padding: var(--spacing-lg) var(--spacing-md);

@media (min-width: 768px) {
  padding: var(--spacing-xl) var(--spacing-xxl);
}
}
  
body {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
}


.form {
  box-sizing: border-box;
  margin: auto;
  margin-top: 80px;
  width: 50%;
  height: 400px;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  justify-content: center;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  justify-content: center;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #404041;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #989191FF;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #989191FF;
}

.input:focus ~ .placeholder {
  color: #AD2542FF;
}

.submit {
  font-size: 18px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
}


 
`;

export default StyledBPMForm;