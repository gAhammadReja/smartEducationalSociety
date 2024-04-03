import React from 'react'
import './YT_CloneStyle.css'


const MyTube = () =>{
const BRANDLOGO = () =>{
    return(  
    <div className="BrandLogo">
    <img src="./yt.png" alt="" className="YTimage" /><strong className='p-1' style={{fontFamily:'monospace'}}>MyTube</strong>
</div>
    )
}
// SEARCHbAR
const SEARCHbAR = ()=>{
    return(
    <div className=''>
    <input type="search" name="Search" id="searchTop" className='search p-1 px-3 '  placeholder='Search'/>
    </div>
    );
}
    return(
    <>
    {/* You Tube Clone With Name MyTube ****Just Download Section Of Desktop View */}
    <div title="download" id='downloadSection' className='bg-dark'> 

    <div id='TopBar' className='col-12 p-2 d-flex'>
   <div className='d-flex'>
   <div className="MenuBar mx-2">
        <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
    {<BRANDLOGO></BRANDLOGO>}
   </div>
<div className='d-flex'>
{<SEARCHbAR></SEARCHbAR>}
<i className="fa fa-search p-2 border round" aria-hidden="true"></i>
<i className="fa fa-microphone py-2 border mx-3 bg-secondary round" style={{
    width:'120%',
    paddingRight:'0.61em',
    paddingLeft:'0.61em'
}} aria-hidden="true"></i>
</div>
    <div>
<i className="fa fa-video-camera p-2 mx-1" aria-hidden="true"></i>
<i className="fa fa-bell p-2 mx-1" aria-hidden="true"></i>
<i class="fa fa-user-circle p-2 mx-1" aria-hidden="true"></i>
    </div>
    </div>

    <div id="mainBody">
<div id='body' className='d-flex w-100'>
<div id="leftSlide" className='col-1 center'>
left
</div>
<div id="rightContent" className='col-10 center'>
right    
</div>
</div>
    <div id="footer">
    I am footer
    </div>

    </div>
{/* mainBody end */}
    </div>
    {/* downloadSection end */}
    </>
)
}
export default MyTube;