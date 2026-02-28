import { useEffect } from 'react'

function Status({age}) {

  useEffect(() => {
    console.log('User age: ', age);

    if (age < 20 && age >= 18) {
        alert('You are a teenager you are ' + age + 'yrs old');
        return;
    }

    if (age > 20 && age > 65) {
       alert('You are an adult you are ' + age + 'yrs old');
       return;
    }
  }, [age])  
  return (
    <div>
        <p>Age: {age}</p>
    </div>
  )
}

export default Status