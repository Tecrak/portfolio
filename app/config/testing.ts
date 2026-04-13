type skillLvlKey = "Confident" | "High" | "Moderate" | "Bad";
type skillStageKey = "Completed" | "Active" | "InPlan" | "None";

const skillLVL: Record<skillLvlKey, { text: string; color: string }> = {
  Confident: { text: "Confident", color: "rgb(44, 44, 242)" },
  High: { text: "High", color: "rgb(100, 173, 90)" },
  Moderate: { text: "Moderate", color: "rgb(253, 165, 2)" },
  Bad: { text: "Bad", color: "rgb(255, 0, 0)" },
};

const skillStage: Record<skillStageKey, { text: string; color: string }> = {
  Completed: { text: "Completed", color: "rgb(180, 4, 255)" },
  Active: { text: "Active", color: "rgb(255, 234, 0)" },
  InPlan: { text: "In Plan", color: "rgb(0, 255, 208)" },
  None: { text: "None", color: "rgb(138, 138, 138)" },
};

type SkillEntry = {
  skillName: string;
  lvl: skillLvlKey;
  stage: skillStageKey;
};

function resolveSkills(list: SkillEntry[]) {
  return list.map(({ lvl, stage, ...rest }) => ({
    ...rest,
    lvl: skillLVL[lvl],
    stage: skillStage[stage],
  }));
}

export const SKILLS_LIST = resolveSkills([
  { skillName: "HTML", lvl: "Confident", stage: "Completed" },
  { skillName: "CSS", lvl: "Confident", stage: "Completed" },
  { skillName: "JS", lvl: "Confident", stage: "Completed" },
  { skillName: "React", lvl: "High", stage: "Active" },
  {
    skillName: "React Frameworks(Route, Query, etc.)",
    lvl: "Moderate",
    stage: "Active",
  },
  { skillName: "Typescript", lvl: "High", stage: "Active" },
  { skillName: "Node.JS", lvl: "Moderate", stage: "Active" },
  { skillName: "Next.JS", lvl: "Moderate", stage: "Active" },
  {
    skillName: "Databases(MongoDB, PostgreSQL, MySQL)",
    lvl: "Moderate",
    stage: "Active",
  },
  { skillName: "Rest API", lvl: "Moderate", stage: "Active" },
  { skillName: "Git", lvl: "Moderate", stage: "Active" },
  { skillName: "Figma & Sketch", lvl: "Moderate", stage: "InPlan" },
  { skillName: "Vite", lvl: "Confident", stage: "Completed" },
]);
