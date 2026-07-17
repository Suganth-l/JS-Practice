const Stocks = {
    Fruits: ["Stawberry", "Apple", "Mango"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Waffle"],
    Toppings: ["Choco", "Peanuts"]
};

let is_shop = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log(`The Shop is Closed`));
        }
    });
};

order(2000, () => {
    console.log(`${Stocks.Fruits[0]} is selected`);
})
    .then(() => {
        return order(0, () => console.log(`The production started`));
    })

    .then(() => {
        return order(4000, () =>
            console.log(`${Stocks.Liquid[0]} and ${Stocks.Liquid[1]} are added`),
        );
    })

    .then(() => {
        return order(3000, () => console.log(`Icecream placed in the ${Stocks.Holder[2]}`));
    })

    .then(() => {
        return order(1000, () => console.log(`Toppings are added...`));
    })

    .catch(() => {
        console.log(`Customer left..`);
    })

    .finally(() => {
        console.log(`Thank you!`);
    });
