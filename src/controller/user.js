const User = require("../models/user");

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while registering user",
      error: error.message
    });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, password }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating user",
      error: error.message
    });
  }
};

// Update password of an existing user
exports.updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid old password"
      });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating password",
      error: error.message
    });
  }
};