import { Colors } from 'components/Buttons/Button';
import React from 'react';
import {
  SectionHeader,
  SectionHeadingText,
  SectionDescription,
} from './SectionHeading.styles';

export type SectionHeadingProps = {
  header: string;
  description: string;
  descriptionColor?: Colors;
  headerColor?: string;
};
const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <SectionHeader>
      <SectionHeadingText headerColor={props.headerColor}>
        {props.header}
      </SectionHeadingText>
      <SectionDescription descriptionColor={props.descriptionColor}>
        {props.description}
      </SectionDescription>
    </SectionHeader>
  );
};

export default SectionHeading;
