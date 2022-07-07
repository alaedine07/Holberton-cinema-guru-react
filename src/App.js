import './App.css';
import SelectInput from './components/general/SelectInput';
import Input from './components/general/Input';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

function App() {

  const options = ['one', 'two', 'three']

  const onClick = () =>
    {
        console.log('clicked');
    }

    return (
    <div className="App">
      Welcom App
      <br></br>
      <br></br>
      <SelectInput label="sort" options={options} />
      <br></br>
      <br></br>
      <Input
        label="Username"
        type="text"
        className="UserName"
      />
      <br></br>
      <br></br>
      <Button label="Load more" onClick={onClick}/>
      <br></br>
      <br></br>
      <SearchBar label="search bar" type="search"/>
    </div>
  );
}

export default App;
