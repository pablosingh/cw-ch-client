import style from '../styles/Card.module.css';

export const Card = (prop) => {
    return (
        <div className={`${style.card} ${(prop.polindrome===true ? style.polindrome : ` `)}`}>
            { prop.text }
        </div>
    );
};