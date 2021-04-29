import { HUNTS } from '../shared/hunts';
import { HARVESTS } from '../shared/harvests';
import { SPONSORS } from '../shared/sponsors';

export const initialState = {
    hunts: HUNTS,
    harvests: HARVESTS,
    sponsors: SPONSORS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};