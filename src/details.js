import React from "react"
function Details(props){
    const found = props.moviedata.find(el=> el.id == props.match.params.id)
    return(
        <div>
            <p>{found.description}</p>
            {found.trailer}

        </div>
    )
}
export default Details