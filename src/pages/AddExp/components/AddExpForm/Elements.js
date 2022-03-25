import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddProfileWrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  &::before,
  &::after {
    display: table;
    content: ' ';
  }
  @media only screen and (min-width: 450px) {
    width: 700px;
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 750px;
  }

  @media only screen and (min-width: 788px) {
    width: 740px;
    max-width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
  }

  @media only screen and (min-width: 1040px) {
    width: 992px;
    max-width: 100%;
  }

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }

  @media only screen and (min-width: 1250px) {
    width: 1202px;
    max-width: 100%;
  }
`;

export const AddProfileContainer = styled.div`
  @media only screen and (min-width: 1040px) {
    padding: 20px 30px 30px;
    margin-top: 44px;
  }
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  padding: 20px 30px 30px;
  margin-top: 44px;
`;
export const AddProfileHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #e9ecee;
  align-items: center;
  display: flex;
`;
export const FormTitle = styled.div`
  font-weight: 600;
`;

export const TitleImg = styled.img`
  width: 28px;
  margin-right: 15px;
  max-width: 100%;
  height: auto;
  image-rendering: auto;
  vertical-align: middle;
  border: 0;
`;

export const FormGuidlines = styled.span`
  margin-left: auto;
  color: #8e9091;
`;

export const ProfileForm = styled.form``;

export const SingleRowSection = styled.div`
  margin-bottom: 24px;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 7px;
`;

export const SingleRowInput = styled.input`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  outline: none;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #f8f9fa;
  background-image: none;
  border: solid 1px #e9ecee;
  box-sizing: border-box;
  color: #8e9091;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  @media only screen and (min-width: 1040px) {
    height: 48px;
    padding: 8px 20px;
    font-size: 16px;
  }
`;

export const DateInput = styled.input.attrs({
  type: 'date',
})`
  outline: none;
`;
export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})``;

export const PropMsg = styled.small`
  color:#f1bd72;
  padding: 10px 0;
  margin-top: 5px;
  display: block;
`;

export const FormTextArea = styled.textarea`
  width: content-fit;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  @media only screen and(min-width: 1040px) {
    padding: 14px 20px;
    font-size: 16px;
  }
  height: 190px;
  font-size: 16px;
  border: solid 1px #e9ecee;
  border-radius: 0;
  background-color: #f8f9fa;
  color: #8e9091;
  resize: none;
  box-shadow: none;
  display: block;
  width: 100%;
  line-height: 1.42857143;
  outline: none;
`;

export const OptionalBar = styled.div`
  margin-bottom: 14px;
  font-family: 'Nunito Sans', sans-serif;
`;

export const LinkTab = styled.button.attrs({
  type: 'button',
})`
  width: auto;
  font-family: 'Nunito Sans', sans-serif;
  padding: 10px 10px;
  outline: none;
  border: none;
`;

export const SubmitionSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Submit Profile',
})`
  background-color: #e9ecee;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  height: 38px;
  font-size: 16px;
  width: 140px;
  background-color: #f9bc64;
  display: inline-flex;
  justify-content: center;
  border-radius: 0;
  padding: 8px 15px;
  font-weight: 300;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  border: 1px solid transparent;
  text-decoration: none;
  margin-right: 15px;
  @media only screen and (min-width: 1040px) {
    width: 140px;
  }
  @media only screen and (max-width: 450px) {
    height: 38px;
  } ;
`;

export const GoBackLink = styled(Link)`
  color: #394047;
  font-family: 'Nunito Sans', sans-serif;
  text-decoration: none;
  font-size: 17px;
  height: 38px;
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 0;
  background-color: #e9ecee;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  text-decoration: none;
  margin-right: 15px;
  display: inline-flex;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  @media only screen and (max-width: 450px) {
    height: 38px;
  }
  @media only screen and (min-width: 1040px) {
    width: 140px;
    margin-left: auto;
  } ;
`;

export const SignUpFrom = styled.form`
  position: relative;
  max-width: 772px;
  margin: 0 auto;
  background-color: #ffffff;
  border: solid 1px #f3f4f5;
  border-top: solid 2px #f9bc64;
  clear: both;
  @media only screen and (min-width: 1040px) {
    padding: 30px 44px 46px;
  }
  @media only screen and (max-width: 1039px) {
    padding: 30px 20px 46px;
  } ;
`;

export const SignUpSection = styled.div`
  padding-bottom: 15px;
  margin-bottom: 32px;
  border-bottom: solid 2px #e9ecee;
`;

export const SignUpLabel = styled.label`
  color: #8e9091;
  font-weight: 300;
  margin: 0;
  display: inline-block;
  max-width: 100%;
  font-family: 'Nunito Sans', sans-serif;
`;

export const SignUpInput = styled.input`
  &::placeholder {
    font-weight: 300;
    color:#f1bd72;
    font-size: 0.8rem;
  }
  display: block;
  width: 100%;
  height: 34px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0;
  border: none;
  box-shadow: none;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  outline: none;
`;

export const SingUpTwoColumnSection = styled.div`
  &::before {
    display: table;
    content: ' ';
  }
  display: flex;
  flex-wrap: wrap;
  &::after {
    clear: both;
  }
  @media only screen and (max-width: 1039px) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  } ;
`;
export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordStrongHint = styled.span`
  position: absolute;
  height: 22px;
  padding: 0 8px;
  margin-top: -11px;
  top: 50%;
  right: 0;
  border-radius: 3px;
  background-color: #3cb878;
  color: #ffffff;
  align-items: center;
  display: flex;
  font-weight: 300;
`;

export const CheckBoxWrapper = styled.div`
  margin-bottom: 32px;
`;

export const CheckBoxContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const SwitchableCheckBoxContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  @media only screen and (max-width: 1039px) {
    display: none !important;
  } ;
`;

export const CheckBoxLabel = styled.label`
  border-radius: 3px;
  position: absolute;
  left: 0;
  display: inline-block;
  vertical-align: -4px;
  background-color: #e9ecee;
  cursor: pointer;
  width: 18px;
  height: 18px;
  font-weight: 400;
  margin: 0;
  max-width: 100%;
`;

export const CheckBoxInput = styled.input`
  position: absolute;
  margin: 0;
  opacity: 0;
  z-index: 1;
  border-radius: 3px;
  width: 18px;
  height: 18px;
  &:checked + ${CheckBoxLabel} {
    background-color: #4fbe79;
    &::after {
      display: block;
      border-radius: 50%;
    }
  }
`;

export const CheckText = styled.span`
  margin-left: 2rem;
  color: #8e9091;
  font-weight: 300;
`;

export const SignUpButton = styled.input.attrs({
  type: 'submit',
  value: 'Create a new Account',
})`
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  height: 52px;
  font-size: 17px;
  width: 100%;
  background-color: #f9bc64;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  padding: 8px 15px;
  font-weight: 300;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  border: 1px solid transparent;
  text-decoration: none;
  @media only screen and (max-width: 450px) {
    height: 38px;
  } ;
`;
