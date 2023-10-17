import express from 'express';

const router = express.Router();

/**
 * @route   POST /user/register
 * @desc    Register user
 * @access  Public
 */
router.post('/register', registerUser);

/**
 * @route   PUT /user/update
 * @desc    Update user
 * @access  Private
 */
router.put('/update', updateUser);

/**
 * @route   PUT /user/update-password
 * @desc    Update user password
 * @access  Private
 */
router.put('/update-password', updatePassword);

export default router;