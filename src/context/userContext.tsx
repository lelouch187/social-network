import React, {useState} from 'react';

export interface ContextProps {
    id: number | null;
    saveId: (id: number) => void;
    deleteId: () => void;
}

const defaultValue: ContextProps = {
    id: null,
    saveId: () => {
    },
    deleteId: () => {
    },
}

const MyContext: React.Context<ContextProps> = React.createContext(defaultValue);

const UserContext = ({children}: { children: React.ReactNode }) => {
    const [id, setId] = useState<number | null>(null);

    const saveId = (id: number) => {
        setId(id);
    }

    const deleteId = () => {
        setId(null);
    }

    return (
        <MyContext.Provider value={{id, saveId, deleteId}}>
            {children}
        </MyContext.Provider>
    );
};

export default UserContext;