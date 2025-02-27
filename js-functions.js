// 1. Check Email Function is checking if email is correct

function validate(email) {
  return /\S+@\S+\.\S+/.test(email);
}

console.log(validate("tester@testing.com"));
console.log("invalid-email");

// 2. Picks raandom video from my favorites

const favClips = [
  "https://www.youtube.com/embed/G6eMBvSiOq0",
  "https://www.youtube.com/embed/qmAHP90yhQs",
  "https://www.youtube.com/embed/q3Xiyzn5Em0",
  "https://www.youtube.com/embed/mPN0ylFEaFo",
  "https://www.youtube.com/embed/s7HcPvTew_4",
];

function getRandomClip() {
  const idx = Math.floor(Math.random() * favClips.length);
  return favClips[idx];
}

console.log(`${getRandomClip()}`);

// 3. Add total years of skills

const skills = [
  { skill: "Python", years: 1 },
  { skill: "JavaScript", years: 1 },
  { skill: "HTML & CSS", years: 1 },
  { skill: "Coax Termination", years: 5 },
  { skill: "Fiber Termination", years: 3 },
  { skill: "Cat5e+ Termination", years: 4 },
  { skill: "Cable Management", years: 5 },
  { skill: "Customer Service", years: 9 },
];

function totalYears() {
  return skills.reduce((total, skill) => total + skill.years, 0);
}

console.log(`${totalYears()}`);

// 4. add Feedback from user

let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}
console.log(addFeedback("Great website!"));
console.log(addFeedback("Loved your site."));

// 5. Correct grammar in names

function grammar(name) {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(grammar("jAne doE"))
console.log(grammar("JOhn dOE"))
