import { ButtonProps } from './types';

export const Button = ({ label }: ButtonProps) => {
  return <button className="bg-slate-900 text-red-800">{label}</button>;
};
