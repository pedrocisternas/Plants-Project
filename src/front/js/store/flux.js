const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			garden: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			users: [],
			plants: [
				"allium",
				"alyssum",
				"aster",
				"bellflower",
				"blanketflower",
				"camellia",
				"catmint",
				"clematis",
				"daylily",
				"foxglove",
				"geranium",
				"honeysuckle"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addSquare: () => {
				const new_garden = getStore().garden;
				new_garden.push(null);
				setStore({ garden: new_garden });
			},
			emptyGarden: () => {
				const new_garden = getStore().garden;
				setStore({ garden: [] });
			},
			generateList: () => {
				const new_Plantslist = getStore().plants;
				setStore({ plants: new_Plantslist });
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
