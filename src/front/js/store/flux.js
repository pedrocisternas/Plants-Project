const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiAddress: "https://3001-sapphire-landfowl-wrh9t8u8.ws-us11.gitpod.io/api/",
			plantLibrary: [
				{
					scientificName: "Papaver somniferum",
					commonName: "Atlas Poppy",
					plantType: ["annual"],
					leafType: "Broadleaf",
					hardinessZone: [6, 7, 8, 9],
					height: 4,
					bloomTime: ["Spring"],
					flowerColor: "Various",
					// fruitPresent: "Summer",
					// fruitColor: ["Green", "Brown"],
					lightExposure: ["Sun"],
					comments:
						"Seed sewn from September to April. Planted in the deep south at the earlier date and in the north in spring. Red or pink are the colors most commonly planted. This is the plant from which opium is eventually made. Opium is used in the manufacture of morphine, which is a widely used pain killer in medical practices."
				},
				{
					scientificName: "Osteospermum hybrids",
					commonName: "African Daisy",
					plantType: ["perennial", "annual"],
					leafType: "Broadleaf",
					hardinessZone: [9, 10, 11],
					height: 1,
					bloomTime: ["Spring", "Summer", "Fall"],
					flowerColor: "Various",
					// fruitPresent: null,
					// fruitColor: [null],
					lightExposure: ["Sun", "Part Sun"],
					comments:
						"A flowering annual except in zones 9-11 where it is a perennial. Flowers from time of planting until frost. After plants are established, they will need little suppemental water. Use in rock gardens, containers, in ground beds and as a cut flower. Attracts hummingbirds and butterflies. It is drought tolerant and deer resistant."
				},
				{
					scientificName: "Tagetes erecta",
					commonName: "Marigold",
					plantType: ["annual"],
					leafType: "Broadleaf",
					hardinessZone: [9, 10, 11],
					height: 2,
					bloomTime: ["Summer", "Fall"],
					flowerColor: ["Yellow", "Orange"],
					lightExposure: ["Sun"],
					comments:
						"Marigolds have been around since pre-historic times. They grow best in full sunlight and in well drained soils. Marigolds cannot tolerate wet, humid conditions. They love drier climates where soils stay only moderately moist. Marigolds bloom from early summer through the fall if conditions are favorable. There can be a period during the hottest part of the summer when marigolds may cease to bloom until the temperatures fall below 90 F."
				},
				{
					scientificName: "Begonia semperflorens",
					commonName: "Begonia",
					plantType: ["annual"],
					leafType: "Broadleaf",
					hardinessZone: [10],
					height: 1,
					bloomTime: ["Spring", "Summer", "Fall"],
					flowerColor: "Various",
					lightExposure: ["Sun", "Part Sun"],
					comments:
						"Grown as annual bedding plant. Grows in full sun, but can't stand drought. Various colored foliage and flowers offer contrast in the annual garden. A popular choice for mass plantings in public places. Cannot tolerate wet soils, consequently best performance is in elevated beds to insure adequate drainage."
				},
				{
					scientificName: "Platycodon grandiflorus",
					commonName: "Balloon Flower",
					plantType: ["perennial"],
					leafType: "Broadleaf",
					hardinessZone: [3, 4, 5, 6, 7, 8],
					height: 2,
					bloomTime: ["Summer"],
					flowerColor: "Blue",
					lightExposure: ["Sun", "Part Sun"],
					comments:
						"This clump forming perennial dies down in winter and returns in spring. Leave some of the previous years stems so they can be located and not damaged when spring gardening activity begins. Upward facing flower buds expand like a hot air balloon prior to opening and thus its name 'Balloon Flower'."
				},
				{
					scientificName: "Pelargonium x hortorum",
					commonName: "Garden Geranium",
					plantType: ["perennial"],
					leafType: "Broadleaf",
					hardinessZone: [9, 10],
					height: 2,
					bloomTime: ["Spring", "Summer", "Fall"],
					flowerColor: "Various",
					lightExposure: ["Part Sun"],
					comments:
						"Geraniums are popular for their wide range of brilliant flower colors and attractive leaves. They flower during the warm months. However, when daily temperature exceeds 85 degrees F. for many days, flowering will not occur. This happens in the deep south, but flowering will return as temperatures moderate in the fall. Geraniums like sunlight for a minimum of four hours per day, a well drained, moist, and fertile soil."
				}
			],
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
				null
			],
			plotWidth: 10,
			plotLength: 8,
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
			postNewUser: user => {
				fetch(getStore().apiAddress + "user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						if (response.status == 401) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			setPlotWidth: l => {
				setStore({ plotWidth: l });
			},
			setPlotLength: l => {
				setStore({ plotLength: l });
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
			userLogin: user => {
				const login_user = getStore().usersPersonal;
				login_user[0].username = user.username;
				login_user[0].password = user.password;
				setStore({ usersPersonal: login_user });
			},
			userLogout: () => {
				const logout_user = getStore().usersPersonal;
				const logout_garden = getStore().garden;
				logout_garden.map((el, i) => {
					if (el) {
						el.plantName = " ";
						el.description = " ";
					}
				});
				logout_user[0].username = null;
				logout_user[0].password = null;
				setStore({ usersPersonal: logout_user, garden: logout_garden });
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
