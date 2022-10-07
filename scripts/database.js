const database = {
  fish: [
      {
          name: "Bart",
          species: "Snapper",
          food: "crustaceans",
          size: 2,
          harvest_location: "Savannah, GA",
          image: "https://www.americanoceans.org/wp-content/uploads/2021/06/northern-red-snapper.jpg"
      },
      {
        name: "Bob",
        species: "Snapper",
        food: "crustaceans",
        size: 2,
        harvest_location: "Savannah, GA",
        image: "https://cdn.shopify.com/s/files/1/1349/1385/products/Red-Snapper_2d60cb26-d5e7-4d58-a920-1119fa0056b7.jpg?v=1609859199"
      }
  ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}