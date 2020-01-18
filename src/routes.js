
import Feed from "./components/Feed.vue"
import ItemDetails from "./components/ItemDetails.vue"
import Profile from "./components/Profile.vue"

const routes = [
    {path:'/', component: Feed, name:'feed' },
    {path:'/feed/:id', component: ItemDetails, name:'itemdetails'},
    {path:'/users/:id', component: Profile, name:'profile'},
];

export default routes;