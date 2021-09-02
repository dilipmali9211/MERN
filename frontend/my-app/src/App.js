import AddPost from './AddPost';
import PostList from './PostList';
import Editpost from './Editpost';

import {BrowserRouter as Router,Route}from 'react-router-dom';
import Deletpost from './Deletpost';

function App() {
  return (
    <Router>
    <Route path="/"exact component={PostList} />
    <Route path="/savepost" component={AddPost}/>
    <Route path="/editpost/:post_id" component={Editpost}/>
    <Route path="/deletpost/:post_id" component={Deletpost}/>
    </Router>
  );
}

export default App;
