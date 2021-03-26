import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import {format} from 'date-fns';
import Match from '../components/Match';

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3030/matches`);
  const data = await res.json();
  return {
      props: {
          fights: data
      }
  }
}


export default function Home({fights}) {

  const [matches, setMatches] = useState(fights);
  const [character, setCharacter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [canLoad, setCanLoad] = useState(true);
  const [doneLoading, setDoneLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setCanLoad(true);
    setDoneLoading(false);
    const res = await fetch(`http://localhost:3030/matches?character=${character}&page=${currentPage}`);
    const data = await res.json();

    setMatches(data);
  }

  const loadMore = async () => {
    setCanLoad(false);
    try {
      const nextPage = currentPage + 1;
      const res = await fetch(`http://localhost:3030/matches?character=${character}&page=${nextPage}`);
      const data = await res.json();

      if(data.length == 0) {
        setCanLoad(false);
        setDoneLoading(true);
        return;
      } 

      setCanLoad(true);
      setCurrentPage(nextPage);
      setMatches(matches.concat(data));

    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      
      <div className="flex justify-center">
          <form className="flex w-full justify-center lg:w-1/3 mb-5 items-end" onSubmit={handleSearch}>
            <input type="text" placeholder="filter by character"
              onChange={e => setCharacter(e.target.value)}
              className="w-4/5 p-3 text-gray-600 border-b border-gray-400 focus:outline-none hover:border-gray-600 focus:border-gray-900
              focus:text-gray-800"/>
            <button className="p-2 w-1/5 bg-gray-600 text-gray-200 text-md">Search</button>
          </form>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 w-3/4">
          {matches.map( fight => <Match fight={fight} />)}
        </div>
      </div>
      <div className="flex justify-center mt-3 p-3">
        {canLoad && <button onClick={loadMore} className="w-3/4 p-3 bg-green-300 text-md text-white rounded-md">Load More...</button>}
      </div>
    </Layout>
  )
}
