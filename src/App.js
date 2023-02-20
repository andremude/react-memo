import './App.css';

function App() {

  const Images = [
    "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/java-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/php-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/ruby-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor"
  ]

  return (
    <main className="App">
      {Images.map((image, index) => (
        <img key={index} src={image} alt="icon" />
      ))}
    </main>
  );
}

export default App;
