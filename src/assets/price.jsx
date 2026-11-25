



function Price({oldPrice, newPrice})
{
let oldstyles={
    textDecoration:"line-through"
}
let newstyles={
    fontWeight:"bold"}        
let styles={
    backgroundColor:"lightblue",
    height:"30px",
    width:"200px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
}                                                    

    return(
        < div style={styles}>
        <span style={oldstyles}> {oldPrice}</span>
        &nbsp;&nbsp;
        <span style={newstyles}> {newPrice}</span>
        </div>
    )
}
export default Price;