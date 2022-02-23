import React, { FC, useCallback } from 'react';
import Image from 'next/image';

import Modal, { ModalProps } from 'src/components/generic/Modal';
import Paragraph from 'src/components/generic/Paragraph';
import { 
  SButtonContainer,
  SHeaderContainer, 
  SHeaderTextContainer
} from './styled';

import headerImg from '../../../../public/images/ranking_header_popover.png';
import textLabels from 'src/resources/texts.json';
import List from 'src/components/generic/List';
import PrelimRank, { PrelimRankProps } from '../PrelimRank/PrelimRank';
import Button from 'src/components/generic/Button';
import ArrowVector from 'src/components/generic/vectors/ArrowVector';

type ReworkModalProps = {
  isOpen: boolean;
  close: () => void;
} & PrelimRankProps;

const ReworkModal: FC<ReworkModalProps> = ({
  userElo,
  ranks,
  ...modalProps
}) => {
  const onClickReadMore = useCallback(() => alert('Read more about our update here'), []);
  const onClickStart = useCallback(() => alert('Start placement matches'), []);

  return (
    <Modal
      {...modalProps}
    >
      <SHeaderContainer>
        <Image
          src={headerImg}
          priority
        />
        <SHeaderTextContainer>
          <Paragraph center>
            {textLabels.paragraph}
          </Paragraph>
          <List items={textLabels.list} />
        </SHeaderTextContainer>
      </SHeaderContainer>
      <PrelimRank userElo={userElo} ranks={ranks} />
      <SButtonContainer>
        <Button secondary onClick={onClickReadMore}>
          Read more about our update here
        </Button>
        <Button onClick={onClickStart}>
          Start Placement Matches
          <ArrowVector/>
        </Button>
      </SButtonContainer>
    </Modal>
  )
}

export default ReworkModal;