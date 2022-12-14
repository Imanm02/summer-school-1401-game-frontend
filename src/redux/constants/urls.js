// Account:
export const loginUrl = 'account/login/';

// Game:
export const getTeamUrl = 'game2/team/';
export const userNotificationsUrl = 'game2/notification/'

export const allExchangesUrl = 'game/exchange/all/'
export const playerExchangesUrl = 'game/exchange/'
export const createNewExchangesUrl = 'game/exchange/create/'


// Problem:
export const getProblemFromGroupUrl = ({ problemGroupId }) => `game2/get_problem_from_group/${problemGroupId}/`;
export const hasPlayerGotProblemUrl = ({ problemGroupId }) => `game2/isproblemgotenfromgroup/${problemGroupId}/`; // todo: fix غلط املایی
export const submitProblemUrl = ({ submitId, problemId }) => `game2/submit_answer/${submitId}/${problemId}/`;


// Game:
export const getAllCheckableObjectsUrl = 'game/getallobjects/';
export const getPlayerCheckableObjectsUrl = 'game/getmyobjects/';
export const checkObjectsUrl = ({ checkableObjectId }) => `game/checkobject/${checkableObjectId}/`;
export const getFamousPersonUrl = 'game/getfamousepersons/';

