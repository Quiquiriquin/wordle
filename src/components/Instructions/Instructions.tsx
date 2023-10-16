import React from 'react'
import SquareInput from '../inputs/SquareInput/SquareInput'
import './_instructions.scss'

const Instructions = () => {
  return (
    <div className='instructions color-black'>
      <div className='instructions--header text-center mb-4'>
        <label className='text-2xl sm:text-3xl font-bold'>Cómo jugar</label>
      </div>
      <div className='instructions--rules mb-4'>
        <ul className='text-sm'>
          <li className='mb-3'>Adivina la palabra oculta en cinco intentos.</li>
          <li className='mb-3'>Cada intento debe ser una palabra válida de 5 letras.</li>
          <li>
            Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás
            de acertar la palabra.
          </li>
        </ul>
      </div>
      <div className='instructions-examples'>
        <label className='block text-sm font-bold'>Ejemplos</label>
        <div className='example flex gap-3'>
          <SquareInput skipGray id='0_0' expectedLetter='g' fixedValue='g' word='GXXXX' evaluate />
          <SquareInput skipGray id='0_1' expectedLetter='o' fixedValue='a' word='GXXXX' evaluate />
          <SquareInput skipGray id='0_2' expectedLetter='m' fixedValue='t' word='GXXXX' evaluate />
          <SquareInput skipGray id='0_3' expectedLetter='a' fixedValue='o' word='GXXXX' evaluate />
          <SquareInput skipGray id='0_4' expectedLetter='l' fixedValue='s' word='GXXXX' evaluate />
        </div>
        <label className='mt-2 text-sm block'>
          La letra <strong>G</strong> está en la palabra y en la posición correcta.
        </label>
      </div>
      <div className='instructions-examples mt-2'>
        <div className='example flex gap-3'>
          <SquareInput skipGray id='7_0' expectedLetter='c' fixedValue='v' word='CXXWP' evaluate />
          <SquareInput skipGray id='7_1' expectedLetter='q' fixedValue='o' word='CXXWP' evaluate />
          <SquareInput skipGray id='7_2' expectedLetter='p' fixedValue='c' word='CXXWP' evaluate />
          <SquareInput skipGray id='7_3' expectedLetter='w' fixedValue='a' word='CXXWP' evaluate />
          <SquareInput skipGray id='7_4' expectedLetter='d' fixedValue='l' word='CXXWP' evaluate />
        </div>
        <label className='mt-2 text-sm block'>
          La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.
        </label>
      </div>
      <div className='instructions-examples mt-2'>
        <div className='example flex gap-3'>
          <SquareInput skipGray id='8_0' expectedLetter='X' fixedValue='c' word='XXXXX' evaluate />
          <SquareInput skipGray id='8_1' expectedLetter='X' fixedValue='a' word='XXXXX' evaluate />
          <SquareInput skipGray id='8_2' expectedLetter='X' fixedValue='n' word='XXXXX' evaluate />
          <SquareInput skipGray id='8_3' expectedLetter='X' fixedValue='t' word='XXXXX' evaluate />
          <SquareInput id='8_4' expectedLetter='X' fixedValue='o' word='XXXXX' evaluate />
        </div>
        <label className='mt-2 text-sm block'>
          La letra <strong>O</strong> no está en la palabra.
        </label>
      </div>
      <div className='instructions-advise mt-4'>
        <label className='block mb-4 text-sm'>
          Puede haber letras repetidas. Las pistas son independientes para cada letra.
        </label>
        <label className='block mb-4 text-sm'>¡Una palabra nueva cada 5 minutos!</label>
      </div>
    </div>
  )
}

export default Instructions
