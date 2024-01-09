import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';
import { User } from '../models/User';

interface UserContextType {
    registeringUser: User;
    setRegisteringUser: Dispatch<SetStateAction<User>> | ((newState: User) => void);
}

const UserContext = createContext<UserContextType>({
    registeringUser: new User(),
    setRegisteringUser: () => {}
});

interface RegisteringUserInterface {
    children: ReactNode;
}

export default function RegisteringUserContext({ children }: RegisteringUserInterface) {
    const [registeringUser, setRegisteringUser] = useState(new User());

    return (
        <UserContext.Provider value={{ registeringUser, setRegisteringUser }}>
            {children}
        </UserContext.Provider>
    );
}

