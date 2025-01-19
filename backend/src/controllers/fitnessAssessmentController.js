const FitnessAssessment = require('../models/FitnessAssessment');
const User = require('../models/User');

exports.createFitnessAssessment = async (req, res) => {
    const {
        userId,
        personalInfo,
        fitnessLevel,
        fitnessGoals,
        confidenceLevel,
        lifestyle,
        healthConditions,
        dietaryPreferences,
        motivation,
    } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.personalInfo = personalInfo;
        await user.save();

        const newAssessment = new FitnessAssessment({
            user: userId,
            personalInfo,
            fitnessLevel,
            fitnessGoals,
            confidenceLevel,
            lifestyle,
            healthConditions,
            dietaryPreferences,
            motivation,
            activeStatus: true,
        });

        await newAssessment.save();

        res.status(201).json(newAssessment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFitnessAssessment = async (req, res) => {
    const { id } = req.params;

    try {
        const assessment = await FitnessAssessment.findById(id);

        if (!assessment) {
            return res.status(404).json({ message: 'Fitness assessment not found' });
        }

        res.status(200).json(assessment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.getFitnessAssessmentsByUserId = async (req, res) => {
//     const { userId } = req.params;

//     try {
//         const assessments = await FitnessAssessment.find({ user: userId });

//         if (!assessments) {
//             return res.status(404).json({ message: 'No fitness assessments found for this user' });
//         }

//         res.status(200).json(assessments);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

exports.deactiveFitnessAssessment = async (req, res) => {
    const { id } = req.params;

    try {
        const assessment = await FitnessAssessment.findById(id);

        if (!assessment) {
            return res.status(404).json({ message: 'Fitness assessment not found' });
        }

        assessment.activeStatus = false;
        await assessment.save();

        res.status(200).json({ message: 'Fitness assessment deactivated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAssessment = async (req, res) => {
    const { id } = req.params;

    try {
        const assessment = await FitnessAssessment.findByIdAndDelete(id);

        if (!assessment) {
            return res.status(404).json({ message: 'Fitness assessment not found' });
        }

        res.status(200).json({ message: 'Fitness assessment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

