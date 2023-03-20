import React from "react";
import { Routes, Route } from "react-router-dom";

function NestedRouter({ menu }) {
  return (
    <Routes>
      {menu.map((item) => {
        return (
          <Route
            path={item.path}
            element={React.createElement(item.component)}
          />
        );
      })}
    </Routes>
  );
}

export default NestedRouter;
