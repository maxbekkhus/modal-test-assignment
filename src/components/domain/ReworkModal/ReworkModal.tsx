import React, { FC, useCallback } from 'react';
import Image from 'next/image';

import Modal from 'src/components/generic/Modal';
import Paragraph from 'src/components/generic/Paragraph';
import { 
  SButtonContainer,
  SHeaderContainer, 
  SHeaderTextContainer,
  SReworkModal
} from './styled';

import headerImg from '../../../../public/images/ranking_header_popover.png';
import textLabels from 'src/resources/texts.json';
import List from 'src/components/generic/List';
import PrelimRank, { PrelimRankProps } from '../PrelimRank/PrelimRank';
import Button from 'src/components/generic/Button';
import ArrowVector from 'src/components/generic/vectors/ArrowVector';

import jsonTexts from 'src/resources/texts.json';

type ReworkModalProps = {
  isOpen: boolean;
  close: () => void;
} & PrelimRankProps;

const ReworkModal: FC<ReworkModalProps> = ({
  userElo,
  ranks,
  ...modalProps
}) => {
  const onClickReadMore = useCallback(() => alert(jsonTexts.buttons.readMore), []);
  const onClickStart = useCallback(() => alert(jsonTexts.buttons.startPlaying), []);

  return (
    <Modal
      {...modalProps}
    >
      <SReworkModal>
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
            {jsonTexts.buttons.readMore}
          </Button>
          <Button onClick={onClickStart}>
            {jsonTexts.buttons.startPlaying}
            <ArrowVector/>
          </Button>
        </SButtonContainer>
      </SReworkModal>
    </Modal>
  )
}

export default ReworkModal;