import React from 'react';

const Users = ({ data, name, email }) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);
const UsersWithData = withData(Users);


const Posts = ({ data }) => (
    <div className='container user-list'>
      <h1> Users List </h1>
      {data.map(user => (
        <div className='post' key={user.id}>
          <h1> {user.name} </h1>
          <h2> {user.email} </h2>
        </div>
      ))}
    </div>
  );
const PostsWithData = withData(Posts);


const withData = WrappedComponent => {
    class WithData extends React.Component {
      constructor(props) {
        super(props);
  
        this.state = {
          data: []
        };
      }
  
      componentDidMount() {
        setTimeout(() => {
          fetch(this.props.dataSource)
            .then(response => response.json())
            .then(data => this.setState({ data: data.slice(0, 3) }));
        }, 1500);
      }
  
      render() {
        const { dataSource, ...otherProps } = this.props;
  
        return this.state.data.length < 1 ? (
          <h1>LOADING</h1>
        ) : (
          <WrappedComponent data={this.state.data} {...otherProps} />
        );
      }
    }
  
    return WithData;
  };

  function App() {
    return (
      <div className='App'>
        <UsersWithData dataSource='https://jsonplaceholder.typicode.com/users' />
        <PostsWithData
          name='Yihua'
          email='yihuazhang@gmail.com'
          dataSource='https://jsonplaceholder.typicode.com/posts'
        />
      </div>
    );
  }

  export default App;