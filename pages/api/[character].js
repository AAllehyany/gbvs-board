import {firestore} from '../../lib/firebase';

export default async function(req, res) {
    const { character } = req.query;

    const characters = await fetch(`http://localhost:3030/matches/${character}`);
    const json = await characters.json();
    const data = json.fights.map(doc => {
        return {
            video: `https://youtube.com/watch?v=${doc.video}`,
            characters: doc.characters,
            date: doc.date,
            id: doc._id
        }
    });

    res.status(200).json(data);
}