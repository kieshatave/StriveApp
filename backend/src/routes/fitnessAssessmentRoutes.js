const express = require('express');
const fitnessAssessmentController = require('../controllers/fitnessAssessmentController');
const router = express.Router();

router.post('/fitnessAssessment', fitnessAssessmentController.createFitnessAssessment);
router.get('/fitnessAssessment/:id', fitnessAssessmentController.getFitnessAssessment);
router.put('/fitnessAssessment/:id', fitnessAssessmentController.deactiveFitnessAssessment);
//router.get('/fitnessAssessments/:userId', fitnessAssessmentController.getFitnessAssessmentsByUserId);
router.delete('/fitnessAssessment/:id', fitnessAssessmentController.deleteAssessment);

module.exports = router;