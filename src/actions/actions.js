export const PRIORITY_TRUE = "PRIORITY_TRUE";

export function priorityTrue() {
    return {type: PRIORITY_TRUE, priorityClicked: true}
};

export const MENU_TOPIC_INPUT = "MENU_TOPIC_INPUT";

export function menuTopicInput(inputValue) {
    return {type: MENU_TOPIC_INPUT, menuTopicInput: inputValue}
}

export const GET_OPEN_CARD = "GET_OPEN_CARD";

export function getOpenCard(inputValue) {
    return {type: GET_OPEN_CARD, openCard: inputValue}
}

export const ADD_KNOWN_WORD_INPUT = "ADD_KNOWN_WORD_INPUT";

export function getWordInput(inputValue) {
    return {type: ADD_KNOWN_WORD_INPUT,  }
}

export const GET_FIREBASE_DATA = "GET_FIREBASE_DATA";

export function getFirebaseData(value) {
    return {type: GET_FIREBASE_DATA, fbData: value}
}
