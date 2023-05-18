export const popularCites = ['Austin', 'Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta'];

export const checkPopularCity = (input) => {
    for(let i = 0; i < popularCites.length; i++) {
        if(input.toLowerCase() === popularCites[i].toLowerCase()) {
            alert(`Use button for ${popularCites[i]}`);
            return true;
        }
    }
    return false;
}