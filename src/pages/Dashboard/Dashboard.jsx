import Heading from "../../components/Heading/Heading";
import useUserData from "../../hooks/useUserData";
import "./Dashboard.scss";

function Dashboard() {
  // Tests possibles avec userId 12 ou 18
  const userId = 12;
  const { user, loading: userLoading, error: userError } = useUserData(userId);

  // Gestion des erreurs
  if (userError) return <div>Erreur utilisateur : {userError}</div>;

  return (
    <>
      {userLoading ? (
        <div>Chargement de l'utilisateur...</div>
      ) : (
        <Heading
          title={`Bonjour ${user.userInfos.firstName}`}
          description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      )}
    </>
  );
}

export default Dashboard;
