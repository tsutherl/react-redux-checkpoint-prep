import {ADD_ITEM_TO_REGISTRY} from './actions';

const initialState = {
    registryItems: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_REGISTRY:
        var newList = state.registryItems.concat([action.item]);
        return Object.assign({}, {registryItems: newList});
        default:
            return state;
    }
};
