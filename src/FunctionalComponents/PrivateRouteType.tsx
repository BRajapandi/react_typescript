type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
};

const PrivateRouteType = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <h1>Return login Comp</h1>;
  }
};
export default PrivateRouteType;
