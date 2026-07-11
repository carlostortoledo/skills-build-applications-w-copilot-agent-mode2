import Team from '../models/team';
import createCollectionRouter from './createCollectionRouter';

const teamsRouter = createCollectionRouter(Team, 'teams');

export default teamsRouter;