import s from '../styles/Head.module.css';

export const Head = () => {
    return (
        <div className="container d-none d-sm-block">
            <div className="row ">
                    <div className={`col-md-3 ${s.logo} d-flex 
                    justify-content-center 
                    align-items-center`}>
                        <img alt="Logo"/>
                    </div>
                    <div className={` col-md-6 ${s.navigation} d-flex 
                        justify-content-center 
                        align-items-center`}>
                        <button className="btn">Home</button>
                        <button className="btn">Create</button>
                        <button className="btn">About</button>
                    </div>
                    <div className={` col-md-3 ${s.user} d-flex 
                        justify-content-center 
                        align-items-center`}>
                        <img alt="User"/>
                    </div>
            </div>
        </div>
    )
};