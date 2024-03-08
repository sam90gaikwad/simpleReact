
import './App.css';
import Card from './components/Card';


function App() {
  return (
    <div style={{display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr 1fr", gridGap: "5px"}}>
      <Card code="#ff6663" color="PINK"/>
     <Card code="#333333" color="GRAY"/>
     <Card code="#000000" color="BLACK"/>
     <Card code="#38BB14" color="GREEN"/>
     <Card code="#c90b0b" color="RED"/>
     <Card code="#ff8000" color="ORANGE"/>
     <Card code="#fff500" color="YELLOW"/>
     <Card code="#cccccc" color="LIGHT GRAY"/>
     <Card code="#7e41a2" color="PURPLE"/>
     <Card code="#c14911" color="BROWN"/>
    </div>
  );
}

export default App;
