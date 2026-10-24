function Card({cards, onClickCard}) {
    return(
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px"}}>
            {cards.map((card) => (
                <div
                    key={card.id}
                    onClick ={() => onClickCard(card.id)}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                        cursor: "pointer",
                        width: "140px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                >
                    <img src={card.image} alt={card.name} width="120" height="120" />
                    <p> {card.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;