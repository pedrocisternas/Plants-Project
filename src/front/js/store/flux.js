const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			garden: [
				{
					plantName: "Allium",
					description:
						"Dis parturient montes nascetur ridiculus. Eget mauris pharetra et ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper sit amet risus nullam eget felis eget nunc."
				},
				{
					plantName: "Alyssum",
					description:
						"Dis parturient montes nascetur ridiculus. Eget mauris pharetra et ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper sit amet risus nullam eget felis eget nunc."
				},
				{
					plantName: "Aster",
					description:
						"Dis parturient montes nascetur ridiculus. Eget mauris pharetra et ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper sit amet risus nullam eget felis eget nunc."
				},
				{
					plantName: "Bellflower",
					description:
						"Dis parturient montes nascetur ridiculus. Eget mauris pharetra et ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec. Nibh mauris cursus mattis molestie a iaculis at. Egestas dui id ornare arcu. Ullamcorper sit amet risus nullam eget felis eget nunc."
				},
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			],
			usersPersonal: [
				{
					username: null,
					// first_name: "Gregor",
					// last_name: "Samsa",
					// email: "gregors@mail.com",
					password: null
					// repeat_password: "xxxxxxx1"
				}
			],
			usersGarden: [
				{
					hardiness: null,
					plot_size: null,
					sunlight: null,
					edibles: null,
					annuals: null,
					experience: null
				}
			],
			squareSelected: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			postUserPersonal: user => {
				const new_usersPersonal = getStore().usersPersonal;
				new_usersPersonal.unshift(user);
				setStore({ usersPersonal: new_usersPersonal });
			},
			postUserGarden: user => {
				const new_usersGarden = getStore().usersGarden;
				new_usersGarden.unshift(user);
				setStore({ usersGarden: new_usersGarden });
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
			addAPlant: (plant, position) => {
				const new_garden = getStore().garden;
				new_garden[position] = plant;
				setStore({ plants: new_garden });
			},
			getDescription: (plant, position) => {},
			deleteAPlant: position => {
				const new_garden = getStore().garden;
				// new_garden.splice(position, 1);
				new_garden[position] = null;
				setStore({ plants: new_garden });
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			updateSquareSelected: position => {
				setStore({ squareSelected: position });
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
