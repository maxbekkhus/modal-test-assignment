import React, { FC, useCallback } from 'react';
import { SList, SListItem } from './styled';
import ArrowVector from '../vectors/ArrowVector';

type ListProps = {
  items: string[]
};

const List: FC<ListProps> = ({ items }) => {
   
  const renderItems = useCallback(() => {
    return items.map((item) => (
      <SListItem key={item} >
        <ArrowVector />
        {item}
      </SListItem>
    ))
  }, [items]);

  return (
    <SList>
      {renderItems()}
    </SList>
  )
}

export default List;