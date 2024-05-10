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

  const projects = [
    {
      title: 'Car Blog', 
      description: 'This is a fully functional car blog, where users can upload pictures and information about their favorite cars, and other users can leave comments on their cars. Users must sign up and sign in to upload cars or comments. The app exemplifies all the actions of a full-stack app: create, read, update, and delete, and persists user information and data in a database (MongoDB)',
      image: './images/carBlog.png',
      url: 'http://18.225.254.20:3002/cars'
    }
  ]

  const frontendSkills = mySkills.map((x, i) => {
    if (x.frontEnd){
      return <li key={i}>{x.name} - {x.comfort}/10</li>
    }
  })
  
  const backendSkills = mySkills.map((x, i) => {
    if (x.backend){
      return <li key={i}>{x.name} - {x.comfort}/10</li>
    }
  })

  return (
    <main>
      <div id="info-container" className='container'>
        <h1>{myInfo.name}</h1>
        <h2>{myInfo.profession}</h2>
        <h3>Skills:</h3>
        <h4>Frontend:</h4>
        <ul>
          {frontendSkills}
        </ul>
        <h4>Backend:</h4>
        <ul>
          {backendSkills}
        </ul>
      </div>
      <div id="projects-title-container" className='container'>
        <h2>Projects</h2>
      </div>
      <div id="project-container" className='container'>
        {projects.map((x, i)=> (
          <div key={i}>
            <div className="description-div">
              <h3>{x.title}</h3>
              <p>{x.description}</p>
            </div>
            <a href={x.url} className="image-div" target='_blank'>
                <img src={x.image} alt="project-image" />
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App;