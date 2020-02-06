export const PRIORITY_TRUE = "PRIORITY_TRUE";

export function priorityTrue() {
    return {type: PRIORITY_TRUE, priorityClicked: true}
};

export const MENU_TOPIC_INPUT = "MENU_TOPIC_INPUT";

export function menuTopicInput(inputValue) {
    return {type: MENU_TOPIC_INPUT, menuTopicInput: [inputValue]}
}