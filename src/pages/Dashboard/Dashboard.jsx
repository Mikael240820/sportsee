import Heading from "../../components/Heading/Heading";
import useUserData from "../../hooks/useUserData";
import useUserActivity from "../../hooks/useUserActivity";
import ChartActivity from "../../components/ChartActivity/ChartActivity";
import useUserSessions from "../../hooks/useUserSessions";
import ChartSessions from "../../components/ChartSessions/ChartSessions";
import ChartPerformance from "../../components/ChartPerformance/ChartPerformance";
import useUserPerformance from "../../hooks/useUserPerformance";
import ChartScore from "../../components/ChartScore/ChartScrore";
import Info from "../../components/Info/Info";
import { useParams } from "react-router-dom";
import "./Dashboard.scss";

function Dashboard() {
  // Tests possibles avec id 12 ou 18
  const { id } = useParams();
  const userId = id ?? 12;

  const { user, loading: userLoading, error: userError } = useUserData(userId);
  const { userActivity, loading: activityLoading, error: activityError } = useUserActivity(userId);
  const { userSessions, loading: sessionsLoading, error: sessionsError } = useUserSessions(userId);
  const { userPerformance, loading: performanceLoading, error: performanceError } = useUserPerformance(userId);

  // Gestion des erreurs
  if (userError) return <div>Erreur utilisateur : {userError}</div>;
  if (activityError) return <div>Erreur d'activité : {activityError}</div>;
  if (sessionsError) return <div>Erreur de sessions : {sessionsError}</div>;
  if (performanceError) return <div>Erreur de performance : {performanceError}</div>;

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
        <div className="dashboard__card-column">
          {userLoading ? (
            <div>Chargement...</div>
          ) : (
            <>
            <div className="dashboard__card dashboard__card--centered">
              <Info title="Calories" text={`${user.keyData.calorieCount}kCal`} icon="/assets/icons/energy.svg" color="red" />
            </div>
            <div className="dashboard__card dashboard__card--centered">
              <Info title="Proteines" text={`${user.keyData.proteinCount}g`} icon="/assets/icons/chicken.svg" color="blue" />
            </div>
            <div className="dashboard__card dashboard__card--centered">
              <Info title="Glucides" text={`${user.keyData.carbohydrateCount}g`} icon="/assets/icons/apple.svg" color="yellow" />
            </div>
            <div className="dashboard__card dashboard__card--centered">
              <Info title="Lipides" text={`${user.keyData.lipidCount}g`} icon="/assets/icons/cheeseburger.svg" color="pink" />
            </div>
            </>
          )}
        </div>
        <div className="dashboard__card-container">
          {sessionsLoading ? (
            <div>Chargement...</div>
          ) : (
            <div className="dashboard__card dashboard__card--full dashboard__card--primary">
              <h2 className="dashboard__title dashboard__title--sessions">Durée moyenne des sessions</h2>
              <ChartSessions data={userSessions} />
            </div>
          )}
          {performanceLoading ? (
            <div>Chargement...</div>
          ) : (
            <div className="dashboard__card dashboard__card--full dashboard__card--gray">
              <ChartPerformance data={userPerformance} />
            </div>
          )}
          {userLoading ? (
            <div>Chargement...</div>
          ) : (
            <div className="dashboard__card">
              <h2 className="dashboard__title dashboard__title--score">Score</h2>
              <ChartScore data={user.todayScore} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Dashboard;
