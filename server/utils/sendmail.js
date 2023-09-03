import nodemailer  from 'nodemailer'


const sendmail = async (verificationLink, email) =>{
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth : {
                user  : 'deepakkumarchouhan272@gmail.com',
                pass : ''
            }
        })
        
        const mailOptions = {
            from: 'deepakkumarchouhan272@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Click the following link to verify your email: ${verificationLink}`,
          };
        
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log('Email sent: ' + info.response);
              res.status(201).json({info})
            }
          });
        
        
    } catch (error) {
        console.log(error)
    }
}
  export default sendmail