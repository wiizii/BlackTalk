import React from 'react';
import Navigator from '~/Screens/Navigator';

import {UserContextProvider} from '~/Context/User';
interface Props {}

const App = ({}: Props) => {
  return (
    <UserContextProvider>
      <Navigator />
    </UserContextProvider>
  );
};

export default App;
