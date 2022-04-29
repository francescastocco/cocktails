interface Drinks {
    drinks: Drink[],
}

interface Drink {
    idDrink: number,
    strDrink: string,
    strDrinkThumb: string,
}

export function getRandomCocktail() : Promise<Drinks> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json());
}