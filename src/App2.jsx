import './App.css'

const App = () => {
  
  const myInfo ={
    name: "Nicholas Riegel",
    profession: "Web Developer",
  }

  const mySkills = [
    {
      name:'JavaScript',
      comfort: 6,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 5,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 6,
      frontEnd: true,
      backend: false
    },
    {
      name:'EJS',
      comfort: 5,
      frontEnd: true,
      backend: false
    },
    {
      name:'MongoDB',
      comfort: 5,
      frontEnd: false,
      backend: true
    },
    {
      name:'Express.js',
      comfort: 6,
      frontEnd: true,
      backend: false
    },
    {
      name:'Mongoose',
      comfort: 6,
      frontEnd: false,
      backend: true
    },
    {
      name:'React',
      comfort: 5,
      frontEnd: true,
      backend: false
    },
    
  ]

  return (
    <>
      <h1>{myInfo.name}</h1>
      <h2>{myInfo.profession}</h2>
      <h3>Skills:</h3>
      <h4>Frontend:</h4>
      <ul>
        {mySkills.map((x, i) => {
            if (x.frontEnd){
                return <li key={i}>{x.name} - Comfort Level: {x.comfort}/10</li>
            }
        })}
      </ul>
      <h4>Backend:</h4>
      <ul>
        {mySkills.map((x, i) => {
            if (x.backend){
                return <li key={i}>{x.name} - Comfort Level: {x.comfort}/10</li>
            }
        })}
      </ul>
    </>
  )
}

export default App;