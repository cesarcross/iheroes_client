import React from "react";

import { Form } from "./LoginPage.style";

const Login = () => (
  <Form>
    <input name="name" type="text" placeholder="Nome" />
    <input email="email" type="text" placeholder="Email" />
    <input type="submit" value="Entrar" />
  </Form>
);

export default Login;
