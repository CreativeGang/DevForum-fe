import React from 'react';

import {
  Header,
  Wrapper,
  HeaderName,
  ArrowIcon,
} from './DropdownHeaderElement';

export default function DropdownHeader({ headerName }) {
  return (
    <Wrapper>
      <Header name={headerName}>
        <HeaderName>{headerName}</HeaderName>
        <ArrowIcon />
      </Header>
    </Wrapper>
  );
}
