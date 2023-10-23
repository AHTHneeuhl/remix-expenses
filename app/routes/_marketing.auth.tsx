import { type LinksFunction } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
import authStyles from "~/styles/auth.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

const AuthPage: React.FC = () => {
  return <AuthForm />;
};

export default AuthPage;
