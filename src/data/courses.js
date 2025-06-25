//TODO fetch from api
import piusImage from '../assets/images/piusImage.png';
import menaImage from '../assets/images/menaImage.png';
import trustImage from '../assets/images/trustImg.png';
import alexImage from '../assets/images/alexImage.png';
import blessingImage from '../assets/images/blessingImage.png';
import IsraelImage from '../assets/images/israelImage.png';

import courseImage from '../assets/images/coursecontentPreview.png';
import course2Image from '../assets/images/city.png';

import courseImage1 from '../assets/images/courseImg2.png';
import courseImageIntroSocial from '../assets/images/courses_thumbnails/social-intro_thumbnail.png';
import courseImageInterSocial from '../assets/images/courses_thumbnails/social-inter_thumbnail.png';
import courseImageAdvanceSocial from '../assets/images/courses_thumbnails/social-advan_thumbnail.png';
import courseImageIntroDesign from '../assets/images/courses_thumbnails/design-intro_thumbnail.png';
import courseImageInterDesign from '../assets/images/courses_thumbnails/design-inter_thumbnail.png';
import courseImageAdvanceBranding from '../assets/images/courses_thumbnails/design-advan_thumbnail.png';
import courseImageIntroUi from '../assets/images/courses_thumbnails/ui-intro_thumbnail.png';
import courseImageInterUi from '../assets/images/courses_thumbnails/ui-inter_thumbnail.png';
import courseImageInterUi2 from '../assets/images/courses_thumbnails/ui-inter2_thumbnail.png';
import courseImageIntroDev from '../assets/images/courses_thumbnails/webdev-begin.png';
import courseImageInterDev from '../assets/images/courses_thumbnails/webdev-inter.png';
import courseImageAdvDev from '../assets/images/courses_thumbnails/webdev-adv.png';
import courseImageAIIntro from '../assets/images/courses_thumbnails/AI-intro.png';


export const CourseMap = [
    {
        id: 'introduction-to-social-media-management',
        slug: 'introduction-to-social-media-management',
        title: 'Introduction to Social Media Management',
        category: "Social Management",
        description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
        academy: 'Cosmos Academy',
        duration: "3 Weeks",
        image: courseImageIntroSocial,
        pricing: "free",
        free: true,
        instructor: {
            name: 'Mena Agelebe',
            bio: 'With more than 10 years of design experience, Mena has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of her projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
            image: menaImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FFC3FF',

        overview: [
            'When a web designer receives a creative brief, an entire journey is laid out in front of them. Research, visual strategy, UX/UI design, web building, animation, and more. Without direction, this workflow can become tangled, inefficient, and yield poor results. This course provides a map on how to navigate the wonderful world of web design.',
            'In this Masterclass, Louis Paquet guides participants through each step of the web design process, starting from scratch. Participants will discover how to use design principles and techniques, such as color, typography, and composition, to create visually appealing and intuitive user interfaces. They will also learn how to use motion design to enhance the user experience and improve the usability of interfaces.',
            'In addition to design, students will learn how to create animation systems and prototypes for their UI designs, using tools and techniques such as Sketch, After Effects, and the HTML5 canvas. After this course, participants will know how to confidently build the best interactive web experience for any goal.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'General proficiency in laptop usage, Figma fundamentals',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Intermediate',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Adobe After Effects, Figma',
            },
            {
                title: 'Categories',
                content: 'Design, Visual Design, UI Systems, Motion Design',
            }
        ],

        learningOutcomes: [
            'Learn how to kickstart your design process based on research and objectives.',
            'Bring life to your design with advanced prototyping techniques in Figma.',
            'Understand how to translate UX into memorable UI.',
            'Animate your design in After Effects.',
            'Create an efficient UI design using the right fonts, colors, layouts, and assets.',
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Kickstarting your Design Process',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'beginners-guide-to-graphics-and-brand-design',
        slug: 'beginners-guide-to-graphics-and-brand-design',
        title: 'Beginners Guide to Graphics and Brand Design',
        category: "Brand Development",
        description: "Start your design journey by learning the basics of graphics and brand creation from scratch.",
        academy: 'Cosmos Academy',
        duration: "4 Weeks",
        image: courseImageIntroDesign,
        pricing: "free",
        free: false,
        instructor: {
            name: 'Trust Oghale',
            bio: 'Experienced with over 3 years of experience in the design industry and 6 years in brand  development, Trust has built more than 30 brands for businesses both locally and  internationally. He has served as an Art Director at award-winning agencies like Cluebox and as  Creative Director at the fast-growing digital agency, Cosmos Design Space. Trust’s professional  journey includes crafting brand strategies, delivering compelling designs, and engaging with  clients to solve their unique challenges.',
            image: trustImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#90B8F3',

        overview: [
            'This foundational course introduces participants to the essential principles and tools of graphic  design as they relate to brand development.',
            'Designed for complete beginners, the curriculum  covers fundamental design theory, color psychology, typography basics, and introduces  industry-standard design software.',
            'Participants will develop the core visual communication skills  needed to create cohesive brand elements.',
        ],

        details: [
            {
                title: "Pre-requisite",
                content: "Basic computer literacy skills, No prior design experience required, PC with internet access (minimum 8GB RAM recommended), Ability to install software applications"
            },
            {
                title: "Course format",
                content: "Online virtual classroom"
            },
            {
                title: "Level",
                content: "Beginner"
            },
            {
                title: "Structure",
                content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
                title: "Software / Material list",
                content: "Adobe Creative Cloud (Photoshop and Illustrator) — Free trial or subscription, Canva (Free version sufficient), Digital notebook for note-taking, app or notebook, Photoshop and Illustrator, Sketchbook and drawing tools for offline ideation"
            },
            {
                title: "Categories",
                content: "Brand identity, Design, Graphic Design, Canva, Photoshop"
            }
        ],
        learningOutcomes: [
            "Identify and apply core design principles including balance, contrast, hierarchy, alignment, and repetition.",
            "Select and combine appropriate colors using color theory fundamentals.",
            "Distinguish between typeface categories and apply basic typography rules.",
            "Navigate essential functions of Adobe Photoshop, Illustrator, and Canva.",
            "Create logo designs and simple brand elements."
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Design Fundamentals & Visual Thinking',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Explain the core principles of visual design', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Analyze design examples using appropriate terminology', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Apply basic composition techniques to arrange visual elements', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Describe how browsers render web pages', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Color Theory & Application',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Apply color effectively across various design applications', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Get familiar with Python programming for AI', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Typography Essentials',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Classify different typeface categories and their characteristics', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Select appropriate typefaces for specific brand personalities', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create effective typographic hierarchies and layouts', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: ' Introduction to Design Software',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Navigate the interfaces of Photoshop, illustrator and Canva', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Perform basic editing and creation tasks in each platform', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Select the appropriate software for different design needs', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'product-design-psychology-beginners-course',
        slug: 'product-design-psychology-beginners-course',
        title: 'Product Design Psychology: Beginners Course',
        category: "Product Design",
        description: "Beginner-friendly course introduces the psychology of product design for user-centered experiences.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageIntroUi,
        pricing: "free",
        free: false,
        instructor: {
            name: 'Alexander Ikani',
            bio: 'Ikani Alexander Onuche is a multidisciplinary Product Designer with over three years of experience blending creativity and functionality into meaningful digital experiences. With a foundation in graphic design and programming, he brings a unique mix of visual storytelling and technical insight to every project. His background in multimedia fuels his creativity, while his sharp eye for detail and problem-solving mindset help him design smarter, more intuitive solutions. Ikani isn’t just passionate about design — he’s driven by the joy of making life simpler, more beautiful, and more efficient through purposeful design.',
            image: alexImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#C7F16C',

        overview: [
            'This Product Design course is an intensive, hands-on program designed to equip aspiring designers with the skills needed to create user-centered digital products. This course introduces students to user interface and user experience design fundamentals, from empathizing with users to creating high-fidelity prototypes using industry-standard tools like Figma.',
            "Throughout the course, students will work on real-world projects and apply the design thinking process — empathize, define, ideate, prototype, and test — to build functional and aesthetically pleasing interfaces. Whether you're starting out or switching careers, this course sets the foundation for a successful career in product design.",
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'General proficiency in laptop usage, No prior design experience required, Stable Internet for live sessions and Learning',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Beginners',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Access to Figma, Mobile phone or device for testing mobile interfaces, notetaking tool',
            },
            {
                title: 'Categories',
                content: 'UI/UX Design, Product Design, Beginner Friendly, Design Thinking, Figma',
            }
        ],

        learningOutcomes: [
            'Create user personas and empathy maps.',
            'Develop wireframes and user flows.',
            'Conduct basic user research and interviews.',
            'Design UI interfaces using Figma.',
            'Define user problems using problem statements and user stories.',
            'Prototype and conduct usability testing.',
            'Deliver a final UI/UX case study project.',
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Understanding UI/UX & Design Thinking',
                chapters: 4,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand what UI/UX Design is', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Identify key differences between UI and UX', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Learn the Design Thinking Process', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Set up and navigate Figma', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 2',
                title: 'Research, Personas & User Flows',
                chapters: 4,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Learn how to conduct user interviews', duration: '1m 28s', locked: true, videoLink: ''},
                    { title: 'Create user personas and empathy maps', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Develop user flows', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Finding Inspiration and Building Your Moodboard', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 3',
                title: 'Sketch / Wireframing, UI Principles, & Figma Design',
                chapters: 4,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Translate ideas into wireframes', duration: '1m 28s', locked: true, videoLink: ''},
                    { title: 'Understand UI Principles (typography, spacing, contrast)', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Use Figma to build mockups', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Finding Inspiration and Building Your Moodboard', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 4',
                title: 'Prototyping, Testing & Final Project',
                chapters: 4,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Create interactive prototypes', duration: '1m 28s', locked: true, videoLink: ''},
                    { title: 'Conduct usability testing', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Prepare and present a final project', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Finding Inspiration and Buliding Your Moodboard', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            }
        ],

    },  

    {
        id: 'introduction-to-web-dev',
        slug: 'introduction-to-web-dev',
        title: 'Fundamentals of Website Design Process',
        category: "Web Development",
        description: "This course guides you through real-world branding projects, including identity design, guidelines.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageIntroDev,
        pricing: "free",
        free: false,
        instructor: {
            name: 'Pius Emuraye',
            bio: `Experienced Full Stack Developer with over 4 years of expertise in building scalable, secure, and user-friendly web applications using the MERN stack (MongoDB, Express, React, Node.js) and Laravel. Proficient in designing and implementing RESTful APIs, creating responsive frontends, and optimizing backend performance.`,
            image: piusImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FCF562',

        overview: [
            'This course introduces beginners to the core concepts of web development. It covers the  structure of the internet, the difference between frontend and backend development, and sets a  foundation for HTML, CSS, and JavaScript.',
            'The goal is to prepare learners to build simple,  structured web pages and understand how the web works in real life.',
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'Basic computer literacy. Activity is that software on a computer. Recommended familiarity with using a browser',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Beginners',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Chrome browser (latest version), Visual Studio Code, Git, Notebook or digital note-taking app, Stable Internet connection, Mozilla Developer Network (MDN) Docs, FreeCodeCamp HTML/CSS tutorials, W3Schools learning',
            },
            {
                title: 'Categories',
                content: 'web_development, beginners, html, css, javascript',
            }
        ],
    
        learningOutcomes: [
            'Explain what web development is and its role in digital transformation',
            'Differentiate between frontend and backend development',
            'Describe how the internet works, including DNS and HTTP',
            'Understand how browsers render web pages',
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Introduction to Web Development',
                chapters: 4,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the role of web development', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Identify differences between frontend and backend development', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Explain the basics of how the internet works', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Describe how browsers render web pages', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Basic HTML Structure and Tags',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the structure of an HTML document', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Use basic HTML tags to structure content', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Link, insert images, and build forms', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'CSS Styling and Layouts',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand how to use CSS to style HTML content', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Apply classes, IDs, and selectors', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create responsive layouts using Flexbox and grid', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Introduction to JavaScript',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the basics of JavaScript syntax and data types', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Write simple scripts to manipulate content on a webpage', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Use events and functions to add interactivity', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 5',
                title: 'Basic Version Control (Git & GitHub)',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the purpose of version control in software development ', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Set up and use Git for local repositories', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Use GitHub to host and manage remote repositories', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Perform essential Git commands (clone, commit, push, pull, branch)', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
        ],

    },

    {
        id: 'mastering-ui-design-with-figma-intermediate-course1',
        slug: 'mastering-ui-design-with-figma-intermediate-course1',
        title: 'Mastering UI Design With Figma: Intermediate Course',
        category: "Product Design",
        description: "Learn advanced UI techniques, component systems, prototyping, to create stunning, functional interfaces.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterUi2,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Chinazor Blessing',
            bio: 'With more than 10 years of design experience, Chinazor has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of her projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
            image: blessingImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FDD6FD',

        overview: [
            'Mastering UI Design with Figma" is an intensive, hands-on course designed to teach  learners professional UI design skills using Figma. This course guides participants from  the foundational concepts of UI design to advanced design system implementation,  interactivity, and prototyping',
            'Focusing on both design theory and tool mastery, the  course provides real-world, project-based learning experiences.  Within the broader Cosmos Product Design Program, this course serves as a bridge  between visual design fundamentals and practical application in product  environments.',
            'It prepares learners for roles such as UI Designer, Product Designer, or  Design System Specialist in modern design teams.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'Basic knowledge of design principles, Completion of Cosmos Academy UI/UX Beginners Course (recommended), Laptop, Stable internet connection',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Intermediate',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Access to Figma, Mobile phone or device for testing mobile interfaces, note-taking tool, Access to Figma Community, Google Fonts library',
            },
            {
                title: 'Categories',
                content: 'UI Design, Figma, Prototyping, Product Design, Design Systems',
            }
        ],
        
        learningOutcomes: [
            'Navigate and utilize Figma’s interface, tools and features efficiently',
            'Design high-fidelity user interfaces for web and mobile apps',
            'Create reusable components, layouts, and apply design systems',
            'Build interactive prototypes with smart animations',
            'Collaborate and hand off designs to developers',
        ],
        

        lessons: [
            {
                week: 'Week 1',
                title: ' Introduction to Figma & UI Design Basics',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand key UI design principles', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Learn the Figma interface and workflow basics', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create simple layouts using frames, shapes, and text', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Layouts, Grids, Components & Reusability',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Apply layout grids and spacing rules', duration: '1m 28s', locked: true, videoLink: ''},
                    { title: 'Create reusable components with styles', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Build a consistent design structure', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Prototyping & Interaction Design',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Build interactive UI flows in Figma', duration: '1m 28s', locked: true, videoLink: ''},
                    { title: 'Apply smart animations and transition', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Present prototypes for user testing', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Design Systems & Advanced Figma Features',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Create a functional design system', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Use Auto Layout, Libraries, and advanced tools', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Collaborate and handoff designs efficiently', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            }
        ],

    },

    {
        id: 'building-businesses-that-connects-on-social-media',
        slug: 'building-businesses-that-connects-on-social-media',
        title: 'Building Businesses that Connects on Social Media',
        category: "Social Management",
        description: "This course guides you through real-world branding projects, including identity design, guidelines.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterSocial,
        pricing: "coming_soon",
        free: true,
        instructor: {
            name: 'Mena Agelebe',
            bio: 'With more than 10 years of design experience, Mena has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of her projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
            image: menaImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FFE6C3',

        overview: [
            'When a web designer receives a creative brief, an entire journey is laid out in front of them. Research, visual strategy, UX/UI design, web building, animation, and more. Without direction, this workflow can become tangled, inefficient, and yield poor results. This course provides a map on how to navigate the wonderful world of web design.',
            'In this Masterclass, Louis Paquet guides participants through each step of the web design process, starting from scratch. Participants will discover how to use design principles and techniques, such as color, typography, and composition, to create visually appealing and intuitive user interfaces. They will also learn how to use motion design to enhance the user experience and improve the usability of interfaces.',
            'In addition to design, students will learn how to create animation systems and prototypes for their UI designs, using tools and techniques such as Sketch, After Effects, and the HTML5 canvas. After this course, participants will know how to confidently build the best interactive web experience for any goal.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'General proficiency in laptop usage, Figma fundamentals',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Intermediate',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Adobe After Effects, Figma',
            },
            {
                title: 'Categories',
                content: 'Design, Visual Design, UI Systems, Motion Design',
            }
        ],

        learningOutcomes: [
            'Learn how to kickstart your design process based on research and objectives.',
            'Bring life to your design with advanced prototyping techniques in Figma.',
            'Understand how to translate UX into memorable UI.',
            'Animate your design in After Effects.',
            'Create an efficient UI design using the right fonts, colors, layouts, and assets.',
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Kickstarting your Design Process',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'advance-to-social-media-management',
        slug: 'advance-to-social-media-management',
        title: 'Advanced Social Media Management Course',
        category: "Social Management",
        description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
        academy: 'Cosmos Academy',
        duration: "3 Weeks",
        image: courseImageAdvanceSocial,
        pricing: "coming_soon",
        free: true,
        instructor: {
            name: 'Mena Agelebe',
            bio: 'With more than 10 years of design experience, Mena has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of her projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
            image: menaImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FFC3FF',

        overview: [
            'When a web designer receives a creative brief, an entire journey is laid out in front of them. Research, visual strategy, UX/UI design, web building, animation, and more. Without direction, this workflow can become tangled, inefficient, and yield poor results. This course provides a map on how to navigate the wonderful world of web design.',
            'In this Masterclass, Louis Paquet guides participants through each step of the web design process, starting from scratch. Participants will discover how to use design principles and techniques, such as color, typography, and composition, to create visually appealing and intuitive user interfaces. They will also learn how to use motion design to enhance the user experience and improve the usability of interfaces.',
            'In addition to design, students will learn how to create animation systems and prototypes for their UI designs, using tools and techniques such as Sketch, After Effects, and the HTML5 canvas. After this course, participants will know how to confidently build the best interactive web experience for any goal.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'General proficiency in laptop usage, Figma fundamentals',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Intermediate',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Adobe After Effects, Figma',
            },
            {
                title: 'Categories',
                content: 'Design, Visual Design, UI Systems, Motion Design',
            }
        ],

        learningOutcomes: [
            'Learn how to kickstart your design process based on research and objectives.',
            'Bring life to your design with advanced prototyping techniques in Figma.',
            'Understand how to translate UX into memorable UI.',
            'Animate your design in After Effects.',
            'Create an efficient UI design using the right fonts, colors, layouts, and assets.',
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Kickstarting your Design Process',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'creating-meaningful-brands-intermediate-course',
        slug: 'creating-meaningful-brands-intermediate-course',
        title: 'Creating Meaningful Brands: Intermediate Course',
        category: "Brand Development",
        description: "This intermediate course dives into brand storytelling, strategy, and identity systems that connect inspire.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterDesign,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Trust Oghale',
            bio: 'Experienced with over 3 years of experience in the design industry and 6 years in brand  development, Trust has built more than 30 brands for businesses both locally and  internationally. He has served as an Art Director at award-winning agencies like Cluebox and as  Creative Director at the fast-growing digital agency, Cosmos Design Space. Trust’s professional  journey includes crafting brand strategies, delivering compelling designs, and engaging with  clients to solve their unique challenges.',
            image: trustImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#C7F16C',

        overview: [
            'This intermediate-level branding course builds upon foundational design skills to develop  comprehensive brand strategy and storytelling capabilities. ',
            'Participants will learn to create  brands with meaningful purpose, logo design basics, memorable personality, and consistent  touch points across multiple platforms.',
            'The curriculum bridges the gap between visual design  and strategic brand thinking, empowering students to develop brands that connect emotionally',
        ],

        details: [
            {
                title: "Pre-requisite",
                content: "Completion of 'Beginners Guide to Graphics and Brand Design' or equivalent experience, Basic proficiency with Adobe Creative Suite (Photoshop and Illustrator), Understanding of fundamental design principles and visual communication, Portfolio demonstrating basic brand design exercises"
            },
            {
                title: "Course format",
                content: "Online virtual classroom"
            },
            {
                title: "Level",
                content: "Intermediate"
            },
            {
                title: "Structure",
                content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
                title: "Software / Material list",
                content: "Adobe Creative Cloud (Photoshop, Illustrator, InDesign) — Paid subscription required, Figma (Free account sufficient), Miro or Milanote (Free account sufficient for course duration), Digital notebook for sketching ideas (tablet or smartphone app), Sketchbook and drawing tools for offline ideation"
            },
            {
                title: "Categories",
                content: "Brand identity, Design, Graphic Design, Canva, Photoshop"
            }
        ],
        learningOutcomes: [
            "Create basic logo designs and simple brand elements.",
            "Develop a cohesive visual style for a mock brand.",
            "Export designs in appropriate formats for different applications.",
            "Conduct effective brand research including competitor analysis and audience insights.",
            "Develop strategic brand positioning and differentiation strategies.",
            "Create comprehensive brand personas, craft compelling brand narratives and messaging hierarchies.",
            "Design cohesive visual identity systems that adapt across multiple platforms.",
            "Implement voice and tone for consistent brand communication.",
            "Produce professional brand guidelines documentation and design systems."
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Logo Design Fundamentals',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Identify characteristics of effective log designs', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Apply logo design principles to create simple marks', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Develop logo variations for different applications', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 2',
                title: 'Brand Style Guide Basics',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Identify essential components of a basic brand style guide', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Compile designs decisions into a cohesive reference document', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Apply brand guidelines consistently across multiple applications', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 3',
                title: 'Brand Strategy & Positioning',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Develop strategic brand position statements', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Articulate brand purpose, vision and values', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create differentiation strategies based on audience insights', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: ' Brand Narrative & Messaging ',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Create consistent voice and tone guidelines', duration: '1m 28s', locked: false, videoLink: ''},
                ],
            }
        ],

    },

    {
        id: 'Building-a-full-branding-project-advance-course',
        slug: 'Building-a-full-branding-project-advance-course',
        title: 'Building a Full Branding Project: Advance Course',
        category: "Brand Development",
        description: "This course guides you through real-world branding projects, including identity design, guidelines.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageAdvanceBranding,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Trust Oghale',
            bio: 'Experienced with over 3 years of experience in the design industry and 6 years in brand  development, Trust has built more than 30 brands for businesses both locally and  internationally. He has served as an Art Director at award-winning agencies like Cluebox and as  Creative Director at the fast-growing digital agency, Cosmos Design Space. Trust’s professional  journey includes crafting brand strategies, delivering compelling designs, and engaging with  clients to solve their unique challenges.',
            image: trustImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FCF562',

        overview: [
            'The "Building a Full Branding Project" course is an immersive, advanced-level program  designed to guide participants through the comprehensive process of developing a complete  brand identity from inception to implementation.',
            'This hands-on course bridges the gap between  theoretical brand knowledge and practical application, enabling participants to create cohesive,  strategic, and impactful brand systems for real-world scenarios.  ',
            'This course serves as the capstone of the Brand Development track at Cosmos Academy,  synthesizing skills in market research, consumer psychology, design thinking, visual  communication, and brand strategy into a unified professional skillset that meets current  industry demands for strategic brand developers.',
        ],

        details: [
            {
                title: "Pre-requisite",
                content: "Basic knowledge of design principles with Adobe Creative Suite, Familiarity (particularly Illustrator, Photoshop, and InDesign), Understanding of Brand Strategy and Brand Fundamentals and Visual Identity Design courses at Cosmos Academy (recommended), Personal portfolio with appropriate software installed"
            },
            {
                title: "Course format",
                content: "Online virtual classroom"
            },
            {
                title: "Level",
                content: "Advanced"
            },
            {
                title: "Structure",
                content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
                title: "Software / Material list",
                content: "Adobe Creative Cloud (Photoshop, Illustrator, InDesign) — Paid subscription required, Figma, Miro (Free account sufficient for course duration), Digital notebook for sketching ideas (tablet or smartphone app), Sketchbook and drawing tools for offline ideation"
            },
            {
                title: "Categories",
                content: "Brand identity, Design, Graphic Design, Canva, Photoshop"
            }
        ],
        learningOutcomes: [
            "Implement complex JavaScript concepts and frontend frameworks.",
            "Design scalable backends with Express and WebSockets.",
            "Create normalized databases with relationships and queries.",
            "Secure web applications using tokens, sessions, and secure cookies.",
            "Set up CI/CD pipelines and deploy full-stack apps to the cloud.",
            "Implement responsive layouts and ensure basic accessibility.",
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'Brand Discovery, Research & Strategy',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Establish a structured approach to the brand research process', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Develop methodologies for analyzing brand landscapes and competition', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create effective research frameworks for understanding target audiences', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Translate research insights into strategic brand foundations', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: ' Visual Identity System Development',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Translate brand strategy into visual design briefs', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Develop conceptual approaches for visual identity system', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create primary brand marks that align with strategic foundations', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Develop comprehensive color systems with strategic rationales', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 3',
                title: ' Extended Visual Identity & Brand Applications',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Design supportive visual elements that extend identity', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Apply visual identity system across core business applications', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Develop print collateral that embodies brand strategy', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create digital applications with consistent brand expression', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Brand Guidelines & Implementation Planning',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Structure comprehensive brand guidelines for consistent implementation', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Develop brand governance systems and processes', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create strategic implementation plans and timelines', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Develop strategic brand launch plans across multiple channels', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },
    
    {
        id: 'next-level-product-design',
        slug: 'next-level-product-design',
        title: 'Next-Level Product Design: Systems, Strategy & AI',
        category: "Product Design",
        description: "Master Figma’s  most powerful features (tokens, Dev Mode, conditional logic) while integrating AI tools.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterUi,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Alexander Ikani',
            bio: 'Ikani Alexander Onuche is a multidisciplinary Product Designer with over three years of experience blending creativity and functionality into meaningful digital experiences. With a foundation in graphic design and programming, he brings a unique mix of visual storytelling and technical insight to every project. His background in multimedia fuels his creativity, while his sharp eye for detail and problem-solving mindset help him design smarter, more intuitive solutions. Ikani isn’t just passionate about design — he’s driven by the joy of making life simpler, more beautiful, and more efficient through purposeful design.',
            image: alexImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#FDD6FD',

        overview: [
            'This intensive course elevates designers to professional-level proficiency in scalable design  systems, advanced prototyping, and data-driven UX strategy.',
            'Participants will master Figma’s  most powerful features (tokens, Dev Mode, conditional logic) while integrating AI tools to  streamline workflows.',
            'Through real-world projects, students will learn to build accessible,  animation-rich interfaces and collaborate effectively with developers.  As the capstone of Cosmos Academy’s Product Design track, this course prepares graduates for  senior roles in product teams, design systems specialization, or freelance leadership.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'Completion of Cosmos Academy’s Intermediate UI Design course (or equivalent experience)\nProficiency in Figma (components, auto-layout, basic prototyping),\nPortfolio with 2+ UI/UX projects',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Advanced',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Mac/PC with 8GB+ RAM\nFigma (free/pro plan)\nChrome browser',
            },
            {
                title: 'Categories',
                content: 'Design Systems, Advanced Prototyping, UX Strategy, Figma Mastery',
            }
        ],
        
        learningOutcomes: [
            'Design enterprise-grade systems using tokens, variants, and AI-augmented documentation',
            'Prototype complex interactions with conditional logic and Lottie animations',
            'Conduct tech-driven UX audits using Hotjar and accessibility tools',
            'Collaborate with developers via Figma Dev Mode and automated handoffs',
            'Present design decisions with stakeholder-ready case studies',
        ],
        
        lessons: [
            {
                week: 'Week 1',
                title: 'Kickstarting your Design Process',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Implement design tokens for consistency', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Architect reusable component libraries', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Document systems for team collaboration', duration: '2m 3s', locked: true, videoLink: ''},
                ],
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Create conditional prototypes (if/then logic)', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Animate with Samrt Animate and Lottie', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Explore AR/Voice interfaces using ProtoPie', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Apply UX metrics (HEART framework)', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Conduct A/B testing and analyze user behavior', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Perform accessibility audits using WCAG 2.2', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Use Figma Dev Mode for handoff', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Communicate design impact in presentations', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Craft a case study for hiring or client pitches', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },
    
    {
        id: 'intermediate-web-dev',
        slug: 'intermediate-web-dev',
        title: 'Dynamic Web Development: Intermediate Level',
        category: "Web Development",
        description: "This course guides you through real-world branding projects, including identity design, guidelines.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterDev,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Pius Emuraye',
            bio: `Experienced Full Stack Developer with over 4 years of expertise in building scalable, secure, and user-friendly web applications using the MERN stack (MongoDB, Express, React, Node.js) and Laravel. Proficient in designing and implementing RESTful APIs, creating responsive frontends, and optimizing backend performance.`,
            image: piusImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#90B8F3',

        overview: [
            'This course is designed for learners with foundational web development skills who want to build  dynamic, interactive web applications.',
            'Participants will dive deeper into JavaScript (including  modern ES6+ features), version control best practices, API consumption, and basic backend  development using Node.js and Express.',
            'They will also master responsive design principles and accessibility standards. This intermediate  course lays the groundwork for becoming a full-stack developer or specializing in  frontend/backend roles.',
        ],

        details: [
            {
                title: "Pre-requisite",
                content: "Completion Beginner Web Development program or equivalent, HTML/CSS, JavaScript knowledge, ability to work with laptop, Figma, commit, push, Stable laptop with Node.js and Visual Studio Code installed"
            },
            {
                title: "Course format",
                content: "Online virtual classroom"
            },
            {
                title: "Level",
                content: "Intermediate"
            },
            {
                title: "Structure",
                content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
                title: "Software / Material list",
                content: "Chrome browser (latest version) — Free, Visual Code (latest version) — Free, GitHub account — Free, Node.js (latest LTS version), Notebook or digital note-taking system, GitHub account setup, Stable internet connection"
            },
            {
                title: "Categories",
                content: "web development, intermediate, html, css, javascript, APIs, nodejs, responsiveDesign"
            }
        ],
        learningOutcomes: [
            "Build dynamic websites with JavaScript.",
            "ES6+",
            "Manage project versions collaboratively with Git and GitHub.",
            "Consult and integrate third-party APIs into web apps.",
            "Set up a simple backend using Node.js, Express, and a database.",
            "Implement responsive layouts and ensure basic accessibility."
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'JavaScript Deep Dive',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand and apply ES6+ JavaScript features', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Manipulate data using arrays and objects', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Create interactive functionality using event-driven programming', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Perform DOM manipulation to dynamically update web pages', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Advance Version Control with GitHub',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Apply branching strategies to manage feature development', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Create and manage pull requests for collaborative coding', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Resolve merge conflicts effectively', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Conduct and participate in code reviews using Github tools', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Introduction to Web APIs',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understanding what APIs are and how they work', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Work with JSON-formated data', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Use the Fetch API to request and display external data', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Handle asynchronous data fetching and error states', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Basic Backend Development (Node.js & ExpressJS',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand how servers and backend development work', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Set up a Node.js development environment', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Create basic web servers and handle HTTP requests using ExpressJS', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Understand RESTful routing (GET, POST, PUT, DELETE)', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 5',
                title: 'Responsive Design, Accessibility & FInal Project Kickoff',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Build fully responsive layouts using Flexbox and CSS Grid', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Implement responsive media queries for different screen sizes', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Apply accessiblity best practices (ARIA, alt, attributes, keyboard navigation)', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Use sematic HTML and contrast ratios for inclusive design (- Start planing and scaffolding the final dynamic web project)', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'advance-web-dev',
        slug: 'advance-web-dev',
        title: 'Full-Stack Development: Advanced Level',
        category: "Web Development",
        description: "This course guides you through real-world branding projects, including identity design, guidelines.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageAdvDev,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Pius Emuraye',
            bio: `Experienced Full Stack Developer with over 4 years of expertise in building scalable, secure, and user-friendly web applications using the MERN stack (MongoDB, Express, React, Node.js) and Laravel. Proficient in designing and implementing RESTful APIs, creating responsive frontends, and optimizing backend performance.`,
            image: piusImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#C7F16C',

        overview: [
            'This master-level course is designed for learners ready to build scalable, secure, and  production-ready full-stack web applications.',
            'It focuses on advanced frontend concepts, deep  backend integration, authentication strategies, database architecture, deployment pipelines, and  DevOps. By the end of the program, students will have built and deployed a full-stack web app  using industry-standard tools and best practices.',
            'This course is ideal for those seeking to become professional full-stack developers, backend  engineers, or cloud deployment specialists.'
        ],

        details: [
            {
                title: "Pre-requisite",
                content: "Completion of Intermediate Web Development (JavaScript, APIs, Git, Node.js), Experience with project-base, JavaScript and Express , A GitHub profile with working projects , A working development environment (Node.js, VS Code, Git installed)"
            },
            {
                title: "Course format",
                content: "Online virtual classroom"
            },
            {
                title: "Level",
                content: "Advanced"
            },
            {
                title: "Structure",
                content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
                title: "Software / Material list",
                content: "Chrome browser, Visual Studio Code (latest) — Free, Node.js (latest LTS) — Free, PostgreSQL, GUI (Free), Postman—Free, Vercel, Render, Railway, A PC or Mac with at least 8GB RAM, Reliable internet connection, Active GitHub and cloud deployment accounts"
            },
            {
                title: "Categories",
                content: "web development, intermediate, html, css, javascript, APIs, nodejs, responsiveDesign"
            }
        ],
        learningOutcomes: [
            "Implement complex JavaScript concepts and frontend frameworks.",
            "Design scalable backends with Express and WebSocket.",
            "Create normalized databases with relationships and queries.",
            "Secure web applications using tokens, sessions, and secure cookies.",
            "Set up CI/CD pipelines and deploy fully-fledged apps to the cloud.",
            "Implement responsive layouts and ensure basic accessibility."
        ],

        lessons: [
            {
                week: 'Week 1',
                title: 'JavaScript Deep Dive',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Advanced Version Control with Git & GitHub',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'artificial-intelligence-foundations-and-applications',
        slug: 'artificial-intelligence-foundations-and-applications',
        title: 'Artificial Intelligence: Foundations and Applications',
        category: "Artificial Intelligence",
        description: "The course is introduces students to the world of Artificial Intelligence (AI).",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageAIIntro,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Israel ufumaka',
            bio: "Expertise: Machine Learning, Deep Learning, AI for Healthcare. Experience: 7+ years in AI development and 5+ years teaching AI-related topics.    Certification/Education: MSc in Artificial Intelligence and Its Application, AI specialisation.    Bio: Dedicated professional passionate about making AI accessible to everyone",
            image: IsraelImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#C7F16C',

        overview: [
            'This foundational course introduces students to the world of Artificial Intelligence (AI), its concepts, techniques, and applications across various industries. Participants will explore the history and evolution of AI, key subfields such as machine learning, natural language processing, and computer vision, as well as real-world applications like recommendation systems, chatbots, and autonomous systems.',
            'The course is designed to provide a balance between theory and practice. Students will gain hands-on experience by working with Python to build basic AI models and will learn about the crucial ethical considerations in AI development. This course serves as a stepping stone for learners intending to dive deeper into advanced AI topics or pursue a career in AI-related industries.',
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'No prior AI knowledge required; basic computer literacy is sufficient.\nRecommended Prior Courses: Python for Beginners (optional).\nTechnical Requirements: 8GB RAM and 64-bit OS, Stable internet connection',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Beginners',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Python (version 3.8 or higher, free), Jupyter Notebook or Visual Studio Code (free), TensorFlow or PyTorch (optional, free)',
            },
            {
                title: 'Categories',
                content: 'Artificial Intelligence, Machine Learning, Data Science',
            }
        ],
        
        learningOutcomes: [
            'Understand the foundational concepts of AI and its subfields.',
            'Preprocess and analyse datasets for AI applications.',
            'Build simple machine learning and deep learning models using Python.',
            'Develop basic natural language processing tools like sentiment analysis.',
            'Evaluate the ethical considerations of AI systems in society.',
        ],        

        lessons: [
            {
                week: 'Week 1',
                title: 'Introduction to AI',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Define AI and its subfields', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Understand the history and evolution of AI', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Explore real-world AI applications', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'The Building Blocks of AI',
                chapters: 2,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Grasp fundamental mathematical concepts fo AI (linear algebra, probability).', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Get familiar with Python programming for AI', duration: '2m 3s', locked: true, videoLink: ''},
                    // { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Machine Learning Fundamentals',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Differentiate between supervised and unsupervised learning', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Understand key machine learning alorithms (e.g., linear regression, decision trees).', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Build your first machine learning model', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Introduction to Deep Learning',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the basics of neutral networks and how they work', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Explore the structure of a deep learning model', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Build and train a simple neutral network', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 5',
                title: 'Natural Language Processing Basics',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the basics of natural language processing (NLP)', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Explore common NLP tasks (e.g., tokenization, sentiment analysis).', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Build a simple sentiment analysis tool', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Ethics and Future of AI',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand the ethical concerns surrounding AI', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Explore the societal impacts of AI technologies', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Discuss future trends and innovations in AI', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'artificial-intelligence-intermidiate',
        slug: 'computer-vision-oundations-and-practice',
        title: 'Computer Vision: Foundations and Practice',
        category: "Artificial Intelligence",
        description: "The course is introduces students to the world of Artificial Intelligence (AI).",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageAIIntro,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Israel ufumaka',
            bio: "Expertise: Machine Learning, Deep Learning, AI for Healthcare. Experience: 7+ years in AI development and 5+ years teaching AI-related topics.    Certification/Education: MSc in Artificial Intelligence and Its Application, AI specialisation.    Bio: Dedicated professional passionate about making AI accessible to everyone",
            image: IsraelImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#BDADFF',

        overview: [
            'This beginner‑level course introduces students to the fundamentals of computer vision—the  field of teaching machines to “see” and interpret visual data.',
            'Participants will learn key concepts  such as image representation, filtering, feature extraction, and classical algorithms before  moving on to deep learning‑based approaches for image classification, object detection, and  segmentation.',
            'Hands‑on Python exercises using OpenCV and TensorFlow will cement  understanding, while discussions on ethical considerations will ensure responsible AI  development.'
        ],

        details: [
            {
                title: 'Pre-requisite',
                content: 'Basic Python programming (variables, loops, functions).\nRecommended: Python for Beginners (optional).\nTechnical Requirements: Computer with at least 8GB RAM and 64-bit OS, Stable internet connection for live sessions and assignments.',
            },
            {
                title: 'Course format',
                content: 'Online virtual classroom',
            },
            {
                title: 'Level',
                content: 'Intermediate',
            },
            {
                title: 'Structure',
                content: 'Pre-recorded Lecture, once-a-week Q&A, individual feedback',
            },
            {
                title: 'Software / Material list',
                content: 'Python (3.8+), Jupyter Notebook or VS Code, OpenCV (latest), TensorFlow (latest),\n"Learning OpenCV 4 Computer Vision with Python 3" by Joseph Howse, Joe Minichino (optional),\nAccess to image datasets (e.g., CIFAR-10, MNIST), YouTube tutorials on OpenCV and deep vision models,\nResearch papers on cutting-edge vision techniques.',
            },
            {
                title: 'Categories',
                content: 'Computer Vision, Image Processing, Deep Learning',
            }
        ],

        learningOutcomes: [
            'Represent and manipulate digital images in Python.',
            'Apply filtering and edge-detection techniques.',
            'Extract and match keypoints for image alignment.',
            'Build and train a simple convolutional neural network.',
            'Implement basic object detection using pre-trained models.',
            'Discuss ethical and privacy issues in computer vision.',
        ],
        

        lessons: [
            {
                week: 'Week 1',
                title: 'Introduction to Computer Vision (CV)',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: "Define computer vision and it's real-world applications", duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Understand how images are represented digitally (pixels, colour spaces).', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Explore commo CV use-cases (facial recognition, autonomous vehicles)', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 2',
                title: 'Image Processing Basics',
                chapters: 2,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Perform geometric transforms (scaling, rotation)', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Get familiar with Python programming for AI', duration: '2m 3s', locked: true, videoLink: ''},
                    // { title: 'lorem ipsum dolor sit amet, consectetur adip', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 3',
                title: 'Feature Detection & Matching',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand keypoints and descriptiors (SIFT, ORB).', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Match features between image pairs.', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Use feature matching for image stiching basics.', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 4',
                title: 'Deep Learning for Vision',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Understand convulutional neutral networks (CNNs).', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Build a simple CNN for image classification.', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Train and evaluate on MNIST or CIFAR-10.', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 5',
                title: 'Object Detection & Segmentation',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Explore pre-trained object detection models (e.g., YOLO, SSD).', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Run inference on images/videos.', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Understand image segmentation basics (sematic vs. instance).', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            },
            {
                week: 'Week 6',
                title: 'Ethics, Applications & Future Trends',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Discuss ethical issues (privacy, bias) in CV', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Explore emerging CV applications (AR/VR, medical imaging).', duration: '2m 3s', locked: true, videoLink: ''},
                    { title: 'Identify future research directions.', duration: '2m 3s', locked: true, videoLink: ''}
                ],
            }
        ],

    },

    {
        id: 'artificial-intelligence-advance',
        slug: 'cnn-Specialization',
        title: 'CNN Specialization: From Fundamentals to Advanced Practice',
        category: "Artificial Intelligence",
        description: "The course is introduces students to the world of Artificial Intelligence (AI).",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageAIIntro,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Israel ufumaka',
            bio: "Expertise: Machine Learning, Deep Learning, AI for Healthcare. Experience: 7+ years in AI development and 5+ years teaching AI-related topics.    Certification/Education: MSc in Artificial Intelligence and Its Application, AI specialisation.    Bio: Dedicated professional passionate about making AI accessible to everyone",
            image: IsraelImage
        },
        features: [
            { label: 'Expert Lead', value: 'Program' },
            { label: 'Language', value: 'English' },
            { label: 'Free', value: 'Access' },
            { label: 'Subtitles', value: 'English, French' },
            { label: 'Weekly Live', value: 'Q&A' }
        ],
        startDate: 'March 3, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',
        enrolled: "1k",
        colorBg: '#E6ACFF',

        overview: [
            'This specialisation guides learners from their first convolutional neural network to advanced  CNN techniques and best practices.',
            'Over 8 weeks, you’ll build foundational CNNs, explore data  augmentation, transfer learning, interpretability methods, and culminate in a deployable CNN  project, with an emphasis on hands‑on Python (TensorFlow/Keras) exercises.'
        ],

        details: [
            {
            title: "Pre-requisite",
            content: "Basic Python programming (loops, functions, NumPy), Familiarity with neural network fundamentals (e.g., what a layer is), Recommended: Completion of an introductory machine learning or AI course"
            },
            {
            title: "Course format",
            content: "Online virtual classroom"
            },
            {
            title: "Level",
            content: "Advanced"
            },
            {
            title: "Structure",
            content: "Pre-recorded Lecture, once-a-week Q&A, individual feedback"
            },
            {
            title: "Software / Material list",
            content: "Python 3.8+, Jupyter Notebook or VS Code, TensorFlow/Keras, NumPy, OpenCV, PyTorch (for comparison), TensorBoard visualization, access to MNIST/CIFAR-10"
            },
            {
            title: "Categories",
            content: "Deep Learning, CNN, Computer Vision, Keras, TensorFlow"
            }
        ],
        learningOutcomes: [
            "Build, train and evaluate CNNs from scratch using NumPy and Keras",
            "Apply image preprocessing and augmentation to improve model generalization",
            "Leverage transfer learning to fine-tune state-of-the-art CNN backbones",
            "Visualize and interpret CNN decision-making via feature maps and Grad-CAM",
            "Troubleshoot common CNN pitfalls (overfitting, underfitting, hyperparameters)",
            "Package and deploy a CNN-powered image API"
        ],
        

        lessons: [
            {
                week: 'Week 1',
                title: 'CNN Fundamentals',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: "Understanding convolutional operations and filters", duration: '1m 45s', locked: false, videoLink: ''},
                    { title: 'Assemble and train a simple CN on MNIST/CIFAR-10', duration: '2m 10s', locked: true, videoLink: ''},
                    { title: 'Explore common CV use-cases (facial recognition, autonomous vehicles).', duration: '2m 30s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 2',
                title: 'Hands-On CNNs with Keras',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Perform geometric transforms (scaling, rotation).', duration: '1m 28s', locked: false, videoLink: ''},
                    { title: 'Get familiar with Python programming for AI', duration: '2m 15s', locked: true, videoLink: ''},
                    // { title: 'Compiling and training your first CNN model', duration: '2m 45s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 3',
                title: 'From Pixels to Predictions',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Implement convolution by hand using NumPy.', duration: '1m 35s', locked: false, videoLink: ''},
                    { title: 'Deep-dive on kernel operations.', duration: '2m 25s', locked: true, videoLink: ''},
                    { title: 'Use feature matching for image stitching basics.', duration: '2m 0s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 4',
                title: 'Image Preprocessing & Augmentation',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Conduct resizing, normalization, flips, rotations.', duration: '1m 35s', locked: false, videoLink: ''},
                    { title: 'Leverage real-time augmentation in training.', duration: '2m 25s', locked: true, videoLink: ''},
                    { title: 'Train and evaluate on MNIST or CIFAR-10.', duration: '2m 0s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 5',
                title: 'Transfer Learning for Beginners',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Fine-tune VGG16, MobileNet on small custom dataset', duration: '1m 40s', locked: false, videoLink: ''},
                    { title: 'Run inference on images/videos.', duration: '2m 30s', locked: true, videoLink: ''},
                    { title: 'Understand image segmentation basics (sematic vs. instance).', duration: '2m 15s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 6',
                title: 'Visualizing What CNNs Learn',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Generate feature maps, filter visualizations', duration: '1m 50s', locked: false, videoLink: ''},
                    { title: 'Apply Grad-CAM for class activation', duration: '2m 20s', locked: true, videoLink: ''},
                    { title: 'Identify future research directions', duration: '2m 5s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 7',
                title: 'Troubleshooting CNNs',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'Diagnose overfitting/underfitting', duration: '1m 45s', locked: false, videoLink: ''},
                    { title: 'Tune hyperparameters: dropout, batch size, LR schedules.', duration: '2m 15s', locked: true, videoLink: ''},
                    { title: 'Identify future research directions', duration: '2m 10s', locked: true, videoLink: ''}
                ]
            },
            {
                week: 'Week 8',
                title: 'Building & Deploying a Mini-Project',
                chapters: 3,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
                lessons: [
                    { title: 'End-to-end project: data -> model -> API deployment', duration: '1m 30s', locked: false, videoLink: ''},
                    { title: 'Tune hyperparamenters: dropout, batch size, LR schedules.', duration: '2m 40s', locked: true, videoLink: ''},
                    { title: 'Identify future research directions', duration: '2m 20s', locked: true, videoLink: ''}
                ]
            }
        ],

    },
]