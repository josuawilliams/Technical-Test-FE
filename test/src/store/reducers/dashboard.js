import { FETCH_ITEM } from "../actionfetch/actionType"
const initialState = {
    items : []
}

function dashboardReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEM:
            return { items : action.payload }
        default:
            return state
    }
}

export default dashboardReducers
