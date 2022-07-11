import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Cards () {
    return(
    <div className="deck">

        <div className="card">
            <img
                src={icon1}
                alt="icon1"
            />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div className="card">
            <img
                src={icon2}
                alt="icon2"
            />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
            <img
                src={icon3}
                alt="icon3"
            />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
            <img
                src={icon4}
                alt="icon4"
            />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

    </div>
    )
}


export default Cards;