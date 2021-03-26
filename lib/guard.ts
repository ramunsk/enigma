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

    areEqual: (argument1: any, argument2: any, errorMessage: string) => {
        if (argument1 !== argument2) {
            throw new Error(errorMessage);
        }
    },

    sameArraysIgnoreOrder: (array1: any[] | undefined, array2: any[] | undefined, errorMessage: string) => {
        const [set1, set2] = [new Set(array1), new Set(array2)];
        if (set1.size !== set2.size) {
            throw new Error(errorMessage);
        }

        if (!Array.from(set1).every((value) => set2.has(value))) {
            throw new Error(errorMessage);
        }
    },

    contains: (argument: any[] | string, value: any, errorMessage: string) => {
        Guard.areEqual(argument?.includes(value), true, errorMessage);
    },
};
