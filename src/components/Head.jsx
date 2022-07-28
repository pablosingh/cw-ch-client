import { useState } from "react";
import { useDispatch} from "react-redux";
import { sendText } from '../redux/actions';
// import { Button, TextField } from "@material-ui/core";
import style from '../styles/Head.module.css';

export const Head = () => {
    const dispatch = useDispatch();

    const [toInvert, setToInvert] = useState('');
    const changing = e => setToInvert(e.target.value);

    const submiting = e => {
        e.preventDefault();
        dispatch(sendText(toInvert));
        setToInvert('');
    };
    return (
        <form className={style.container} action='POST'>
            <div className={style.inputAndButton}>
                <input type="toInvertText" 
                            placeholder="Insert Text" 
                            onChange={changing}
                            value={toInvert}
                            className={style.input}
                    />
                {/* <TextField 
                    label="Insert Text" 
                    variant="filled"
                    color="primary"
                    size="small"
                    onChange={changing}
                    className={style.input}></TextField> */}
                {/* <Button 
                    color='primary' 
                    variant='contained'
                    size="small"
                    onClick={ submiting }
                    >Send</Button> */}
                <button onClick={ submiting } className={style.invertButton}
                    >Send</button>
            </div>
    </form>
)};