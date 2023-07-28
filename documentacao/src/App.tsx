import './App.css'

// Aula: https://www.youtube.com/watch?v=tG3Uwvuqzuk&ab_channel=Jo%C3%A3oBibiano

// const Example = (props) => {
//   return <h1>{props.text}</h1>;
// }

// Tipagem: 3 formas para definir tipos

// Forma 1:

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => { // O objeto text é do tipo TitleProps
  return <h1>{text}</h1>;                 
};

// Forma 2:
interface TitleProps2 {
  text: string;  
}

const Title2 = ({ text }: TitleProps2) => { // O objeto text é do tipo TitleProps2
  return <h1>{text}</h1>;                 
};

// Forma 3:
const Title3 = ({ text }: { text: string }) => { // Tem-se um objeto text que é a desestruturação
  return <h1>{text}</h1>;                        // e outro objeto que é o tipo
};

// Como passar o texto como um filho, e não como uma propriedade
const Title4 = ({ children }: { children: React.ReactNode }) => { 
  return <h1>{children}</h1>;                        
};

// Como definir propriedades default
type TitleProps3 = {
  children: React.ReactNode;
  size: "small" | "large";
};

const Title5 = ({ children, size = "large" }: TitleProps3) => { // O objeto text é do tipo TitleProps3
  return (
    <h1 style={{fontSize: size == "small" ? "1.5rem" : "3rem"}}>
      {children}
    </h1>
  );                 
};

// Como compor props (1 Forma)
const Title6 = ({ children, size = "large" }: { children: React.ReactNode; size?: "small" | "large"}) => { // O objeto text é do tipo TitleProps3
  return (
    <h1 style={{fontSize: size == "small" ? "1.5rem" : "3rem"}}>
      {children}
    </h1>
  );                 
};

// Como compor props (2 Forma)
const Title7 = ({ children, size = "large" }: { children: React.ReactNode; size?: "small" | "large"}) => { // O objeto text é do tipo TitleProps3
  return (
    <h1 style={{fontSize: size == "small" ? "1.5rem" : "3rem"}}>
      {children}
    </h1>
  );                 
};

const titleDefaultProps = {
  size: "small"
};

Title7.defaultProps = titleDefaultProps;

function App() {

  return (
    <div className="App">
      <Title text="Hello World" />
      <Title2 text="Hello World" />
      <Title3 text="Hello World" />
      <Title4>
        <span>
          Hello <b>World</b>
        </span>
      </Title4>
      <Title5 size="small">
        <span>
          Hello <b>World</b>
        </span>
      </Title5>
      <Title6 size="small">
        <span>
          Hello <b>World</b>
        </span>
      </Title6>     
      <Title7>
        <span>
          Hello <b>World</b>
        </span>
      </Title7>        
    </div>

  );
}

export default App
