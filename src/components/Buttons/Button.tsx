import { BaseButton } from './Buttons.styles';

export enum Colors {
  white = '#FFFFFF',
  black = '#000103',
  yellow = '#FFCE31',
  blue = '#1849C6',
}

export type ButtonProps = {
  color: Colors;
  background: Colors;
  children: React.ReactNode;
  padding?: string;
};

const Button = (props: ButtonProps) => {
  return <BaseButton {...props}>{props.children}</BaseButton>;
};

export default Button;
