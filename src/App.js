import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const handleBacksapce = (e) => {
    setResult(result.slice(0, -1))
  }

  const handleClear = (e) => {
    setResult("")
  }

  const calculate = (e) => {
    e.preventDefault()
    var calcString = result.replace(/[^-()\d/*+.]/g, '');
    setResult(eval(calcString))
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { value } = e.target
    setResult(value)
  }

  return (
    <div className="bg-dark-900 flex flex-col items-center justify-center h-screen w-screen">
      <main className='rounded-lg bg-dark shadow-lg p-4'>
        <form className='w-full space-y-4' onSubmit={calculate}>
          <input onChange={handleChange} type="text" className='w-full py-4 px-4 tracking-widest text-xl text-right' placeholder='Type or Select...' value={result} />
          <div className="grid grid-cols-4 gap-2">
            <button type="button" onClick={handleClear} className='functionButtons col-span-2'>Clear</button>
            <button type="button" onClick={handleBacksapce} className='functionButtons'>C</button>

            <button type="button" name='/' onClick={handleClick} className='functionButtons'>&divide;</button>
            <button type="button" name='7' onClick={handleClick} className='keypadButtons'>7</button>
            <button type="button" name='8' onClick={handleClick} className='keypadButtons'>8</button>
            <button type="button" name='9' onClick={handleClick} className='keypadButtons'>9</button>
            <button type="button" name='*' onClick={handleClick} className='functionButtons'>&times;</button>

            <button type="button" name='4' onClick={handleClick} className='keypadButtons'>4</button>
            <button type="button" name='5' onClick={handleClick} className='keypadButtons'>5</button>
            <button type="button" name='6' onClick={handleClick}
              className='keypadButtons'>6</button>
            <button type="button" name='-' onClick={handleClick} className='functionButtons'>&minus;</button>

            <button type="button" name='1' onClick={handleClick} className='keypadButtons'>1</button>
            <button type="button" name='2' onClick={handleClick} className='keypadButtons'>2</button>
            <button type="button" name='3' onClick={handleClick}
              className='keypadButtons'>3</button>
            <button type="button" name='+' onClick={handleClick} className='functionButtons'>&#43;</button>

            <button type="button" name='0' onClick={handleClick} className='keypadButtons'>0</button>
            <button type="button" name='.' onClick={handleClick} className='keypadButtons'>&#46;</button>
            <button type='submit' className='functionButtons col-span-2'>&#61;</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default App;
