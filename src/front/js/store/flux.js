const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiAddress: "https://3001-coffee-rook-0ci9av4e.ws-eu11.gitpod.io/",
			plantLibrary: [
				{
					scientificName: "Papaver somniferum",
					commonName: "Atlas Poppy",
					growthCycle: "annual",
					plantType: "flower",
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
					growthCycle: "perennial",
					plantType: "flower",
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
					growthCycle: "annual",
					plantType: "flower",
					leafType: "Broadleaf",
					hardinessZone: [9, 10, 11],
					height: 2,
					bloomTime: ["Summer", "Fall"],
					flowerColor: ["Yellow", "Orange"],
					lightExposure: ["Sun"],
					comments:
						"Marigolds have been around since pre-historic times. They grow best in full sunlight and in well drained soils. Marigolds cannot tolerate wet, humid conditions. They love drier climates where soils stay only moderately moist. Marigolds bloom from early summer through the fall if conditions are favorable. There can be a period during the hottest part of the summer when mar igolds may cease to bloom until the temperatures fall below 90 F"
				},
				{
					scientificName: "Begonia semperflorens",
					commonName: "Begonia",
					growthCycle: "annual",
					plantType: "flower",
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
					growthCycle: "perennial",
					plantType: "flower",
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
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "Broadleaf",
					hardinessZone: [9, 10],
					height: 2,
					bloomTime: ["Spring", "Summer", "Fall"],
					flowerColor: "Various",
					lightExposure: ["Part Sun"],
					comments:
						"Geraniums are popular for their wide range of brilliant flower colors and attractive leaves. They flower during the warm months. However, when daily temperature exceeds 85 degrees F. for many days, flowering will not occur. This happens in the deep south, but flowering will return as temperatures moderate in the fall. Geraniums like sunlight for a minimum of four hours per day, a well drained, moist, and fertile soil."
				},
				{
					scientificName: "Magnolia x soulangiana 'Alexandrina'",
					commonName: "Alexandria Magnolia",
					growthCycle: "perennial",
					plantType: "tree",
					leafType: "Broadleaf",
					hardinessZone: [5, 6, 7, 8, 9],
					height: 30,
					bloomTime: "Spring",
					flowerColor: ["Pink", "Purple"],
					fruitPresent: "Summer",
					fruitColor: "Red",
					lightExposure: ["Sun", "Part Sun"],
					comments: "This cultivar has a deeper purplish flower which has a more tulip-like shape."
				},
				{
					scientificName: "Pimenta dioica",
					commonName: "Allspice",
					plantType: "tree",
					growthCycle: "perennial",
					leafType: "Broadleaf",
					hardinessZone: [9, 10, 11],
					height: 30,
					flowerColor: ["White"],
					fruitPresent: ["Summer", "Fall"],
					fruitColor: "Brown",
					lightExposure: ["Sun", "Part Sun"],
					comments:
						"Allspice is a relatively small evergreen tree that grows in the warm climates of the world. In some parts where conditions are favorable it has escaped cultivarion. The plant produces thick, leathery, aromatic foliage. The condiment, allspice, is produced from the unripened berry-like fruit of this tree."
				},
				{
					scientificName: "Rosa 'Affirm'",
					commonName: "Affirm Rose",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "Broadleaf",
					hardinessZone: [6, 7, 8, 9, 10],
					height: 5,
					bloomTime: ["Spring", "Summer", "Fall"],
					flowerColor: "Pink",
					lightExposure: ["Sun"],
					comments:
						"This is a hybrid tea rose that produces a classic pink rose bud. As with all roses, good drainage is imperative. Roses do best on raised beds that contain fertile soil with fast drainage. Most hybrid tea roses have several pests that must be controlled during the year."
				},
				{
					scientificName: "Synadenium grantii",
					commonName: "African Milk Bush",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "Broadleaf",
					hardinessZone: [10, 11],
					Height: 5,
					bloomTime: ["Summer", "Fall"],
					flowerColor: "Red",
					lightExposure: ["Sun", "Part Sun"],
					comments:
						"This is a plant that produces fleshy stems and large chartreuse colored leaves with tiny specks of red in the foliage. When broken plant exudes a milky sap. The sap can be toxic or cause a rash. This is an excellent plant to feature in containers. Plant in a well drained soil mix that contains a generous amount of sand and keep the soil moderately dry, otherwise rot will occur."
				}
			],
			garden: [],
			hardcodedGarden: [
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
			activeUsername: null,
			usersPersonal: [
				{
					username: null,
					id: null,
					first_name: null,
					last_name: null,
					email: null,
					password: null,
					plot_width: 10,
					plot_length: 3
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
			findHardinessZone: zip => {
				fetch("https://plant-hardiness-zone.p.rapidapi.com/zipcodes" + "/" + zip, {
					// method: "GET",
					headers: {
						"content-type": "application/json",
						"x-rapidapi-key": "40ebbe3ed3msh3a39f76c326acf4p14e3c2jsnb80f8a9d0f8c",
						"x-rapidapi-host": "plant-hardiness-zone.p.rapidapi.com"
					},
					body: {
						key1: "value",
						key2: "value"
					}
				})
					.then(response => {
						console.log(response);
					})
					.catch(err => {
						console.error(err);
					});
			},
			postNewUser: user => {
				fetch(getStore().apiAddress + "api/user", {
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
						setStore({ activeUsername: responseAsJson["username"] });
						// const new_usersPersonal = getStore().usersPersonal;
						// new_usersPersonal.unshift(responseAsJson);
						// setStore({ usersPersonal: new_usersPersonal });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getUser: user => {
				console.log(user.password);
				fetch(getStore().apiAddress + "api/user/" + user.username)
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						const new_usersPersonal = getStore().usersPersonal;
						new_usersPersonal.unshift(responseAsJson);
						setStore({ usersPersonal: new_usersPersonal });
						setStore({ garden: [] });
						const garden_array = [];
						var helper = false;
						for (let i = 0; i < responseAsJson["grid_width"] * responseAsJson["grid_length"]; i++) {
							helper = false;
							for (let plant of responseAsJson["plants"]) {
								if (plant["grid_location"] == i) {
									garden_array.push(plant);
									helper = true;
								}
							}
							if (helper == false) {
								garden_array.push(null);
							}
						}
						setStore({ garden: garden_array });
						setStore({ activeUsername: responseAsJson["username"] });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				// fetch(getStore().apiAddress + "api/user", {
				// 	method: "GET",
				// 	headers: { "Content-Type": "application/json" },
				// 	body: JSON.stringify(user)
				// })
				// 	.then(function(response) {
				// 		if (!response.ok) {
				// 			throw Error(response.statusText);
				// 		}
				// 		if (response.status == 401) {
				// 			throw Error(response.statusText);
				// 		}
				// 		return response.json();
				// 	})
				// 	.then(function(responseAsJson) {
				// 		console.log(responseAsJson);
				// 	})
				// 	.catch(function(error) {
				// 		console.log("Looks like there was a problem: \n", error);
				// 	});
			},
			putInfoUser: user => {
				fetch(getStore().apiAddress + "api/user", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: getStore().activeUsername,
						grid_width: user["plot_width"],
						grid_length: user["plot_length"]
					})
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
						// const new_usersPersonal = getStore().usersPersonal;
						// new_usersPersonal.unshift(responseAsJson);
						// setStore({ usersPersonal: new_usersPersonal });
						// setStore({ garden: [] });
						// const garden_array = [];
						// var helper = false;
						// for (let i = 0; i < responseAsJson["grid_width"] * responseAsJson["grid_length"]; i++) {
						// 	helper = false;
						// 	for (let plant of responseAsJson["plants"]) {
						// 		if (plant["grid_location"] == i) {
						// 			garden_array.push(plant);
						// 			helper = true;
						// 		}
						// 	}
						// 	if (helper == false) {
						// 		garden_array.push(null);
						// 	}
						// }
						// setStore({ garden: garden_array });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			postNewPlant: plant => {
				fetch(getStore().apiAddress + "api/plant", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(plant)
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
					.then(function(user) {
						console.log(user);
						fetch(getStore().apiAddress + "api/user/" + user.username)
							.then(function(response) {
								console.log(response);
								if (!response.ok) {
									throw new Error(response.statusText);
								}
								return response.json();
							})
							.then(function(responseAsJson) {
								console.log(responseAsJson);
								const new_usersPersonal = getStore().usersPersonal;
								new_usersPersonal.unshift(responseAsJson);
								setStore({ usersPersonal: new_usersPersonal });
								setStore({ garden: [] });
								const garden_array = [];
								var helper = false;
								for (let i = 0; i < responseAsJson["grid_width"] * responseAsJson["grid_length"]; i++) {
									helper = false;
									for (let plant of responseAsJson["plants"]) {
										if (plant["grid_location"] == i) {
											garden_array.push(plant);
											helper = true;
										}
									}
									if (helper == false) {
										garden_array.push(null);
									}
								}
								setStore({ garden: garden_array });
								setStore({ activeUsername: responseAsJson["username"] });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			deletePlant: plant => {
				fetch(getStore().apiAddress + "api/plant", {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(plant)
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
					.then(function(user) {
						console.log(user);
						fetch(getStore().apiAddress + "api/user/" + user.username)
							.then(function(response) {
								console.log(response);
								if (!response.ok) {
									throw new Error(response.statusText);
								}
								return response.json();
							})
							.then(function(responseAsJson) {
								console.log(responseAsJson);
								const new_usersPersonal = getStore().usersPersonal;
								new_usersPersonal.unshift(responseAsJson);
								setStore({ usersPersonal: new_usersPersonal });
								setStore({ garden: [] });
								const garden_array = [];
								var helper = false;
								for (let i = 0; i < responseAsJson["grid_width"] * responseAsJson["grid_length"]; i++) {
									helper = false;
									for (let plant of responseAsJson["plants"]) {
										if (plant["grid_location"] == i) {
											garden_array.push(plant);
											helper = true;
										}
									}
									if (helper == false) {
										garden_array.push(null);
									}
								}
								setStore({ garden: garden_array });
								setStore({ activeUsername: responseAsJson["username"] });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
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
						// el = null;
					}
				});
				logout_user[0].username = null;
				logout_user[0].password = null;
				setStore({ usersPersonal: logout_user, garden: logout_garden });
			},
			// userSignUp: (username, first_name, last_name, email, password) => {
			//     const new_userSignUp = getStore().usersPersonal;
			//     setStore({})
			// },
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
			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
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
