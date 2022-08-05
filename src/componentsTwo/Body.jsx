import s from '../stylesTwo/Body.module.css';

export const Body = () => {
    return (
        <div className={`container bg-success ${s.bigBody}`}>
            <div className="d-flex flex-row">
                <div className="d-block d-sm-none left bg-info">
                    <div className={`col-md-3 ${s.logo} d-flex 
                        justify-content-center 
                        align-items-center`}>
                            <img alt="Logo"/>
                    </div>
                    <div className={` col-md-6 ${s.navigation} d-flex row
                        justify-content-center 
                        align-items-center`}>
                        <button className="btn">Home</button>
                        <button className="btn">Create</button>
                        <button className="btn">About</button>
                    </div>
                    <div className={`col-md-3 ${s.user} d-flex 
                        justify-content-center 
                        align-items-center`}>
                        <img alt="User"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Un Label</label>
                    <label htmlFor="">Otro Label</label>
                    <button className="btn btn-info">boton</button>
                    <button className="btn btn-primary">boton</button>
                </div>
            </div>
        </div>
    )
};