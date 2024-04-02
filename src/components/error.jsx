import { NavLink } from 'react-router-dom';

export const PageNotFound=()=>{
    return(
        <>
        <div className='container p-2 border d-flex' style={{
            margin:"auto",
            boxShadow:"0px 0px 5px pink",
            borderRadius:"0.51rem",
            minHeight:"50vh",
            flexDirection:"column",
            backgroundColor:"#ffefff",
            alignItems:"center",
            justifyContent:"space-evenly"

        }}>
            <h1>ಥ_ಥ</h1>
            <h3>Sorry No Page Found With Your Request</h3>
            <NavLink class="btn" style={{
                textDecoration:"none",
                color:'whitesmoke',
                fontSize:"1.5em",
                backgroundColor:"blue"
            }}  aria-disabled="false" to="/">Goto Homepage</NavLink>
        </div>
        </>
    );
}