// import './App.css';
function Car(props) {
  const name = props.color != '' ? 'name selected' : 'name not selected'
  return <p> {name}</p>
    // return <h2 style={{color: props.color}} className="color">Hi, I am {props.color} Car!</h2>;
}

export default Car;
