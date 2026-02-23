function GrandParent(){
  const user = { name: 'john doe', age: 25}
     return <Parent user={user} />
}

function Parent({user}){
    return <Child  user={user} />
}

function Child({user}) {
    return <h2>hello, {user.name}</h2>
}

//? Why Props Drilling Can Be a Problem:
// It makes the code less readable
// Updating data in deeply nested components becomes harder


// ✅ Solutions:
// Use Context API to avoid drilling
// Use State Management Libraries (like Redux)