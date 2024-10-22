import './DetailsWindow.css'

function DetailsWindow({ item, onClose }) {
    return (
        <div className="details-window">
            <h3>{item.name}</h3>
            <button className="close-window" onClick={onClose}>X</button>
            <p>Some static details for {item.name}.</p>
        </div>
    );
}

export default DetailsWindow;
