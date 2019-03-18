import Home from './components/Home.vue';
import Methodics from './components/Methodics.vue';
import AboutUs from './components/AboutUs.vue';
import Stories from './components/Stories.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/mobMethodics', component: Methodics },
    { path: '/mobAboutUs', component: AboutUs },
    { path: '/mobStories', component: Stories },
];