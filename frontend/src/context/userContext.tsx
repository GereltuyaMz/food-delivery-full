"use client";

import axios from "axios";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";

type User = {
  email: string;
};

type UserContextProps = {
  userInfo: User;
  setUserInfo: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextProps>({
  userInfo: { email: "" },
  setUserInfo: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<User>({ email: "" });

  const getCurrentUser = async () => {
    const userEmail = localStorage.getItem("email");
    try {
      const response = await axios.post(
        "http://localhost:3000/user/currentUser",
        {
          email: userEmail,
        }
      );
      console.log("response", response.data);
      setUserInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
