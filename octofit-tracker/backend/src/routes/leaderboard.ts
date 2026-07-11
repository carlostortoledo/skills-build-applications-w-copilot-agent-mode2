import LeaderboardEntry from '../models/leaderboard';
import createCollectionRouter from './createCollectionRouter';

const leaderboardRouter = createCollectionRouter(LeaderboardEntry, 'leaderboard');

export default leaderboardRouter;