import React from "react";
import { Route, Routes } from "react-router";
import Todo from "../Todo/Todo";


function AppRoutes() { 

    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<div>MAIN</div>} />
                <Route path="todo" element={<Todo />} />
            </Route>
        </Routes>
    )
}
 

export default AppRoutes;