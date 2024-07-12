import { body, validationResult } from 'express-validator';

export const validateZooSave = [
  body('name').notEmpty().withMessage('Name is required'),
  body('animal_tags')
  .notEmpty().withMessage('Animal tags are required')
  .isArray({ min: 1 }).withMessage('Animal tags must be an array and contain at least one element'),
  body('zooLocation.website_url').isURL().withMessage('Website URL must be valid'),
  body('zooLocation.img_url')
  .notEmpty().withMessage('Image URL is required')
  .isURL().withMessage('Image URL must be valid'),
  body('zooLocation.houseno').notEmpty().withMessage('House number is required'),
  body('zooLocation.area').notEmpty().withMessage('Area is required'),
  body('zooLocation.city').notEmpty().withMessage('City is required'),
  body('zooLocation.pincode').isPostalCode('any').withMessage('Pincode must be valid'),
  body('zooLocation.state').notEmpty().withMessage('State is required'),
  body('zooLocation.country').notEmpty().withMessage('Country is required'),
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




