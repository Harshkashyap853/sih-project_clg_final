import fitnessImg from '../../Assets/Dumbbell-Row.gif';
import image1 from '../../Assets/40-60/40-60/40-60/bodyweight-squat.gif';
import image2 from '../../Assets/40-60/40-60/40-60/Incline-Push-Up.gif';
import image3 from '../../Assets/40-60/40-60/40-60/Dumbbell-Row.gif';
import image4 from '../../Assets/40-60/40-60/40-60/Band-Single-Arm-Shoulder-Press.gif';
import image5 from '../../Assets/40-60/40-60/40-60/planks.gif';
import image6 from '../../Assets/40-60/40-60/40-60/Barbell-Deadlift.gif';
import image7 from '../../Assets/40-60/40-60/40-60/Step-up.gif';
import image8 from '../../Assets/40-60/40-60/40-60/Glute-Bridge-.gif';
import image9 from '../../Assets/40-60/40-60/40-60/Side-Plank-Knee-to-Elbow-.gif';
import image10 from '../../Assets/40-60/40-60/40-60/Bird-Dog.gif';
import image11 from '../../Assets/40-60/40-60/40-60/Chest-Press-Machine.gif';
import breakfast from '../../Assets/breakfast.jpg';
import lunch from '../../Assets/lunch.jpg';
import snacks from '../../Assets/snacks.jpg';
import dinner from '../../Assets/dinner.jpg';
const exercises = [
  {
    id: 1,
    title: "Bodyweight Squats or Goblet Squats",
    description: "Targeted muscle group: Quads, hamstrings, glutes, core. How to perform: Stand with feet shoulder-width apart. Lower your hips like sitting in a chair, then push through your heels to return to standing. Use a dumbbell for added resistance in goblet squats.",
    image: image1, // Add an image if available
  },
  {
    id: 2,
    title: "Incline Push-ups",
    description: "Targeted muscle group: Chest, shoulders, triceps, core. How to perform: Place your hands on an elevated surface like a bench or wall. Lower your chest to the surface, then push yourself back up, keeping your body straight.",
    image: image2, // Add an image if available
  },
  {
    id: 3,
    title: "Dumbbell Rows",
    description: "Targeted muscle group: Upper back, shoulders, biceps. How to perform: Lean forward with one hand on a bench. Pull a dumbbell toward your waist, then lower it back down.",
    image: image3, // Add an image if available
  },
  {
    id: 4,
    title: "Resistance Band Shoulder Press",
    description: "Targeted muscle group: Shoulders, upper arms. How to perform: Stand on a resistance band, hold the handles at shoulder height, and press upward. Lower the band back to shoulder height.",
    image: image4, // Add an image if available
  },
  {
    id: 5,
    title: "Planks",
    description: "Targeted muscle group: Core, shoulders, glutes. How to perform: Hold a push-up position with your forearms on the ground and body straight. Tighten your core and hold the position.",
    image: image5, // Add an image if available
  },
  {
    id: 6,
    title: "Deadlifts (Light Weights)",
    description: "Targeted muscle group: Hamstrings, glutes, lower back. How to perform: Stand with feet shoulder-width apart, holding weights. Hinge at your hips, lowering the weights toward the floor, then return to standing by squeezing your glutes.",
    image: image6, // Add an image if available
  },
  {
    id: 7,
    title: "Step-ups",
    description: "Targeted muscle group: Quads, glutes, hamstrings. How to perform: Step one foot onto a bench or platform, push through your heel to stand up fully, then step back down. Switch legs after each set.",
    image: image7, // Add an image if available
  },
  {
    id: 8,
    title: "Glute Bridges",
    description: "Targeted muscle group: Glutes, hamstrings, lower back. How to perform: Lie on your back with knees bent. Lift your hips toward the ceiling, squeeze your glutes, then lower your hips back down.",
    image: image8, // Add an image if available
  },
  {
    id: 9,
    title: "Side Plank",
    description: "Targeted muscle group: Core (obliques), shoulders, glutes. How to perform: Lie on your side with one forearm on the ground. Lift your hips off the ground, forming a straight line, and hold.",
    image: image9, // Add an image if available
  },
  {
    id: 10,
    title: "Bird-Dog (Core)",
    description: "Targeted muscle group: Core, lower back, glutes. How to perform: Start on hands and knees. Extend one arm and the opposite leg out straight, then return to the starting position and switch sides.",
    image: image10, // Add an image if available
  },
  {
    id: 11,
    title: "Chest Press Machine",
    description: "Targeted muscle group: Chest, shoulders, triceps. How to perform: Sit at a chest press machine, grip the handles, and push them forward until your arms are fully extended. Slowly return to the starting position.",
    image: image11, // Add an image if available
  },
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
