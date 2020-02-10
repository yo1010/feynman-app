import { PRIORITY_TRUE, MENU_TOPIC_INPUT, GET_OPEN_CARD } from '../actions/actions';

const initialState = {
    priorityClicked: false,
    menuTopicInput: [{titleInput: "calculus", topicInput: "maths"}],
    openCard: {}
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
                menuTopicInput: [...state.menuTopicInput, action.menuTopicInput]
            };
        case GET_OPEN_CARD:
            return {
                ...initialState,
                openCard: action.openCard
            }
        default:
            return state;
    };
};

export default rootReducer;