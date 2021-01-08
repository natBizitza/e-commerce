import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer,BackgroundImageContainer,ContentContainer,ContentTitle,ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

//by wrapping the component in withRouter we have an access to history
export default withRouter(MenuItem);