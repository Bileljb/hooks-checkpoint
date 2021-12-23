import MCard from "./card"

function List(props) {
    
    return (
        <div style={{display : "flex", flexWrap: "wrap", justifyContent:"space-around" , backgroundColor: "black" }}>
            {props.moviedata.filter((el)=> el.title.toUpperCase().includes(props.search.toUpperCase())&& el.rate>= props.rate).map(el => <MCard el = {el}></MCard> )}
        </div>
    )
}
export default List