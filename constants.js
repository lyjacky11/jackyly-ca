const devEnv = process.env.NODE_ENV !== "production";
const localServer = "http://localhost:3000";
const remoteServer = "https://jackyly.ca";

export const serverUrl = devEnv ? localServer : remoteServer;

export const email = "jacky@jackyly.ca";
export const contactUrl = "mailto:" + email;
export const gitHubUrl = "https://github.com/lyjacky11";
export const projectsUrl = gitHubUrl + "?tab=repositories";
export const linkedinUrl = "https://www.linkedin.com/in/lyjacky11";

const localResume = "/resume/jacky-ly-resume.pdf";
const gDocsResume =
    "https://docs.google.com/viewer?url=" +
    remoteServer +
    localResume +
    "&embedded=true";
export const resumeUrl = devEnv ? localResume : gDocsResume;

export const pageAuthor = "Jacky Ly";
export const pageTitle = pageAuthor + " | Software Engineer";
export const pageDesc =
    "Hi there, I'm Jacky, a software engineer graduate! Check out my projects on GitHub! - @lyjacky11";
export const pageTheme = "#1A3A59";

export const avatarUrl = "/img/profile.png";
export const faviconUrl = "/favicon.ico";
export const imageUrl = remoteServer + "/img/cover.png";
