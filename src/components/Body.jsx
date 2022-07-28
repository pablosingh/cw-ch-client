import { Cards } from './Cards';
import style from '../styles/Body.module.css';

export const Body = () => {
    return(
        <div className={style.body}>
            <Cards/>
        </div>
    );
};