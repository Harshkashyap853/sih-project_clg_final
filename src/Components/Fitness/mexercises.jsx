import fitnessImg from '../../Assets/Dumbbell-Row.gif';
import image1 from '../../Assets/yoga flexibilty/yoga flexibilty/mental fitness exer/meditation.gif';
import image2 from '../../Assets/yoga flexibilty/yoga flexibilty/mental fitness exer/pranayama.gif';

const exercises = [
  {
    id: 1,
    title: "Meditation",
    description: "",
    image: image1, // Add an image if available
  },
  {
    id: 2,
    title: "Pranayam",
    description: "",
    image: image2, // Add an image if available
  },
  
];

const randomexercises = exercises.sort(() => Math.random() - 0.5).slice(0, 3);

export { exercises, randomexercises };
