import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const nayoks = ['Sarukh khan', 'Amir khan', 'Tom Cruse', 'Salman khan']
  const nayoks = [{ name: 'Sarukh khan', age: 55 }, { name: 'Amir khan', age: 59 }, { name: 'Tom Cruse', age: 65 }, { name: 'Salman khan', age: 52 }]

  // fetch API use....
  // const [users, setusers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => setusers(data))
  // })

  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setproducts(data.results[0]))
    // console.log(data.results[0]);
    // .then(data => console.log(data.results))
  }, [])
  // const products = [
  //   { name: 'Watch', brand: 'Apple', qty: 5, },
  //   { name: 'Laptop', brand: 'Dell', qty: 15, },
  //   { name: 'Phone', brand: 'Sumsung', qty: 10, },
  //   { name: 'Laptop', brand: 'Hp', qty: 22, }
  // ]

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        // products.map(prd => <Product name={prd.name} brand={prd.brand} qty={prd.qty}></Product>)

        // use API
        // picture={prd.picture.thumbnail}\
        // picture={products.picture.large}
        // name={products.name.last} 

        //<===== Need to correction of following code====>
        <Product name={products.name.title + " " + products.name.first + " " + products.name.last} email={products.email} gender={products.gender} picture={products.picture.large} ></Product>


        // products.map(prd => <Product name={prd.gender} email={prd.email} ></Product>)

        // users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }

      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

// Dynamic part
function MovieCounter() {
  const [count, setCount] = useState(0);
  // const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
      <h3>Number of Movies:{count}</h3>
      <MovieDisplay movies={count + 7}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return (
    <h4>Movies i have acted:{props.movies} </h4>
  )
}

function User(props) {
  const userStyle = {
    border: '3px solid red',
    borderRadius: '20px',
    margin: '20px',
    padding: '5px',
  }
  return (
    <div style={userStyle}>
      <h3>Name:{props.name}</h3>
      <h5>Email: {props.email}</h5>
      <h5>Phone: {props.phone}</h5>
    </div>
  )
}
//<===== Need to correction of following code====>
function Product(props) {
  // console.log(props);
  const productStyle = {
    backgroundColor: '#61DAFB',
    border: '4px solid #9C27B0',
    borderRadius: '10px',
    margin: '10px',
    padding: '5px',
  }
  const textHighlight = {
    color: '#E91E63',
  }
  return (
    // Use in API
    <div style={productStyle}>
      <img style={{ borderRadius: '50%', width: '150px', height: '150px' }} src={props.picture} alt="pic"></img>
      <h3 style={textHighlight}>Name: {props.name}</h3>
      <h5>Email: {props.email}</h5>
      <h5>Gender: {props.gender}</h5>
      <p>i have Used random user API for practice.</p>
    </div>

    // <div style={productStyle}>
    //   <h3 style={textHighlight}>Name:{props.name}</h3>
    //   <h5>Brand: {props.brand}</h5>
    //   <h5>Qty: {props.qty}</h5>
    //   <p>Product quality is Good and each product has 2 years of warranty.</p>
    // </div>
  )
}

function Nayok(props) {
  // console.log(props);
  const nayokStyle = {

    border: '2px solid purple',
    margin: '10px',
    padding: '5px',
  }

  return (
    <div style={nayokStyle}>
      <h1>Nayok: {props.name}</h1>
      <p>I hav started to learn React!!! last {props.age || 1} years.</p>
    </div>
  )
}

export default App;
