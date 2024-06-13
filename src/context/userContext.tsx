import { createContext, Dispatch, ReactNode, useReducer} from "react";

export const UserContext = createContext<number|null>(null);
export const UserDispatchContext = createContext<Dispatch<UserAction>>(()=>{});

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [userId, dispatch] = useReducer(userReducer, null);

    return (
        <UserContext.Provider value={userId}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export enum UserActionType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

type UserState = number|null;

type UserAction =
    | { type: UserActionType.LOGIN; id: number }
    | { type: UserActionType.LOGOUT }

function userReducer(state:UserState, action:UserAction) {
    switch (action.type) {
        case UserActionType.LOGIN:
            state = action.id;
            return state;
        case UserActionType.LOGOUT:
            state = null;
            return state;
    }
}