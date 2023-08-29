import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import LoginNavigator from '../navigators/LoginNavigator';
import DrawerNavigator from '../navigators/DrawerNavigator';
import {useSession} from '../utils/SessionProvider';
import AdminNavigator from '../navigators/AdminNavigator';

function NavigatorRouter(): JSX.Element {
  const {isAdmin, hasAccess} = useSession();
  useEffect(() => {
    console.log('is admin? ', isAdmin);
    console.log('has access? ', hasAccess);
  }, []);
  return (
    <>
      {!hasAccess ? (
        <LoginNavigator />
      ) : isAdmin ? (
        <AdminNavigator />
      ) : (
        <DrawerNavigator />
      )}
    </>
  );
}

export default NavigatorRouter;
