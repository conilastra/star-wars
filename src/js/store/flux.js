const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favs: [],
			characters: [],
			details: [
				{
					id: 1,
					name: "Luke Skywalker",
					height: "172",
					mass: "77",
					hair_color: "blond",
					skin_color: "fair",
					eye_color: "blue",
					birth_year: "19BBY",
					gender: "male",
					homeworld: "https://swapi.co/api/planets/1/",
					films: [
						"https://swapi.co/api/films/2/",
						"https://swapi.co/api/films/6/",
						"https://swapi.co/api/films/3/",
						"https://swapi.co/api/films/1/",
						"https://swapi.co/api/films/7/"
					],
					species: ["https://swapi.co/api/species/1/"],
					vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"],
					starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-20T21:17:56.891000Z",
					url: "https://swapi.co/api/people/1/"
				}
			]
		},

		actions: {
			handleFav: ch => {
				let selected = { name: ch.name };
				const store = getStore();

				if (store.favs.filter(i => i.name === selected.name).length !== 0)
					return setStore({ favs: store.favs.filter(i => i.name !== selected.name) });

				return setStore({ favs: [...store.favs, selected] });
			},
			loadCharacters: async url => {
				const response = await fetch(url);
				const json = await response.json();
				const characters = json.results;

				setStore({ characters });
			},
			loadCharacter: async url => {
				const response = await fetch(url);
				const details = await response.json();

				setStore({ details });
			}
		}
	};
};

export default getState;
