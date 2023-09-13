const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 3000,
    secure: false,
    service: 'Gmail',
    auth: {
        user: 'davidozisiaka@gmail.com',
        pass: 'ipwm nuph szgb qutb'
    },
});

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'davidozisiaka@gmail.com',
        subject: 'Contact Form Submission',
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };
    
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message:'Message Sent Successfully' });
        } catch (error) {
            console.error('Error sending email: ' , error);
            res.status(500).json({ message: 'Error sending message'});
        }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});