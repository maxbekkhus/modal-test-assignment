import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import ReworkModal from 'src/components/domain/ReworkModal';
import { FETCH_RANKS } from 'src/services/paths'
import { fetchRanks } from 'src/services/rankService'
import useSWR from 'swr';

const Home: NextPage = () => {
  const { data, error } = useSWR(FETCH_RANKS, fetchRanks);
  const [modalHidden, setModalHidden] = useState<boolean>(false);
  const router = useRouter();

  const userElo = useMemo<number | null>(() => {
    const { query } = router;

    const arg = parseInt(query.userElo as string);
    
    return isNaN(arg) ? null: arg; 
  }, [router]);

  if(error) {
    alert('Fetch error');
  }

  if(!data || userElo === null) {
    return null;
  }
  
  return (
    <ReworkModal 
      isOpen={data && !modalHidden} 
      close={() => setModalHidden(true)}
      ranks={data}
      userElo={userElo}
    />
  )
}

export default Home
