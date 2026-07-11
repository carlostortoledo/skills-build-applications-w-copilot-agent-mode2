import User from '../models/user';
import createCollectionRouter from './createCollectionRouter';

const usersRouter = createCollectionRouter(User, 'users');

export default usersRouter;