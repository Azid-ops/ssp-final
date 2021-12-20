//Importing React 
import React from "react";

//Importing Nav
import Nav from '../../Ui/Navbar/Nav';

//Importing Aux Component
import Aux from '../../Auxiliary/Auxiliary';

//Importing css file
import classes from './Home.css';

//Importing Service Page
import Service from "../../Services/Pages/Service";
import MaterialProvider from "../../Material Providers/Pages/MaterialProviders";

//Creating Home Functional Component
const Home = () =>{
    return(
        <Aux>
            <Nav first={"Hire Workers"}
                second={"Find Work"} 
                third={"Resources"} 
                fourth={"TRY GET WORKERS"} 
                fifth={"Login"}
            />
            <div className={classes.localOuter}>
                <h1 className={classes.local}>Hire Local Workers</h1>
                <p>Whether your job requires an experienced hospitality Worker, security professional, or customer service skills, SSP will source the expertise you seek. Browse our top skill categories below.</p>
            </div>
            <Service />
            <MaterialProvider />
        </Aux>
    )
}

//Exporting Home
export default Home;