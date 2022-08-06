import React from 'react';

type SectionHeadingProps = {
  header: string;
  description: string;
};
const SectionHeading = ({ header, description }: SectionHeadingProps) => {
  return (
    <header>
      <h3>{header}</h3>
      <p>{description}</p>
    </header>
  );
};

export default SectionHeading;
