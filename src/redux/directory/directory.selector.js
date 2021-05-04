import {createSelector} from 'reselect';

const directorySelelctor = state => state.directory;

export const selectDirectoySections = createSelector(
    [directorySelelctor],
    directory => directory.sections
)