import Activity from '../models/activity';
import createCollectionRouter from './createCollectionRouter';

const activitiesRouter = createCollectionRouter(Activity, 'activities');

export default activitiesRouter;