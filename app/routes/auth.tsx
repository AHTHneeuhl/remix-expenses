import { type LinksFunction } from "@remix-run/node";
import authStyles from "~/styles/auth.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

const AuthPage: React.FC = () => {
  return <h1>Auth Page</h1>;
};

export default AuthPage;
