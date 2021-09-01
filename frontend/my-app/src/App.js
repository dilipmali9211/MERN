import AddPost from './AddPost';
import PostList from './PostList';
import {BrowserRouter as Router,Route}from 'react-router-dom';
function App() {
  return (
    <Router>
    <Route path="/"exact component={PostList} />
    <Route path="/savepost" component={AddPost}/>
    </Router>
  );
}

export default App;
