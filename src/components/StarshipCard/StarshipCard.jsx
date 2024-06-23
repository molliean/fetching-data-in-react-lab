
export default function StarshipCard ({name, starshipClass, manufacturer, model}){
    return (
        <div className='card'>
        <h4>Name: {name}</h4>
        <p>Class: {starshipClass}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Model: {model}</p>
      </div>
    )
}