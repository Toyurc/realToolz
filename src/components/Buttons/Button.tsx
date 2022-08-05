import { BaseButton } from './Buttons.styles';

enum ButtonColors {
  white = '#FFFFFF',
  black = '#000103',
  yellow = '#FFCE31',
  blue = '#1849C6',
}

export type ButtonProps = {
  color: ButtonColors;
  background: ButtonColors;
};

const Button = (props: ButtonProps) => {
  return <BaseButton {...props}>Button</BaseButton>;
};

export default Button;
