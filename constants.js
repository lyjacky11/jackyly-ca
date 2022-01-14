const devEnv = process.env.NODE_ENV !== 'production';
const localServer = 'http://localhost:3000';
const remoteServer = 'https://jackyly.ca';

export const serverUrl = devEnv ? localServer : remoteServer;

export const contactUrl = 'mailto:jacky@jackyly.ca';
export const gitHubUrl = 'https://github.com/lyjacky11';
export const linkedinUrl = 'https://www.linkedin.com/in/lyjacky11';
export const resumeUrl = '/resume/jacky-ly-resume.pdf';

export const pageTitle = 'Jacky Ly | Ryerson CS Co-op';
export const pageDesc = 'Hi there! I am Jacky Ly, a co-op student studying Computer Science at Ryerson University. Check out my projects on GitHub! - @lyjacky11';
export const pageAuthor = 'Jacky Ly';
export const pageTheme = '#1A3A59';

export const faviconUrl = '/favicon.ico';
export const imageUrl = serverUrl + '/img/cover.png';