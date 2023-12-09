import { GetData } from "../../utils/request";

export const popularCites = ['Austin', 'Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta'];

export const checkPopularCity = (input) => {
    for(let i = 0; i < popularCites.length; i++) {
        if(input.toLowerCase().trim() === popularCites[i].toLowerCase().trim()) {
            alert(`Use button for ${popularCites[i]}`);
            return true;
        }
    }
    return false;
}

export const processSearch = (input) => {
    if(input === '' || checkPopularCity(input)) {
        return;
    }
}