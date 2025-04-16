//TODO fetch from api
import piusImage from '../assets/images/piusImage.png';
import menaImage from '../assets/images/menaImage.png';
import trustImage from '../assets/images/trustImg.png';
import alexImage from '../assets/images/alexImage.png';
import blessingImage from '../assets/images/blessingImage.png';

import courseImage from '../assets/images/coursecontentPreview.png';
import course2Image from '../assets/images/city.png';

import courseImage1 from '../assets/images/courseImg1.png';
import courseImageIntroSocial from '../assets/images/courses_thumbnails/social-intro_thumbnail.png';
import courseImageAdvanceSocial from '../assets/images/courses_thumbnails/social-advan_thumbnail.png';
import courseImageIntroDesign from '../assets/images/courses_thumbnails/design-intro_thumbnail.png';
import courseImageInterDesign from '../assets/images/courses_thumbnails/design-inter_thumbnail.png';
import courseImageAdvanceBranding from '../assets/images/courses_thumbnails/design-advan_thumbnail.png';
import courseImageIntroUi from '../assets/images/courses_thumbnails/ui-intro_thumbnail.png';
import courseImageInterUi from '../assets/images/courses_thumbnails/ui-inter_thumbnail.png';
import courseImageInterUi2 from '../assets/images/courses_thumbnails/ui-inter2_thumbnail.png';


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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
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
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 2',
                title: 'Research, Personas & User Flows',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Sketch / Wireframing, UI Principles, & Figma Design',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Prototyping, Testing & Final Project',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            }
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
        pricing: "free",
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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            }
        ],

    },
    
    {
        id: 'mastering-ui-design-with-figma-intermediate-course',
        slug: 'mastering-ui-design-with-figma-intermediate-course',
        title: 'Mastering UI Design With Figma: Intermediate Course',
        category: "Product Design",
        description: "Beginner-friendly course introduces the psychology of product design for user-centered experiences.",
        academy: 'Cosmos Academy',
        duration: "6 Weeks",
        image: courseImageInterUi,
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
        colorBg: '#9981FF',

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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            }
        ],

    },
    
    {
        id: 'introduction-to-web-dev',
        slug: 'introduction-to-web-dev',
        title: 'Introduction to Website Development',
        category: "Web Development",
        description: "Learn dynamic websites using HTML, CSS, JavaScript, and advanced frameworks like React.",
        academy: 'Cosmos Academy',
        duration: "3 Weeks",
        image: courseImage1,
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
        colorBg: '',

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
            },
            {
                week: 'Week 2',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 3',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
                week: 'Week 4',
                title: 'Laying the Groundwork',
                chapters: 7,
                description: 'lorem ipsum dolor sit amet, consectetur adip',
            }
        ],

    },
]