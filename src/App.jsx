import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Button(props) {
  return (
    <button className={props.className} id={props.id}>
      {props.children}
    </button>
  );
}

function Select(props) {
  return (
    <div className="inputs">
      <div>
        <label htmlFor="variant">Variant</label>
        <select
          name="variant"
          value={props.outline}
          id="variant"
          onChange={props.onChange}
        >
          <option value="">Default</option>
          <option value="outline">Outline</option>
          <option value="text">Text</option>
          <option value="secondary">Secondary</option>
          <option value="danger">Danger</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      <div>
        <label htmlFor="size">Size</label>
        <select
          name="size"
          value={props.size}
          id="size"
          onChange={props.onChange}
        >
          <option value="small">Small</option>
          <option value="regular">Regular</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div>
        <label htmlFor="dsd">Disable Shadow</label>
        <input
          type="checkbox"
          name="disableShadow"
          id="dsd"
          onChange={props.onChange}
          required
        />
      </div>

      <div>
        <label htmlFor="store">Store Icon</label>
        <input
          type="checkbox"
          name="store"
          id="store"
          onChange={props.onChange}
          required
        />
      </div>
    </div>
  );
}

function App() {
  const [variant, setVariant] = useState("");
  const [disableShadow, setdisableShadow] = useState("");
  const [size, setSize] = useState("regular");
  const [store, setStore] = useState({ src: "", alt: "" });
  const [text, setText] = useState("Default");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "variant":
        setVariant(value);
        break;
      case "size":
        setSize(value);
        break;
      case "disableShadow":
        e.target.validity.valueMissing
          ? setdisableShadow("")
          : setdisableShadow("disableShadow");
        break;
      case "store":
        e.target.validity.valueMissing
          ? setStore({ src: "", alt: "" })
          : setStore({ src: "./assets/shop.svg", alt: "shopping cart" });
        break;
    }
  }

  function handleChange02(e) {
    const value = e.target.value;
    if (value < 1) {
      setText("Default");
    } else {
      setText(value);
    }
  }

  const classN = `${variant} ${size}`;
  return (
    <main>
      <h1>Style the Button however you like</h1>

      <Button className={classN} id={disableShadow}>
        <img src={store.src} alt={store.alt} className="shop" />
        {text}
      </Button>

      <label className="finallabel">
        Change the Sample Text (10 char)
        <input
        maxLength="12"
          type="text"
          name="text"
          onChange={(e) => {
            handleChange02(e);
          }}
        />
      </label>

      <Select
        size={size}
        variant=""
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </main>
  );
}

export default App;
