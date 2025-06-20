import { FaRobot, FaCode, FaMobile, FaCloud, FaShoppingBag } from 'react-icons/fa';

const apps = [
  {
    id: 'dresscode',
    status: 'active',
    title: 'Dresscode AI',
    description: 'An AI-powered fashion recommendation app that helps users discover their perfect style based on personal preferences and body type.',
    logo: '/images/logos/dresscode-logo.png',
    icon: <FaShoppingBag />,
    url: 'https://dresscode.ai',
    features: [
      'Personalized style recommendations based on body type and preferences',
      'Outfit style suggestions based on use history and AI applications',
      'Smart wardrobe management and outfit planning',
      'Style inspiration from fashion influencers and trends'
    ],
    longDescription: 'Dresscode AI is your personal style assistant that helps you improve your fashion choices through AI-powered feedback. Simply upload photos of your outfits and receive detailed suggestions on how to enhance your look. The app tracks your style journey over time, maintaining a digital wardrobe of your outfits and showing your progress as you refine your personal style. With more exciting features in development, Dresscode AI aims to be your go-to fashion companion for building confidence in your clothing choices.'
  },
  {
    id: 'coming-soon-1',
    status: 'coming-soon',
    title: 'Coming Soon',
    description: 'We\'re working on exciting new AI applications. Stay tuned for more innovative solutions from Seagull Technologies.',
    logo: '/images/logos/coming-soon-logo.png',
    icon: <FaRobot />,
    features: [
      'Innovative AI technology',
      'User-friendly interface',
      'Solving real-world problems',
      'Enhanced user experience',
      'Regular updates and improvements'
    ],
    longDescription: 'We are currently developing our next innovative AI application. This upcoming project will leverage cutting-edge artificial intelligence to solve real-world problems in a user-friendly way. Our team of experts is working hard to create a solution that will enhance user experiences and deliver exceptional value. Stay tuned for more information as we get closer to launch.'
  },
  {
    id: 'coming-soon-2',
    status: 'coming-soon',
    title: 'Coming Soon',
    description: 'We\'re working on exciting new AI applications. Stay tuned for more innovative solutions from Seagull Technologies.',
    logo: '/images/logos/coming-soon-logo.png',
    icon: <FaCloud />,
    features: [
      'Innovative AI technology',
      'User-friendly interface',
      'Solving real-world problems',
      'Enhanced user experience',
      'Regular updates and improvements'
    ],
    longDescription: 'We are currently developing our next innovative AI application. This upcoming project will leverage cutting-edge artificial intelligence to solve real-world problems in a user-friendly way. Our team of experts is working hard to create a solution that will enhance user experiences and deliver exceptional value. Stay tuned for more information as we get closer to launch.'
  }
];

export default apps; 