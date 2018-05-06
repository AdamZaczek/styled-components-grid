import React from 'react';
import { Flex, Box } from 'grid-styled'
import { HeaderWrapper } from './HeaderWrapper'
import A from './A';
import Img from './Img';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Flex
        alignItems='flex-end'
        mt={40}
      >
        <Box width={3/8}>
          Never gonna give you up
        </Box>
        <Box width={2/8}>
          <HeaderLink to="/">
            Link to some user Profile or something
          </HeaderLink>
        </Box>
        <Box width={3/8}>
          <A href="https://twitter.com/mxstbr">
            <Img src={Banner} alt="react-boilerplate - Logo" />
          </A>
        </Box>
      </Flex>
    );
  }
}

export default Header;
