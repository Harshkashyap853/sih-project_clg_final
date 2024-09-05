import image1 from "../../Assets/bodyweight-squat.gif";
import image2 from "../../Assets/Push-Up.gif";
import image3 from "../../Assets/Pull-up.gif";
import image4 from "../../Assets/Weighted-Front-Plank.gif";
import image5 from "../../Assets/Jumping-jack.gif";
import image6 from "../../Assets/Jump-Rope.gif";
import image7 from "../../Assets/Lying-Leg-Raise.gif";
import image8 from "../../Assets/Barbell-Bench-Press.gif";
import image9 from "../../Assets/Dumbbell-Row.gif"
import fitnessImg from '../../Assets/Dumbbell-Row.gif';
import breakfast from '../../Assets/breakfast.jpg';
import lunch from '../../Assets/lunch.jpg';
import snacks from '../../Assets/snacks.jpg';
import dinner from '../../Assets/dinner.jpg';

const exercises = [
  {
    id: 1,
    title: "Squats",
    description: "Targeted muscle group: Quads, hamstrings, glutes, core <br/> How to perform: Stand with feet shoulder-width apart. Lower your hips like sitting in a chair. Push through your heels to return to standing.",
    image: image1,
  },
  {
    id: 2,
    title: "Push-ups",
    description: "Targeted muscle group: Chest, shoulders, triceps, core How to perform: Start in a plank position. Lower your chest to the ground by bending your arms, then push yourself back up, keeping your body straight.",
    image: image2,
  },
  {
    id: 3,
    title: "Pull-Ups (Assited if Needed)",
    description: "Targeted muscle group: Back, shoulders, biceps.  How to perform: Hang from a bar with palms facing away. Pull yourself up until your chin passes the bar, then lower back down. Use assistance if needed.",
     image: image3,
  },
  {
    id: 4,
    title: "Plank",
    description: "Targeted muscle group: Core, shoulders, glutes.  How to perform: Hold a push-up position with your forearms on the ground and body straight. Tighten your core and hold the position.",
    image: image4,
  },
  {
    id: 5,
    title: "Jumping Jacks",
    description: "Targeted muscle group: Full body, especially calves and shoulders (cardio workout). How to perform: Jump feet apart while raising arms overhead, then jump back to the starting position.",
    image: image5,
  },
  {
    id: 6,
    title: "Jump Rope",
    description: "Targeted muscle group: Calves, legs, core (cardio workout). How to perform: Jump over the rope continuously while swinging it around your body for a set amount of time.",
    image: image6,
  },
  {
    id: 7,
    title: "Leg Raises (Core)",
    description: "Targeted muscle group: Lower abs. How to perform: Lie on your back, lift your legs straight up, and lower them slowly without touching the ground.",
    image: image7,
  },
  {
    id: 8,
    title: "Bench Press (Light Weights or Machine)",
    description: "Targeted muscle group: Chest, shoulders, triceps. How to perform: Lie on a bench, press the weights upward from chest level, then lower them back down slowly.",
    image: image8,
  },
  {
    id: 9,
    title: "Dumbbell Rows",
    description: "Targeted muscle group: Upper back, shoulders, biceps. How to perform: Lean forward with one hand on a bench. Pull a dumbbell toward your waist, then lower it back down.",
    image: image9,
  },
];

const randomexercises = exercises.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);

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

const randomdiet = exercises.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);

export { exercises, randomexercises, diet, randomdiet};
