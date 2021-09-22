import React, { useState, createContext } from 'react';
export const AllianceContext = createContext(null);

const AllianceContextProvider = ({ children }) => {
    const [ow, setOw] = useState(false);
    const [st, setSt] = useState(false);
    const [sa, setSa] = useState(false);
    const [airlines, setAirlines] = useState([]);
    const [oneworld, setOneWorld] =  useState([]);
    const [skyteam, setSkyTeam] = useState([]);
    const  [staralliance, setStarAlliance] = useState([]);
    const [activeGrid,  setGrid] = useState([]);

    return (
        <AllianceContext.Provider
            value={{
                ow, setOw,
                st, setSt,
                sa, setSa,
                airlines, setAirlines,

                oneworld, setOneWorld,
                skyteam, setSkyTeam,
                staralliance, setStarAlliance,
                activeGrid,  setGrid
            }}
        >
            {children}
        </AllianceContext.Provider>
    )

};

export default AllianceContextProvider;
