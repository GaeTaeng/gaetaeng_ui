import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Todo from "../Todo/Todo";
import Profile from "../Profile/Profile";


function AppRoutes() { 

    return (
        <Routes>
            <Route path="/">
                <Route path="profile" element={<Profile />} />
                <Route path="todo" element={<Todo />} />
                <Route
                    path="*"
                    element={<Navigate to="/todo" replace />}
                />
            </Route>
        </Routes>
    )
}
 

export default AppRoutes;