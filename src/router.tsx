import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp";
import AddProductForm from "./components/AddProduct/AddProductForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route
          path="add-product"
          element={
            <AddProductForm
              prod_name={""}
              qty={0}
              price={0}
              remark={""}
              description={""}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
