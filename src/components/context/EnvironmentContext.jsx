import React, { createContext, useState, useEffect, useContext } from 'react';

const EnvironmentContext = createContext();

export const useEnvironment = () => useContext(EnvironmentContext);

export const EnvironmentProvider = ({ children }) => {
    const [variables, setVariables] = useState(() => {
        const savedVariables = localStorage.getItem('variables');
        return savedVariables ? JSON.parse(savedVariables) : [];
    });

    useEffect(() => {
        localStorage.setItem('variables', JSON.stringify(variables));
    }, [variables]);

    const addVariable = (name, value) => {
        setVariables(prevVariables => [...prevVariables, { name, value }]);
    };

    const deleteVariable = (index) => {
        setVariables(prevVariables => prevVariables.filter((_, i) => i !== index));
    };

    return (
        <EnvironmentContext.Provider value={{ variables, addVariable, deleteVariable }}>
            {children}
        </EnvironmentContext.Provider>
    );
};
