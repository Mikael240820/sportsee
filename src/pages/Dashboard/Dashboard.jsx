import Heading from "../../components/Heading/Heading";
import useUserData from "../../hooks/useUserData";
import useUserActivity from "../../hooks/useUserActivity";
import ChartActivity from "../../components/ChartActivity/ChartActivity";
import "./Dashboard.scss";

function Dashboard() {
  // Tests possibles avec userId 12 ou 18
  const userId = 12;
  const { user, loading: userLoading, error: userError } = useUserData(userId);
  const { userActivity, loading: activityLoading, error: activityError } = useUserActivity(userId);

  // Gestion des erreurs
  if (userError) return <div>Erreur utilisateur : {userError}</div>;
  if (activityError) return <div>Erreur d'activité : {activityError}</div>;

  return (
    <article className="dashboard">
      {userLoading ? (
        <div>Chargement...</div>
      ) : (
        <Heading
          title={`Bonjour ${user.userInfos.firstName}`}
          description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      )}
      <div className="dashboard__container">
        {activityLoading ? (
          <div>Chargement...</div>
        ) : (
          <div className="dashboard__card">
            <h2 className="dashboard__title">Activité quotidienne</h2>
            <ChartActivity data={userActivity} />
          </div>
        )}
      </div>
    </article>
  );
}

export default Dashboard;
