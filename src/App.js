import logo from './logo.svg';
import './App.css';
import CourseCardEmbed from './CourseCardEmbed';
import CourseCard from './components/CourseCard/CourseCard'

function App() {
  return (


    <div className="App">
      {/* <CourseCard
      title="React for Beginner"
      instructor="John Doe"
      isEnrolled={false}
      rating={4.5}
      />
      <CourseCard
      title="Advanced JavaScript"
      instructor="Jane Smith"
      isEnrolled={true}
      /> */}
      <CourseCard title="Typescript Basic" description= "Typescript description" number={10}/>
      <CourseCard title="JAVA Basic" description= "JAVA description" number={12}/>
      <CourseCard title="Redux Basic" description= "Redux description" number={6}/>
      <CourseCard title=".NET Basic" description= ".NET description" number={30}/>
      <CourseCardEmbed />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
