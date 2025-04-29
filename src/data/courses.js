//TODO fetch from api
import piusImage from '../assets/images/piusImage.png';
import menaImage from '../assets/images/menaImage.png';
import trustImage from '../assets/images/trustImg.png';
import alexImage from '../assets/images/alexImage.png';
import blessingImage from '../assets/images/blessingImage.png';

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
            bio: 'With more than 10 years of design experience, Trust has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of his projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Alex has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of his projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Pius has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of Pius\'s projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Trust has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of his projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Trust has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of his projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Alex has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of his projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Pius has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of Pius\'s projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
            bio: 'With more than 10 years of design experience, Pius has worked alongside many passionate people from around the world, always with a single goal in mind: to create awesome interactive experiences. Over recent years, many of Pius\'s projects have been featured on sites like Awwwards, Webby Awards, Applied Art, and FWA.',
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
        id: 'artificial-intelligence-foundations-and-applications',
        slug: 'artificial-intelligence-foundations-and-applications',
        title: 'Artificial Intelligence: Foundations and Applications',
        category: "Artificial Intelligence",
        description: "The course is designed to provide a balance between theory and practice.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImage1,
        pricing: "coming_soon",
        free: false,
        instructor: {
            name: 'Israel ufumaka',
            bio: 'Alexander is passionate, multi-talented creative with 3 years plus experience as a product Designer and highly interested in helping creatives  transition into tech through practical design education. He has trained a series of students and  continues to mentor aspiring designers across Nigeria.  Passionate about empowering designers to think critically and create user-first experiences.',
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
                week: 'Week 3',
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
]