import React  from "react";
import {Redirect} from "react-router";
import checkOrderExisting from "../helpers/checkOrderExisting";

 const withEmptyOrderProtection = (Component) => (props) => {
     const { itemId, areaId } = props.match.params;
     const isOrderExists = checkOrderExisting(props.order, itemId)

    if (isOrderExists) {
        return <Component { ...props }/>
    } else {
        return <Redirect to={`/place/${areaId}/${itemId}`}/>
    }

}

export default withEmptyOrderProtection