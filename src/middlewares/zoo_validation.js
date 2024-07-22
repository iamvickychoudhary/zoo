import { body, validationResult } from 'express-validator';

export const validateZooSave = [
  body('name').notEmpty().withMessage('Name is required'),
  body('animal_tags')
  .notEmpty().withMessage('Animal tags are required'),
  body('website_url').isURL().withMessage('Website URL must be valid'),
  body('houseno').notEmpty().withMessage('House number is required'),
  body('area').notEmpty().withMessage('Area is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('pincode').isPostalCode('any').withMessage('Pincode must be valid'),
  body('state').notEmpty().withMessage('State is required'),
  body('country').notEmpty().withMessage('Country is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          errors: errors.array()
        });
      }
    next();
  }
];




