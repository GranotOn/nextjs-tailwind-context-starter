import { useAuth } from "@context/authContext";
import DataProvider from "@context/navigationContext";
import UnAuthenticatedTemplate from "templates/UnAuthenticatedTemplate";
import UnAuthenticated from "@components/UnAuthenticated/Home";
import AuthenticatedTemplate from "@components/Authenticated/Home";
import Authenticated from "@components/Authenticated/Home";

export default function Index() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <UnAuthenticatedTemplate>Loading...</UnAuthenticatedTemplate>;
  }

  if (!isAuthenticated) {
    return (
      <UnAuthenticatedTemplate>
        <UnAuthenticated />
      </UnAuthenticatedTemplate>
    );
  }

  return (
    <DataProvider>
      <AuthenticatedTemplate>
        <Authenticated />
      </AuthenticatedTemplate>
    </DataProvider>
  );
}
