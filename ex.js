// const veggies = ["onion", "garlic", "potato"];
// veggies.forEach(
//     function (veggie, index) {
//         console.log(`${index}. ${veggie}`);
//     }
// );

const result = [];
const drone = {
    speed: 100,
    color: "yellow",
};
const droneKeys = Object.keys(drone);

droneKeys.forEach(
    function (key) {
        result.push(key, drone[key]);
    }
);
console.log(result);
