//TODO fetch from api
import piusImage from '../assets/images/piusImage.png';
import trustimage from '../assets/images/trustImg.png';
import courseImage from '../assets/images/coursecontentPreview.png';
import course2Image from '../assets/images/city.png';
export const CourseMap = {
    'introduction-to-web-dev': {
        id: 'introduction-to-web-dev',
        title: 'Introduction to Website Development',
        academy: 'Cosmos Academy',
        image: courseImage,
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
        startDate: 'March 3rd, 2025',
        availableSeats: 20,
        contactInfo: '+1 829 3782800',

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
    'introduction-to-artificial-intelligence': {
        id: 'introduction-to-artificial-intelligence',
        title: 'Introduction to Artificial Intelligence (AI)',
        academy: 'Cosmos Academy',
        image: course2Image,
        instructor: {
            name: 'Trust Oghale',
            bio: 'A renowned AI researcher with over 15 years of experience leveraging machine learning in practical applications.',
            image: trustimage,
        },
        features: [
            { label: 'Interactive Labs', value: 'Hands-on' },
            { label: 'Datasets', value: 'Real-world' },
            { label: 'Mentorship', value: 'Expert Guidance' },
            { label: 'Certificate', value: 'Upon Completion' },
        ],
        startDate: 'Coming Soon',
        availableSeats: 30,
        contactInfo: '+1 555 123456',
        overview: [
            'This course covers the foundational concepts of artificial intelligence and machine learning.',
            'Students will learn to build basic models, understand supervised and unsupervised learning, and apply AI tools to real-world problems.',
            'The course emphasizes hands-on lab sessions to enable practical experience with datasets and algorithms.',
        ],
        details: [
            { title: 'Pre-requisite', content: 'Basic programming knowledge and familiarity with Python.' },
            { title: 'Course format', content: 'Online virtual classroom with live sessions.' },
            { title: 'Level', content: 'Beginner to Intermediate' },
            { title: 'Structure', content: 'Video lectures, lab sessions, and project work.' },
            { title: 'Software / Material list', content: 'Python, Jupyter Notebook, TensorFlow, etc.' },
            { title: 'Categories', content: 'Artificial Intelligence, Machine Learning' },
        ],
        learningOutcomes: [
            'Understand AI and machine learning fundamentals.',
            'Implement basic machine learning models using Python.',
            'Analyze and preprocess data for model building.',
            'Evaluate model performance and fine-tune algorithms.',
            'Apply AI concepts to solve practical problems.',
        ],
        lessons: [
            { week: 'Week 1', title: 'Introduction to AI & ML', chapters: 4 },
            { week: 'Week 2', title: 'Data Handling and Preprocessing', chapters: 4 },
            { week: 'Week 3', title: 'Building and Evaluating Models', chapters: 4 },
        ],
    },

    'introduction-to-mobile-development': {
        id: 'introduction-to-mobile-development',
        title: 'Introduction to Mobile Development',
        academy: 'Cosmos Academy',
        image: courseImage,
        instructor: {
            name: 'Pius Emuraye',
            bio: 'Pius Emuraye is an expert mobile app developer with over 10 years of experience in building scalable mobile applications.',
            image: piusImage,
        },
        features: [
            { label: 'Hands-On Projects', value: 'Practical' },
            { label: 'Cross-Platform', value: 'iOS/Android' },
            { label: 'Mentorship', value: 'Live Support' },
            { label: 'Community', value: 'Peer Reviews' },
        ],
        startDate: 'Coming Soon',
        availableSeats: 25,
        contactInfo: '+1 555 654321',
        overview: [
            'Dive into the world of mobile development by learning to build robust applications using modern frameworks.',
            'The course guides you through both native and cross-platform development techniques.',
            'Students engage in creating apps from scratch with an emphasis on performance and user experience.',
        ],
        details: [
            { title: 'Pre-requisite', content: 'Familiarity with basic programming concepts. Prior web development experience is beneficial.' },
            { title: 'Course format', content: 'A blend of video lectures with live coding sessions.' },
            { title: 'Level', content: 'Beginner to Intermediate' },
            { title: 'Structure', content: 'Interactive modules combined with individual and group projects.' },
            { title: 'Software / Material list', content: 'React Native, Android Studio, Xcode.' },
            { title: 'Categories', content: 'Mobile Development, Cross-Platform' },
        ],
        learningOutcomes: [
            'Master the basics of mobile app development.',
            'Learn key UI/UX principles for mobile platforms.',
            'Build and deploy a simple mobile application.',
            'Troubleshoot common issues in app development.',
            'Collaborate effectively in a mobile development team.',
        ],
        lessons: [
            { week: 'Week 1', title: 'Fundamentals of Mobile Development', chapters: 4 },
            { week: 'Week 2', title: 'UI/UX and App Design', chapters: 4 },
            { week: 'Week 3', title: 'Building and Testing Mobile Apps', chapters: 4 },
        ],
    },

    'advanced-javascript-mastery': {
        id: 'advanced-javascript-mastery',
        title: 'Advanced JavaScript Mastery',
        academy: 'Cosmos Academy',
        image: courseImage,
        instructor: {
            name: 'Pius Emuraye',
            bio: 'Pius Emuraye is a seasoned JavaScript developer and educator with extensive experience in building complex web applications.',
            image: piusImage,
        },
        features: [
            { label: 'In-Depth Topics', value: 'Advanced' },
            { label: 'Code Challenges', value: 'Hands-on' },
            { label: 'Project-Based', value: 'Real-World' },
            { label: 'Mentorship', value: 'Expert Guidance' },
        ],
        startDate: 'Coming Soon',
        availableSeats: 20,
        contactInfo: '+1 555 789012',
        overview: [
            'Gain mastery over JavaScript by exploring advanced programming concepts and design patterns.',
            'This course covers asynchronous programming, performance optimization, and the latest JavaScript features.',
            'Students will tackle projects that simulate real-world challenges to reinforce their learning.',
        ],
        details: [
            { title: 'Pre-requisite', content: 'Intermediate proficiency in JavaScript and familiarity with web development fundamentals.' },
            { title: 'Course format', content: 'Online self-paced modules combined with live interactive sessions.' },
            { title: 'Level', content: 'Intermediate to Advanced' },
            { title: 'Structure', content: 'Video lessons, coding challenges, and a capstone project.' },
            { title: 'Software / Material list', content: 'Modern browsers, Node.js, code editors, etc.' },
            { title: 'Categories', content: 'Web Development, Programming' },
        ],
        learningOutcomes: [
            'Deepen your understanding of advanced JavaScript concepts.',
            'Develop scalable and efficient code using modern JavaScript features.',
            'Master asynchronous programming patterns like Promises and async/await.',
            'Optimize code performance and improve maintainability.',
            'Deploy and manage complex JavaScript applications.',
        ],
        lessons: [
            { week: 'Week 1', title: 'Advanced Concepts and Patterns', chapters: 4 },
            { week: 'Week 2', title: 'Asynchronous Programming', chapters: 4 },
            { week: 'Week 3', title: 'Optimization and Best Practices', chapters: 4 },
        ],
    },
}