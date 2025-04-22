function Footer(){

    let showData =()=>{
        alert('clicked.....')
    }

    let add = (a, b) =>{
        console.log(a+b, 'sum');
    }   

    return(
        <div className="footer">
            <button className="footersection" onClick={showData}>CTA</button>
            <button className="add" onClick={()=>{add(5,8)}}>ADD</button>
            <h2>footer component</h2>
        </div>
    )
}

export default Footer;