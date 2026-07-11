import Workout from '../models/workout';
import createCollectionRouter from './createCollectionRouter';

const workoutsRouter = createCollectionRouter(Workout, 'workouts');

export default workoutsRouter;