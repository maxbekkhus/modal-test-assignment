import type { NextPage } from 'next'
import { useState } from 'react';
import ReworkModal from 'src/components/domain/ReworkModal';
import { FETCH_RANKS } from 'src/services/paths'
import { fetchRanks } from 'src/services/rankService'
import useSWR from 'swr';

const Home: NextPage = () => {
  const { data, error } = useSWR(FETCH_RANKS, fetchRanks);
  const [modalHidden, setModalHidden] = useState<boolean>(false);

  if(error) {
    alert('Fetch error');
  }

  if(!data) {
    return null;
  }
  
  return (
    <ReworkModal 
      isOpen={data && !modalHidden} 
      close={() => setModalHidden(true)}
    >
      Hej
    </ReworkModal>
  )
}

export default Home
