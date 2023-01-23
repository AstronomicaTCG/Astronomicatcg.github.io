import React from "react";

const Card = (props) => {

    function setDisplayInfo () {
        let cardRarity = "";
        let cardSet = "";
        let cardFaction = "";
        switch (props.rarity) {
            case "AR":
                cardRarity = "Astral Rare";
                break;
            case "SR":
                cardRarity = "Super Rare";
                break;
            case "CR":
                cardRarity = "Collab Rare";
                break;
            case "R":
                cardRarity = "Rare";
                break;
            case "UC":
                cardRarity = "Uncommon";
                break;
            case "C":
                cardRarity = "Common";
                break;
            case "P":
                cardRarity = "Planet";
                break;
            case "FP":
                cardRarity = "Full-Art Planet";
                break;
            default:
                break;
        }
        switch (props.set) {
            case "ee":
                cardSet = "Elysium Expedition";
                break;
            case "hf":
                cardSet = "Hyperius Fallen";
                break;
            default:
                cardSet = "Starter Decks";
                break;
        }
        switch (props.faction) {
            case "LC":
                cardFaction = "Legion Corps";
                break;
            case "KC":
                cardFaction = "Kakytos Council";
                break;
            case "BF":
                cardFaction = "Babylon Force";
                break;
            case "VY":
                cardFaction = "Voyager";
                break;
        }
        props.setDisplayedCardInfo([
            props.cardName,
            cardRarity,
            cardFaction,
            props.type,
            cardSet
        ])
        Array.from(document.getElementsByClassName("databaseImage")).forEach((element) => element.style.filter = "drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.25))");
        document.getElementById(props.index).style.filter = "drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.75))";
    }

    function clearDisplayInfo () {
        document.getElementById(props.index).style.filter = "drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.25))";
        props.setDisplayedCardInfo(["", "", "", ""])
    }

    function clickOnCard() {
        props.setShowCardModal(true);
        props.setShowCardURL(props.imageUrl);
    }

    return (
        <div>
            <img 
                id={props.index}
                onMouseOver={setDisplayInfo}
                onMouseOut={clearDisplayInfo}
                onClick={clickOnCard}
                className="databaseImage" src={props.imageUrl} alt="card"
            ></img>
                
            
        </div>
    );
};

export default Card;