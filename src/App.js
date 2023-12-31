import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const random = string[Math.floor(Math.random() * string.length)];
  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content={`${random}${random}${random}${random}${random}${random}${random}${random}`}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href={`
            data:image/svg+xml;
            utf8,
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <text font-family="'Dancing Script', cursive" font-size="16" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                ${random}
              </text>
            </svg>
          `}
        />
        <link
          rel="apple-touch-icon"
          href={`
            data:image/svg+xml;
            utf8,
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <text font-family="'Dancing Script', cursive" font-size="16" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                ${random}
              </text>
            </svg>
          `}
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>
          ${random}${random}${random}${random}${random}
        </title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>favicon-test</p>
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
