import "../App.css"

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="img"></img>
        </div>
        <div className="texts">
            <h2>Learn from cruling the blog</h2>
            <p className="info">
              <a href="author">Satish Prajapati</a>
              <time>2023-09-02 9:58</time>
            </p>
            <p className="summary">Artificial intelligence (AI) is transforming the way we create and view images. With the help of AI,
            Artificial intelligence (AI) is transforming the way we create and view images. With the help of AI, </p>
        </div>
      </div>
  )
}
export default Post