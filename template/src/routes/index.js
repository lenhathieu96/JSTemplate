import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from '@views/dashboard';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
