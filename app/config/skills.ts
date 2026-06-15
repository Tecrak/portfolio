type skillLvlKey = "Confident" | "High" | "Moderate" | "Bad";
type skillStageKey = "Completed" | "Active" | "InPlan" | "None";

export const skillLVL: Record<skillLvlKey, { text: string; color: string }> = {
  Confident: { text: "Confident", color: "rgb(255, 6, 251)" },
  High: { text: "High", color: "rgb(100, 173, 90)" },
  Moderate: { text: "Moderate", color: "rgb(253, 165, 2)" },
  Bad: { text: "Bad", color: "rgb(255, 0, 0)" },
};

export const skillStage: Record<
  skillStageKey,
  { text: string; color: string }
> = {
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
    skillName: "React Frameworks",
    lvl: "High",
    stage: "Active",
  },
  {
    skillName: "React Query",
    lvl: "High",
    stage: "Active",
  },
  {
    skillName: "React Route",
    lvl: "High",
    stage: "Active",
  },
  { skillName: "Typescript", lvl: "High", stage: "Active" },
  { skillName: "Node.JS", lvl: "High", stage: "Active" },
  { skillName: "AI Promts", lvl: "Confident", stage: "Completed" },
  { skillName: "Next.JS", lvl: "High", stage: "Active" },
  { skillName: "Next-intl", lvl: "Confident", stage: "Active" },
  {
    skillName: "MongoDB",
    lvl: "High",
    stage: "Active",
  },
  {
    skillName: "PostgreSQL",
    lvl: "High",
    stage: "Active",
  },
  {
    skillName: "MySQL",
    lvl: "High",
    stage: "Active",
  },
  { skillName: "Rest API", lvl: "High", stage: "Active" },
  { skillName: "Git", lvl: "Moderate", stage: "Active" },
  { skillName: "Figma & Sketch", lvl: "Moderate", stage: "InPlan" },
  { skillName: "Vite", lvl: "Confident", stage: "Completed" },
  { skillName: "Python", lvl: "Bad", stage: "InPlan" },
  { skillName: "PhP", lvl: "Bad", stage: "InPlan" },
  { skillName: "Java", lvl: "Moderate", stage: "InPlan" },
  { skillName: "Docker", lvl: "Moderate", stage: "Active" },
  { skillName: "ASP.NET", lvl: "Moderate", stage: "Active" },
  { skillName: "Tanstack", lvl: "Moderate", stage: "Active" },
]);
