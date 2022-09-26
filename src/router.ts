import { Router, Request, Response } from 'express';
import {
    createMovie,
    findMovieById,
    getAllMovies,
    removeMovie,
    updateMovie,
} from './controllers/movieController';
//validations
import { validate } from './middlewares/handleValidations';
import { movieCreateValidation } from './middlewares/movieValidations';

const router = Router();
export default router
    .get('/test', (req: Request, res: Request) => {
        res.status(200).send('api-worker');
    })
    .get('/movie/:id', findMovieById)
    .delete('/movie/:id', removeMovie)
    .get('/movie', getAllMovies)
    .patch('/movie/:id', updateMovie)
    .post('/movie', movieCreateValidation(), validate, createMovie);
