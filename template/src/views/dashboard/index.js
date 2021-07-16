import React from 'react';

import {Block, Button, RegularText} from '@components';

const DashboardScreen = () => {
  return (
    <Block safeArea={true}>
      <RegularText>Welcome to my template ^-^, Moahhhhhhhh !</RegularText>
      <Button label="Click Me" onPress={() => console.log('clicked')} />
    </Block>
  );
};

export default DashboardScreen;
