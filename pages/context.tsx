import React, { Children, useContext, useState } from "react";

interface AppContext {
  adminCount: string;
  setAdminCount: any;
  adminCreated: [];
  setAdminCreated: any;
  searchName: string;
  setSearchName: any;
  notifyNumber: any;
  setNotifyNumber: any;
  applicantSum: [];
  setApplicantSum: any;
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

const AppProvider = ({ children }) => {
  const [adminCount, setAdminCount] = useState(null);
  const [adminCreated, setAdminCreated] = useState(null);
  const [jobsCreated, setJobsCreated] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [notifyNumber, setNotifyNumber] = useState(0);
  const [applicantSum, setApplicantSum] = useState(null);
  return (
    <AppContext.Provider
      value={{
        adminCount,
        setAdminCount,
        adminCreated,
        setAdminCreated,
        searchName,
        setSearchName,
        notifyNumber,
        setNotifyNumber,
        applicantSum,
        setApplicantSum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
