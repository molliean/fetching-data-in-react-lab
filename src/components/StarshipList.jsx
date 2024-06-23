import StarshipCard from './StarshipCard/StarshipCard'

export default function StarshipList(props) {
    return (
        <section className="card-container">
            {props.starships.length > 0 ? (
                props.starships.map((starship, index) => (
                    <StarshipCard
                        key={index}
                        name={starship.name}
                        starshipClass={starship.starshipClass}
                        manufacturer={starship.manufacturer}
                        model={starship.model}
                    />
                ))
            ) : (
                <p>No starships found.</p>
            )}
        </section>
    );
}