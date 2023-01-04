import AuthGuard from '../AuthGuard';

function ProtectedRoute({component, isAuthorized}) {
  return (
        <AuthGuard authenticated={isAuthorized}>
            {component}
        </AuthGuard>
  );
}

export default ProtectedRoute;
