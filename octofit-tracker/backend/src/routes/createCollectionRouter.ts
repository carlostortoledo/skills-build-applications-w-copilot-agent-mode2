import { Router } from 'express';
import type { Model } from 'mongoose';

const createCollectionRouter = (model: Model<any>, resourceName: string) => {
  const router = Router();

  router.get('/', async (_req, res, next) => {
    try {
      const documents = await model.find().sort({ createdAt: -1 }).lean();

      res.json({ [resourceName]: documents });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const document = await model.create(req.body);

      res.status(201).json({ [resourceName]: document });
    } catch (error) {
      next(error);
    }
  });

  return router;
};

export default createCollectionRouter;