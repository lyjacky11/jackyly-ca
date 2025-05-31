// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import axios from 'axios';
// const API_URL = "https://username.github.io/jsons/projects.json";

// export default async function handler(req, res) {
//   try {
//     const { data } = await axios.get(API_URL);
//     res.status(200).json(data);
//   }
//   catch(err) {
//     res.status(404).json(err);
//   }
// }

import projectsFile from "../../../projects.json";

export default function handler(req, res) {
    const projects = JSON.stringify(projectsFile);
    res.status(200).json(projects);
}
