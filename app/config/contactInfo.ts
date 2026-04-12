export type LinkType = "external" | "email" | "none";
export type ContactInfo = {
  icon: string;
  label: string;
  linkType?: LinkType;
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "https://imgs.search.brave.com/Z2vVXN_r9aQnWXW0gaGqawy5HibDtKTRK9-l0Dc8odU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZnJlZS1jb2xv/cmZ1bC1pY29ucy8z/NjAvZ21haWwucG5n",
    label: "stasponomarchuk@gmail.com",
    linkType: "email",
  },
  {
    icon: "https://marketplace.canva.com/xohZQ/MAEquFxohZQ/1/tl/canva-house-flat-icon-MAEquFxohZQ.png",
    label: "Mittelberger Straße , 32, 96472, Rödental (Germany)",
  },
  {
    icon: "https://imgs.search.brave.com/C5FDVEPxFH9YOmXz5blawVWUukYSika69QSaCVO5qPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9saW5rZWRp/bi1zcXVhcmUtaWNv/bi5zdmc",
    label: "linkedin.com/in/ponstoone",
    linkType: "external",
  },
  {
    icon: "https://imgs.search.brave.com/0tvqARyb-HWrdphV16BU2lm3qJ8BfJRenutkWL6yD7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdGh1Yi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMzA3Mzc2/OC5wbmc_Zj13ZWJw/Jnc9MTI4",
    label: "github.com/Tecrak",
    linkType: "external",
  },
];
