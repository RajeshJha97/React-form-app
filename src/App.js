import { useState } from 'react';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      const newPerson = {
        firstName: person.firstName,
        email: person.email,
      };
      setPeople((people) => {
        return [...people, newPerson];
      });
      setPerson({ firstName: '', email: '', age: '' });
    } else {
      console.log('empty value');
    }
  };
  return (
    <>
      <article className='flex justify-center items-center h-screen bg-blue-200'>
        <form onSubmit={submitHandler}>
          <div className='m-2 bg-white'>
            <label htmlFor='firstName' className='m-2'>
              Name:
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='m-1 transition hover:bg-blue-100 hover:scale-105 duration-300'
              value={person.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className='m-2 bg-white'>
            <label htmlFor='email' className='m-2'>
              Email:
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className='m-1 transition hover:bg-blue-100 hover:scale-105 duration-300'
              value={person.email}
              onChange={changeHandler}
            />
          </div>
          <button
            type='submit'
            className='m-4 p-2 border border-blue-300 rounded-lg bg-black text-white font-mono transition  hover:scale-105 duration-300'
          >
            Add Person
          </button>
          <section className='bg-blue-100 ml-2 mr-2'>
            <main className='mb-2'>
              {people.map((person) => {
                return (
                  <>
                    <article className='m-1 bg-slate-100 rounded-sm transition hover:bg-blue-100 scale-105 duration-300'>
                      <p>{person.firstName}</p>
                      <p>{person.email}</p>
                    </article>
                  </>
                );
              })}
            </main>
          </section>
        </form>
      </article>
    </>
  );
}

export default App;
