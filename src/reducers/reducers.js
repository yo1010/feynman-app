import { PRIORITY_TRUE, MENU_TOPIC_INPUT, GET_OPEN_CARD, GET_FIREBASE_DATA } from '../actions/actions';

const initialState = {
    priorityClicked: false,
    menuTopicInput: [],
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
                menuTopicInput: [action.menuTopicInput, ...state.menuTopicInput]
            };
        case GET_OPEN_CARD:
            return {
                ...initialState,
                openCard: action.openCard
            }
        case GET_FIREBASE_DATA:
            return {
                ...initialState,
                menuTopicInput: [...action.fbData, ...state.menuTopicInput]
            }
        default:
            return state;
    };
};

export default rootReducer;