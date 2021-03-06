import projects from '../../../projects.json';

export default function handler(req, res) {
    const { id } = req.query;
    const filtered = projects.filter((project) => project.id === parseInt(id));
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    }
    else {
        res.status(404).json({message: `Project ${id} not found.` })
    }
}