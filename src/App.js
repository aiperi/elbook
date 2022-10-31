import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {audio, ebooks, materialsRead, podcasts, root, video} from "./paths";
import Video from "./containers/Video/Video";
import Audio from "./containers/Audio/Audio";
import Ebooks from "./containers/Ebooks/Ebooks";
import Materials from "./containers/Materials/Materials";
import Podcasts from "./containers/Podcasts/Podcasts";
import Home from "./containers/Home/Home";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path={root} element={<Home/>}/>
                <Route path={video} element={<Video/>}/>
                <Route path={audio} element={<Audio/>}/>
                <Route path={ebooks} element={<Ebooks/>}/>
                <Route path={materialsRead} element={<Materials/>}/>
                <Route path={podcasts} element={<Podcasts/>}/>
            </Routes>
        </Layout>
    );
}
export default App;
