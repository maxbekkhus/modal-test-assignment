import React, { FC } from 'react';
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

type ReworkModalProps = {
  isOpen: boolean;
  close: () => void;
} & PrelimRankProps;

const ReworkModal: FC<ReworkModalProps> = ({
  userElo,
  ranks,
  ...modalProps
}) => {
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
      <SButtonContainer/>
    </Modal>
  )
}

export default ReworkModal;