import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Plan: {
            screens: {
              PlanScreen: 'plan',
            },
          },
          Explore:{
            screens:{
              ExploreScreen: "explore"
            }
          },
          Profile:{
            screens:{
              ExploreScreen: "profile"
            }
          },
        },
      },
      DetailPlace:{
        screens:{
          ExploreScreen: "detail"
        }
      },
      NotFound: '*',
    },
  },
};
