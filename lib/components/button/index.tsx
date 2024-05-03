import * as stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

const styles = stylex.create({
  button: {
    color: 'red',
  },
});

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button {...stylex.props(styles.button)}>{children}</button>;
};
