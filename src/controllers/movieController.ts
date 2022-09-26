import { Request, Response } from 'express';

// Model
import { MovieModel } from '../models/Movie';
// Logger
import Logger from '../../config/logger';

// Create Movie
export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(200).json(movie);
    } catch (erro: any) {
        Logger.error(`Error system: ${erro.message}`);
    }
}

// Find movie byId
export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({ error: 'This movie not exsist' });
        }
        return res.status(200).json(movie);
    } catch (erro: any) {
        Logger.error(`Error system ${erro.message}`);
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (error: any) {
        Logger.error(`Erro system: ${error.message}`);
    }
}

// Delete movie
export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({ error: 'Filme not exist' });
        }

        await movie.delete();
        return res.status(200).json({ msg: `Movie ID: ${id} Deleted` });
    } catch (error) {}
}

// Edit movie
export async function updateMovie(req: Request, res: Request) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(200).json({ error: 'Movie not exist' });
        }

        await MovieModel.updateOne({ id: id }, data);

        return res.status(200).json(data);
    } catch (error: any) {
        Logger.error(`Erro system: ${error.message}`);
    }
}
