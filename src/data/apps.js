import { FaRobot, FaCode, FaMobile, FaCloud, FaShoppingBag, FaBullseye, FaUserTie, FaBaby } from 'react-icons/fa';

const apps = [
  {
    id: 'dresscode',
    status: 'active',
    title: 'Dresscode AI',
    description: 'An AI-powered fashion recommendation app that helps users discover their perfect style based on personal preferences and body type.',
    logo: '/images/logos/dresscode-logo.png',
    icon: <FaShoppingBag />,
    url: 'https://dresscode.ai',
    videoUrl: null,
    videoPoster: null,
    features: [
      'Personalized style recommendations based on body type and preferences',
      'Outfit style suggestions based on use history and AI applications',
      'Smart wardrobe management and outfit planning',
      'Style inspiration from fashion influencers and trends'
    ],
    longDescription: 'Dresscode AI is your personal style assistant that helps you improve your fashion choices through AI-powered feedback. Simply upload photos of your outfits and receive detailed suggestions on how to enhance your look. The app tracks your style journey over time, maintaining a digital wardrobe of your outfits and showing your progress as you refine your personal style. With more exciting features in development, Dresscode AI aims to be your go-to fashion companion for building confidence in your clothing choices.'
  },
  {
    id: 'cuddlr',
    status: 'active',
    title: 'Cuddlr',
    description: 'An AI-powered baby care app that helps new parents log everything about their baby - photos, milestones, growth, feedings, and sleep - with expert AI guidance.',
    logo: '/images/logos/cuddlr-logo.png',
    icon: <FaBaby />,
    url: null,
    videoUrl: null,
    videoPoster: null,
    features: [
      'Comprehensive baby care logging (photos, milestones, growth tracking)',
      'Feeding and sleep pattern monitoring and analysis',
      'AI-powered baby care expert for personalized guidance and advice',
      'Growth tracking with height, weight, and development milestones',
      'Photo journal and milestone documentation',
      'Sleep and feeding schedule optimization recommendations',
      'Health and development insights based on logged data',
      'Secure and private family data storage'
    ],
    longDescription: 'Cuddlr is your comprehensive AI-powered baby care companion designed to help new parents navigate the beautiful but challenging journey of raising a baby. The app provides a complete solution for logging and tracking everything about your baby - from precious photos and milestone moments to essential health data like feeding schedules, sleep patterns, growth measurements, and developmental achievements. What sets Cuddlr apart is its sophisticated AI baby care expert that provides personalized guidance, answers your questions, and offers evidence-based advice tailored to your baby\'s specific needs and development stage. Whether you\'re a first-time parent seeking reassurance or an experienced parent wanting to optimize your baby\'s care routine, Cuddlr combines the convenience of comprehensive logging with the wisdom of AI-powered expert guidance to help you provide the best care for your little one.'
  },
  // {
  //   id: 'threemonths',
  //   status: 'active',
  //   title: '3 Months',
  //   description: 'A goal-setting app that helps you create achievable three-month goals and provides daily actionable steps to reach them.',
  //   logo: '/images/logos/threemonths.png',
  //   icon: <FaBullseye />,
  //   url: null,
  //   videoUrl: null,
  //   videoPoster: null,
  //   features: [
  //     'Set realistic and achievable three-month goals',
  //     'AI-powered daily task recommendations to reach your goals',
  //     'Progress tracking with visual milestones and achievements',
  //     'Personalized goal roadmaps based on your preferences and schedule',
  //     'Daily habit building and consistency tracking',
  //     'Goal adjustment and optimization based on your progress'
  //   ],
  //   longDescription: '3 Months is your personal goal achievement companion that transforms big dreams into manageable daily actions. The app helps you set realistic three-month goals and creates a personalized roadmap of small, achievable steps you can take every day to reach your objectives. Whether you want to learn a new skill, build healthy habits, advance your career, or work on personal projects, 3 Months breaks down your goals into daily bite-sized tasks that fit into your schedule. With progress tracking, milestone celebrations, and adaptive recommendations, the app keeps you motivated and on track to achieve meaningful results in just three months.'
  // },
  // {
  //   id: 'class-ai',
  //   status: 'active',
  //   title: 'Class AI',
  //   description: 'Learn elegance, refinement, and social grace with AI-powered coaching. Master old money etiquette, sophisticated manners, and cultural sophistication to elevate your social presence.',
  //   logo: '/images/logos/class-ai-logo.png',
  //   icon: <FaUserTie />,
  //   url: null,
  //   videoUrl: null,
  //   videoPoster: null,
  //   features: [
  //     'AI-powered etiquette and manners training',
  //     'Old money lifestyle habits and sophisticated behavior patterns',
  //     'Social situation coaching and conversation skills',
  //     'Cultural refinement and intellectual sophistication',
  //     'Elegant dress codes and styling guidance',
  //     'Fine dining etiquette and social protocol',
  //     'Networking skills for high-society environments',
  //     'Personalized refinement journey based on your goals'
  //   ],
  //   longDescription: 'Class AI is your personal refinement coach, designed to help you develop the elegance, sophistication, and social grace associated with old money culture and high society. Through AI-powered lessons and personalized coaching, you\'ll learn timeless etiquette, sophisticated manners, cultural refinement, and the subtle social skills needed to navigate elite circles with confidence. The app covers everything from proper dining etiquette and conversation skills to dress codes, social protocols, and the refined behaviors that characterize truly classy individuals. Whether you\'re preparing for important social events, advancing your career, or simply want to cultivate personal elegance, Class AI provides the knowledge and guidance to help you develop authentic sophistication and social poise.'
  // },
  // {
  //   id: 'album-ai',
  //   status: 'active',
  //   title: 'Album AI',
  //   description: 'Transform your photos into stunning artistic albums using AI. Upload your images and recreate them in beautiful styles like Studio Ghibli, anime, watercolor, and more.',
  //   logo: '/images/logos/album-ai-logo.png',
  //   icon: <FaRobot />,
  //   videoUrl: null,
  //   videoPoster: null,
  //   features: [
  //     'AI-powered photo transformation in multiple artistic styles',
  //     'Studio Ghibli, anime, watercolor, oil painting, and digital art styles',
  //     'Create beautiful shareable albums from your transformed photos',
  //     'High-quality image processing and enhancement',
  //     'Easy sharing with friends and social media',
  //     'Batch processing for multiple photos at once'
  //   ],
  //   longDescription: 'Album AI revolutionizes how you transform and share your memories. Simply upload a small set of your favorite photos, and our advanced AI technology will recreate them in stunning artistic styles including Studio Ghibli animation, anime, watercolor paintings, oil paintings, digital art, and many more. The app then compiles your transformed images into a beautiful, shareable album that you can easily share with friends and on social media. Whether you want to turn your vacation photos into a magical Ghibli adventure or transform your portraits into anime masterpieces, Album AI makes it effortless to create unique, artistic versions of your precious memories.'
  // },
  // {
  //   id: 'coming-soon-2',
  //   status: 'coming-soon',
  //   title: 'Coming Soon',
  //   description: 'We\'re working on exciting new AI applications. Stay tuned for more innovative solutions from Seagull Technologies.',
  //   logo: '/images/logos/coming-soon-logo.png',
  //   icon: <FaCloud />,
  //   videoUrl: null,
  //   videoPoster: null,
  //   features: [
  //     'Innovative AI technology',
  //     'User-friendly interface',
  //     'Solving real-world problems',
  //     'Enhanced user experience',
  //     'Regular updates and improvements'
  //   ],
  //   longDescription: 'We are currently developing our next innovative AI application. This upcoming project will leverage cutting-edge artificial intelligence to solve real-world problems in a user-friendly way. Our team of experts is working hard to create a solution that will enhance user experiences and deliver exceptional value. Stay tuned for more information as we get closer to launch.'
  // }
];

export default apps; 