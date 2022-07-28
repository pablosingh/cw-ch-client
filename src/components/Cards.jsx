import { Card } from "./Card";
import { useSelector } from "react-redux";
// import { InputLabel } from "@material-ui/core";
import style from "../styles/Cards.module.css";

export const Cards = () => {
    const texts = useSelector( state => state.texts );
    return (
        <div className={style.cards}>
                {/* <InputLabel variant="filled"
                    className={style.labelResults}
                    >Results:</InputLabel> */}
                <label>Results:</label>
            <div>
                { texts && texts.map( (t,i) => <Card 
                    text={t.text} 
                    polindrome={t.polindrome}
                    key={i}/>)}
            </div>
        </div>
    );
};