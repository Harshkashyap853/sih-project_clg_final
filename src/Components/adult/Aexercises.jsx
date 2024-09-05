import image1 from "../../Assets/20 - 40/20 - 40/20 - 40/bodyweight-squat.gif";
import image2 from "../../Assets/20 - 40/20 - 40/20 - 40/Barbell-Romanian-Deadlift.gif";
import image3 from "../../Assets/20 - 40/20 - 40/20 - 40/bodyweight-lunges.gif";
import image4 from "../../Assets/20 - 40/20 - 40/20 - 40/Leg-Press.gif";
import image5 from "../../Assets/20 - 40/20 - 40/20 - 40/Dumbbell-Calf-Raise.gif";
import image6 from "../../Assets/20 - 40/20 - 40/20 - 40/Barbell-Deadlift.gif";
import image7 from "../../Assets/20 - 40/20 - 40/20 - 40/Pull-up.gif";
import image8 from "../../Assets/20 - 40/20 - 40/20 - 40/Barbell-Bent-Over-Row.gif";
import image9 from "../../Assets/20 - 40/20 - 40/20 - 40/Barbell-Romanian-Deadlift.gif";
import image10 from "../../Assets/20 - 40/20 - 40/20 - 40/Face-Pull.gif";
import breakfast from '../../Assets/breakfast.jpg';
import lunch from '../../Assets/lunch.jpg';
import snacks from '../../Assets/snacks.jpg';
import dinner from '../../Assets/dinner.jpg';

import fitnessImg from '../../Assets/Dumbbell-Row.gif';

const exercises = [
  {
    id: 1,
    title: "Squats",
    description: "Targeted muscle group: Quads, glutes, hamstrings. How to perform: Stand with feet shoulder-width apart, lower your body as if sitting back in a chair, then stand back up, keeping your chest up and back straight.",
    image: image1,  // Add an image if you have one
  },
  {
    id: 2,
    title: "Romanian Deadlifts",
    description: "Targeted muscle group: Hamstrings, glutes, lower back. How to perform: Hold a barbell, keep your legs slightly bent, and lower the barbell down your legs by bending at the hips. Return to standing position by pushing your hips forward.",
    image: image2,  // Add an image if you have one
  },
  {
    id: 3,
    title: "Lunges",
    description: "Targeted muscle group: Quads, glutes, hamstrings. How to perform: Step forward with one leg, lower your hips until both knees are bent at 90 degrees, then push back to the starting position.",
    image: image3,  // Add an image if you have one
  },
  {
    id: 4,
    title: "Leg Press",
    description: "Targeted muscle group: Quads, glutes, hamstrings. How to perform: Sit on the leg press machine, place feet shoulder-width apart on the platform, and push the weight up with your legs. Slowly lower it back down.",
    image: image4,  // Add an image if you have one
  },
  {
    id: 5,
    title: "Calf Raises",
    description: "Targeted muscle group: Calves. How to perform: Stand on your toes, raise your heels off the ground, and lower them back down slowly. You can use a step or machine for added difficulty.",
    image: image5,  // Add an image if you have one
  },
  {
    id: 6,
    title: "Deadlifts",
    description: "Targeted muscle group: Lower back, glutes, hamstrings. How to perform: Stand behind a barbell, bend at the hips and knees, grip the bar, and lift it by straightening your legs and back. Lower it back down in a controlled manner.",
    image: image6,  // Add an image if you have one
  },
  {
    id: 7,
    title: "Pull-ups",
    description: "Targeted muscle group: Back, biceps. How to perform: Grab a pull-up bar with palms facing away from you. Pull your body up until your chin is above the bar, then lower back down slowly.",
    image: image7,  // You can add a new image if required
  },
  {
    id: 8,
    title: "Bent-over Rows",
    description: "Targeted muscle group: Back, biceps. How to perform: Bend forward at the waist with a barbell or dumbbells in hand. Pull the weight toward your torso while keeping your back straight, then lower it.",
    image: image8,  // Add an image if you have one
  },
  {
    id: 9,
    title: "Bicep Curls",
    description: "Targeted muscle group: Biceps. How to perform: Hold dumbbells or a barbell with palms facing up. Curl the weight toward your shoulders, then slowly lower it back down.",
    image: image9,  // Add an image if you have one
  },
  {
    id: 10,
    title: "Face Pulls",
    description: "Targeted muscle group: Shoulders (rear deltoids), upper back. How to perform: Use a cable machine with a rope attachment. Pull the rope towards your face, keeping elbows high. Return to the starting position slowly.",
    image: image10,  // Add an image if you have one
  }
];

const randomexercises = exercises.sort(() => Math.random() - 0.5).slice(0, 3);

const diet = [
  {
    id: 1,
    title: "Breakfast",
    description: " ",
    image: breakfast,
  },
  {
    id: 1,
    title: "Lunch",
    description: " ",
    image: lunch,
  },
  {
    id: 1,
    title: "Snacks",
    description: " ",
    image: snacks,
  },
  {
    id: 1,
    title: "Dinner",
    description: " ",
    image: dinner,
  },
];

const randomdiet = diet.sort(() => Math.random() - 0.5).slice(0, 1);

export { exercises, randomexercises, diet, randomdiet };
