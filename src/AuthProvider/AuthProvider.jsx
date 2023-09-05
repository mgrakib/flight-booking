/** @format */

"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [navDrowerIsOpen, setNavDrowerIsOpen] = useState(false);
	const authInfo = { navDrowerIsOpen, setNavDrowerIsOpen };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
