import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps<{}> {
  email: string;
  password: string;
}

const LoginScreen = ({ email, password }: Props) => {
  console.log({ email, password });

  return <div>Login</div>;
};

export default LoginScreen;
