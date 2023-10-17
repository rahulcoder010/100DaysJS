import express from 'express';
                    import { createUser, updateUser, updatePassword } from '../controller/user.js';

                    const router = express.Router();

                    // Create a new user
                    router.post('/', createUser);

                    // Update an existing user
                    router.put('/:id', updateUser);

                    // Update user's password
                    router.patch('/:id/password', updatePassword);

                    export default router;