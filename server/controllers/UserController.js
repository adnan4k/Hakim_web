import User from "../models/User.js";

    export const signup = async (req, res) => {
        const { email, name, role, password } = req.body;
    //  console.log(req.body,'body')
        const check = await User.findAll({where:{ email: email }});
    
        if (check.length !== 0) {
            return res.status(400).json("exist");
        } else {
            try {
                const user = await User.create(req.body);
                res.status(201).json(user);
            } catch (error) {
                console.log(error)
                res.json(error);
            }
        }
    };
    
    export const login = async (req, res) => {
        const { email, password } = req.body;
            //   console.log(req.body,'body')
        if (!email && !password) {
            return res.json({ message: 'provide credential' });
        }
        try {
            const user = await User.findOne({where:{ email: email }});
            console.log(user,'user')
            if (!user) {
                return res.status(400).json({ message: "notfound" });
            }
            if (user.password == password) {
                return res.status(200).json({ message: "loggedin", user });
            } else {
                return res.status(400).json({ message: "invalidCredentials" });
            }
        } catch (error) {
            return res.json(error);
        }
    };
    
    async function sendEmailToAdmin(userAppointmentDetails, email) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "fayomuhe5@gmail.com",
                pass: "vypd cqxp eqqm krsg",
                port: 465,
                secure: true,
            }
        });
    
        let info = await transporter.sendMail({
            from: email,
            to: "fayomuhe5@gmail.com",
            subject: "New Appointment Created",
            text: `A new appointment has been created: ${JSON.stringify(userAppointmentDetails)}`,
            html: `<b>A new appointment has been created:</b> <pre>${JSON.stringify(userAppointmentDetails, null, 2)}</pre>`,
        });
    }
    
    async function sendEmailToAdminForContact(user, email) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "fayomuhe5@gmail.com",
                pass: "vypd cqxp eqqm krsg",
                port: 465,
                secure: true,
            }
        });
    
        let info = await transporter.sendMail({
            from: email,
            to: "grooming1st@gmail.com",
            subject: "New message arrived ",
            text: `a New message has arrived: ${JSON.stringify(user)}`,
            html: `<b>a New message has arrived:</b> <pre>${JSON.stringify(user, null, 2)}</pre>`,
        });
    }
    export const handleContact = async(req,res) =>{
      const user = req.body
    try {
      await sendEmailToAdminForContact(user,user.email)
      return res.status(200).json({ message: 'Email sent successfully' });
    
    } catch (error) {
      return res.status(500).json(error)
    }
      return
    }