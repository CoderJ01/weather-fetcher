export const getOccurance = (array, value) => {
    return array.filter((v) => (v === value)).length;
}

export const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j + 1].numberOfSearches > array[j].numberOfSearches) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
            }
        }
    }
    return array;
}