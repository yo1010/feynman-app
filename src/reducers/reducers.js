import { PRIORITY_TRUE, MENU_TOPIC_INPUT } from '../actions/actions';

const initialState = {
    priorityClicked: false,
    menuTopicInput: ["object oriented programming", "functional programming"]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case PRIORITY_TRUE:
            if (state.priorityClicked === false) {
                return {
                    ...initialState,
                    priorityClicked: action.priorityClicked
                };
            } else {
                return {
                    ...initialState,
                    priorityClicked: false
                };
            };
        case MENU_TOPIC_INPUT:
            return {
                ...initialState,
                menuTopicInput: [...action.menuTopicInput, ...state.menuTopicInput]
            };
        default:
            return state;
    };
};

export default rootReducer;