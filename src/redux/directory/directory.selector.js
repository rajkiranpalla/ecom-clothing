import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const directorySections = createSelector(
    [directorySelector],
    directory => directory.sections
);