import { body } from 'express-validator';

export const movieCreateValidation = () => {
    return [
        body('title')
            .isString()
            .withMessage('Title is required!!')
            .isLength({ min: 5 })
            .withMessage('This title need required min 5 characters'),

        body('rating')
            .isNumeric()
            .withMessage('Rating must be a number')
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error('Rating must be betwen 0 and 10');
                }
                return true;
            }),

        body('description').isString().withMessage('Description is required!!'),

        body('director')
            .isString()
            .withMessage('The name Director is required!!'),

        body('poster').isURL().withMessage('The image must be a url'),
    ];
};
