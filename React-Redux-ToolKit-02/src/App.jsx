import React from 'react';
import { CakeView } from './features/cake/cakeView';
import { IcecreamView } from './features/icecream/icecreamView';
import { UserView } from './features/user/userView';

export default function App () {
    return (
        <>
            <CakeView />
            <IcecreamView />
            <UserView />
        </>
    );
}