const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			garden: [null, null, null, null, null, null, null, null, null, null, null],
			usersPersonal: [
				{
					username: "gregors",
					first_name: "Gregor",
					last_name: "Samsa",
					email: "gregors@mail.com",
					password: "xxxxxxx1",
					repeat_password: "xxxxxxx1"
				}
			],
			plants: [
				"Allium",
				"Alyssum",
				"Aster",
				"Bellflower",
				"Blanketflower",
				"Camellia",
				"Catmint",
				"Clematis",
				"Daylily",
				"Foxglove",
				"Geranium",
				"Honeysuckle"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			postUserPersonal: user => {
				const new_usersPersonal = getStore().usersPersonal;
				new_usersPersonal.push(user);
				setStore({ usersPersonal: new_usersPersonal });
			},
			getUserPersonal: () => {},
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
			addAPlant: () => {
				const new_Plants = getStore().plants;
				new_Plants.push("New Plant Added");
				setStore({ plants: new_Plants });
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
