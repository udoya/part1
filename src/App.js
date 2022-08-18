import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todolist";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} ! You are {props.age} years old
      </p>
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  const { course } = props;
  return <h1>{course.name}</h1>;
};

const Content = (props) => {
  console.log(props);
  const { course } = props;

  return (
    <div>
      {course.parts.map((part) => {
        return (
          <div key={part.name}>
            <p>{part.name}</p>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  console.log("hello world");
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
      {
        name: "Redux",
        exercises: 11,
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header course={course} />
        <Content course={course} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <TodoList />
        <input type="text" />
        <button>asahi</button>
      </header>
    </div>
  );
};

export default App;

//test
