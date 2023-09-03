import jwt from "jsonwebtoken";



const verifyToken = async (req,res,next) =>{

    let token = req.headers.authorization;
    
    if(!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded.user;
    next()

}

export default verifyToken