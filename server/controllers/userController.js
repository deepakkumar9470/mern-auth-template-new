import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sendmail from '../utils/sendmail.js';


export const register = async (req,res) =>{
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = await jwt.sign({user : newUser._id},process.env.JWT_SECRET, { expiresIn: '1h' })
        // const verificationLink = `http://localhost:3000/verify/${token}`; 
        // await sendmail(verificationLink, email)
        res.status(200).json({ message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req,res) =>{
        try {
                const { email, password } = req.body;
            
                // Find user by email
                const user = await User.findOne({ email });
            
                // Check if user exists
                if (!user) {
                  return res.status(401).json({ message: 'Invalid email or password' });
                }
            
                // Compare hashed password
                const isPasswordValid = await bcrypt.compare(password, user.password);
            
                if (!isPasswordValid) {
                  return res.status(401).json({ message: 'Invalid email or password' });
                }
            
                // Generate and return a JWT token
                const token = jwt.sign({ user: user._id }, JWT_SECRET, { expiresIn: '1d' });
                res.status(200).json({ token });
              } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
              }
}

export const forgetPassword = async (req,res) =>{
        try {
                const {email} = req.body;
                // Generate a password reset token and expiration time
                const resetToken = crypto.randomBytes(20).toString('hex');
                const resetTokenExp = Date.now() + 3600000; // 1 hour
                await User.findOneAndUpdate({email}, {resetToken,resetTokenExp})

                 // Send an email with the reset token
               const resetLink = `http://localhost:3000/reset/${resetToken}`;
               await sendmail(resetLink,email)
               res.status(200).json({ message: 'Password reset email sent' });
                        
        } catch (error) {
               res.status(500).json({ message: 'Internal server error' });
        }
}


export const resetPassword = async (req,res) =>{
        try {
                const { token } = req.params;
                const { newPassword } = req.body;
                // Find user by reset token and check expiration

                const user = await User.findOne({
                        resetToken: token,
                        resetTokenExp: { $gt: Date.now() },
                });

                if (!user) {
                        return res.status(401).json({ message: 'Invalid or expired token' });
                   }
                
                   
                // Hash the new password and update the user's password
                const hashedPassword = await bcrypt.hash(password, 10);
                user.password = hashedPassword
                user.resetToken = undefined;
                user.resetTokenExp = undefined;
                await user.save()
                res.status(200).json({ message: 'Password reset successfully' });

        } catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            
        }
}

export const verifyUserByEmail = async (req,res) =>{
        try {
               
                const token = req.params
                const decode = await jwt.verify(token, process.env.JWT_SECRET)
                const userId = decode.user

                    // Update the user's verification status
                await User.findByIdAndUpdate(userId, { isVerified: true });
                res.status(200).json({ message: 'Email verified successfully' }); 
        } catch (error) {
                res.status(500).json({ message: 'Internal server error' });
        }
}

export const getUser = async (req,res) =>{
        try {
                // Fetch the authenticated user's data based on req.user
                const user = await User.findById(req.user);
            
                if (!user) {
                  return res.status(404).json({ message: 'User not found' });
                }
            
                // Send the user data in the response
                res.status(200).json({
                  username: user.username,
                  email: user.email,
                  // Include other user data fields as needed
                });
              } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
              }

}