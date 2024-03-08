const nodemailer = require('nodemailer');

exports.submitForm = async (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'jamigriffin@outlook.com',
            pass: '!Sup3rman!'
        }
    });


    const mailOptions = {
        from: 'jamigriffin@outlook.com',
        to: 'axis.machine@outlook.com',
        subject: 'Axis Machine Co - New Contact Us Request!',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nServices: ${formData.services}\nMessage: ${formData.message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
    }
};
