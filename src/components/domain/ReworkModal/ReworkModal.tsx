import React, { FC } from 'react';
import Image from 'next/image';

import Modal, { ModalProps } from 'src/components/generic/Modal';
import Paragraph from 'src/components/generic/Paragraph';
import { 
  SButtonContainer,
  SHeaderContainer, 
  SHeaderTextContainer, 
  SRankContainer
} from './styled';

import headerImg from '../../../../public/images/ranking_header_popover.png';
import textLabels from 'src/resources/texts.json';
import List from 'src/components/generic/List';


type ReworkModalProps = ModalProps;

const ReworkModal: FC<ReworkModalProps> = ({
  children,
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
      <SRankContainer/>
      <SButtonContainer/>
    </Modal>
  )
}

export default ReworkModal;