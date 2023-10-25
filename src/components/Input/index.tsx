import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

//O extends faz com que eu consiga passar todas as propriedades de um input por exemplo para a minha Props
interface Props extends InputHTMLAttributes<HTMLInputElement>{
  //Nesse caso eu to usando o ?: para mostrar que essa variável é opcional
  isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}