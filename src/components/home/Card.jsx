import React from "react";

const Card = (props) => {

    function setDisplayInfo () {
        let cardName = props.imageUrl.substring(props.imageUrl.indexOf("-") + 2, props.imageUrl.length - 4).replaceAll("_", " ");
        let cardRarity = "";
        let cardSet = "";
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
        props.setDisplayedCardInfo([
            cardName,
            cardRarity,
            cardSet,
            props.type
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
                className="databaseImage" src={props.imageUrl} alt="r"></img>
        </div>
    );
};

export default Card;