export default (order, itemId ) => {
    if (order) {
        return !!Object.keys(order).filter(
            key => order[key].itemId === itemId
        ).length
    }

    return false;
}