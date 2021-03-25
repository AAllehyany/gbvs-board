// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {firestore} from '../../lib/firebase';

export default async (req, res) => {
  const result = await firestore.collection('matches').get();
  const data = result.docs.map(d => d.data());

  res.status(200).json(data)
}
