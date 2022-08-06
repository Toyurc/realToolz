import { BaseButton } from './Buttons.styles';

export enum ButtonColors {
  white = '#FFFFFF',
  black = '#000103',
  yellow = '#FFCE31',
  blue = '#1849C6',
}

export type ButtonProps = {
  color: ButtonColors;
  background: ButtonColors;
  children: React.ReactNode;
  padding?: string;
};

const Button = (props: ButtonProps) => {
  return <BaseButton {...props}>{props.children}</BaseButton>;
};

export default Button;
