import fitnessImg from '../../Assets/Dumbbell-Row.gif';
import image1 from '../../Assets/yoga flexibilty/yoga flexibilty/yoga flexibilty/Badhakonasana-Butterfly-Pose-1.gif';
import image2 from '../../Assets/yoga flexibilty/yoga flexibilty/yoga flexibilty/savasanah_justlaying-5c547a3546e0fb00012b9e25.jpg';
import image3 from '../../Assets/yoga flexibilty/yoga flexibilty/yoga flexibilty/sukhasana.jpeg';
import image4 from '../../Assets/yoga flexibilty/yoga flexibilty/yoga flexibilty/Ustrasana.gif';
const exercises = [
  {
    id: 1,
    title: "Badhakonasana-Butterfly-Pose",
    description: " ",
    image: image1, // Add an image if available
  },
  {
    id: 2,
    title: "savasanah",
    description: " ",
    image: image2, // Add an image if available
  },
  {
    id: 3,
    title: "sukhasana",
    description: "",
    image: image3, // Add an image if available
  },
  {
    id: 4,
    title: "Ustrasana",
    description: " ",
    image: image4, // Add an image if available
  },
];

const randomexercises = exercises.sort(() => Math.random() - 0.5).slice(0, 3);



export { exercises, randomexercises };
