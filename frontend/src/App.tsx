import './App.css'

const bandNames = [
  {name: "Dire Straits", members: "Mark Knopler, David Knopler, Pait Withers", formed: 1997},
  {name: "Ritt Momney", members: "Some kid", formed: 2016},
  {name: "Caamp", members: "Country guy", formed: 2012}
];

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>
}


function Band({name, members, formed}: {name: string; members: string; formed: number}){

  return (
    <>
      <img />
      <h2>{name}</h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList(){

  return(
    <>
      {
        bandNames.map((singleBand) => (
          <Band {...singleBand} />
        ))
      }
    </>
  );
}


function App() {

  return (
    <>
      <Welcome/>
      <BandList />
    </>
  )
}

export default App