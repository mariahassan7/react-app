import React from 'react';
import logo_react from "./logo_react.svg"
const HomeEducative=()=>{
    return (
        <><div className="banner">
		<h1> Welcome to Educative's React.js App</h1>
        </div><div className="next_properties">
                    <div className="image">
                        <img
                            src={logo_react}
                            alt="Educative's App"
                            width={700}
                            height={300} />
                    </div>
		</div></>
    )
}

export default HomeEducative;