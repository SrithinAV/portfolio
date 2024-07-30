import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import predefinedResponses from '../data/predefinedResponses.js';

const router = express.Router();

router.use(express.json());

router.post('/prompt', async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const userProvidedPrompt = req.body.prompt.toLowerCase();

        if (predefinedResponses[userProvidedPrompt]) {
            res.json({ text: predefinedResponses[userProvidedPrompt], success: true });
            return;
        }

        const adminPrompt = "Answer the user's question as if you are Srithin, providing detailed and accurate information. Answers should not exceed 50 words";
        const prompt = {
            name: 'Srithin A V',
            age: '21',
            gender: 'male',
            contact: {
                linkedIn: 'https://linkedin.com/in/srithinav',
                github: 'https://github.com/srithinav',
                'instagram id': 'srith__in',
                'mobile no': '+91 8590721355',
                'e-mail': 'srithin2003@gmail.com'
            },
            title: 'Full Stack Developer',
            skills: ['Node.js', 'React.js', 'HTML & CSS', 'JavaScript', 'C++', 'Express', 'MongoDB', 'PostgreSQL', 'Git'],
            education: {
                'Bachelor of Computer Applications (BCA)': {
                    university: 'Bengaluru City University',
                    CGPA: '8.56',
                    Year:"2021-2024",
                },
                XII: {
                    school: 'Ghss Bandadka',
                    percentage: '99.26',
                    Year:"2019-2021",
                },
                X: {
                    school: 'Ghss Bandadka',
                    percentage: '100',
                    Year:"2018-2019",
                }
            },
            projects: [
                {
                    name: 'Deliveed',
                    description: 'a food delivery application built using the MERN stack, incorporating tokenization and bcrypt. It has user, admin, and delivery-agent interfaces.'
                },
                {
                    name: 'Encrypter',
                    description: 'a C++ project that encrypts text files using newly generated keys.'
                }
            ]
        };

        const promptText = `
            Here is some information about me:
            Name: ${prompt.name}
            Age: ${prompt.age}
            Gender: ${prompt.gender}
            Title: ${prompt.title}
            mobile no: ${prompt.contact['mobile no']}
            e-mail: ${prompt.contact['e-mail']}
            linkedIn: ${prompt.contact['linkedIn']}
            github: ${prompt.contact['github']}
            instagram id: ${prompt.contact['instagram id']}
            Skills: ${prompt.skills.join(', ')}
            Education: 
                - BCA from ${prompt.education['Bachelor of Computer Applications (BCA)'].university} with CGPA ${prompt.education['Bachelor of Computer Applications (BCA)'].CGPA} academic year: ${prompt.education['Bachelor of Computer Applications (BCA)'].Year}
                - XII from ${prompt.education.XII.school} with ${prompt.education.XII.percentage}% academic year: ${prompt.education.XII.Year}
                - X from ${prompt.education.X.school} with ${prompt.education.X.percentage}% academic year: ${prompt.education.X.Year}
            
            Projects:
                - Deliveed: ${prompt.projects[0].description}
                - Encrypter: ${prompt.projects[1].description}
            
            User's question: ${req.body.prompt}
            ${adminPrompt}
        `;

        try {
            const result = await model.generateContent(promptText);
            const text = result.response.text();
            res.json({ text, success: true });
        } catch (error) {
            console.error('Error generating content:', error);
            res.json({ success: false, message: 'Error generating content' });
        }

    } catch (error) {
        console.error('Error in /prompt route:', error);
        res.json({ success: false, message: 'Server error' });
    }
});

export default router;
