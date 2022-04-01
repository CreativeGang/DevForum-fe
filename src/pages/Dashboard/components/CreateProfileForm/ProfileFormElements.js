import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BsShieldExclamation} from 'react-icons/bs'

export const WarningIcon = styled(BsShieldExclamation)`
color: #f9bc64;
font-size: clamp(2rem, 3vw, 5rem);
margin-right: 2vw;

`

export const PropMessage = styled.p`
font-size: clamp(2rem, 3vw, 5rem);
font-weight: 500;
margin: 1rem 0;`;

export const CreateProfileLink = styled(Link)``;

