import { useState } from "react";
import { useDispatch} from "react-redux";
import { sendText } from '../redux/actions';
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
        // <form className="" action='POST'>
        //     <div class="d-flex justify-content-center">
        //         <div className="">
        //             <input type="toInvertText" 
        //                     placeholder="Insert Text" 
        //                     onChange={changing}
        //                     value={toInvert}
        //                     // className={}
        //             />
        //         </div>
        //         <div className="">
        //             <button onClick={ submiting } 
        //                 // className={style.invertButton}
        //                 >Send
        //             </button>
        //         </div>
        //     </div>
        // </form>
        <form className={style.container} action='POST'>
            <div className={style.inputAndButton}>
                <input type="toInvertText" 
                            placeholder="Insert Text" 
                            onChange={changing}
                            value={toInvert}
                            className={style.input}
                    />
                <button onClick={ submiting } className={style.invertButton}
                    >Send</button>
            </div>
    </form>
)};