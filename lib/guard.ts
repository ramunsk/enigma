export const Guard = {
    require: (argument: any, errorMessage: string) => {
        if (argument === undefined || argument === null) {
            throw new Error(errorMessage);
        }
    },

    notEmpty: (argument: string, errorMessage: string) => {
        Guard.require(argument, errorMessage);
        if (argument === '') {
            throw new Error(errorMessage);
        }
    },
};
