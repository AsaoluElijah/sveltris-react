import React, { useState } from "react";
import Chart from "react-apexcharts";
import Toast from "./Toast.svelte?in-react";
import PostCard from "./PostCard.svelte?in-react";

const initialPosts = [
  {
    author: "John Doe",
    content: "Hi! Setting up my Otter account!",
  },
  {
    author: "Jane Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure!",
  },
];

const getPostCount = (posts, author) => {
  return posts.filter((post) => post.author === author).length;
};

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showToast, setShowToast] = useState(false);

  const [chartData, setChartData] = useState(() => {
    const johnPostsCount = getPostCount(posts, "John Doe");
    const janePostsCount = getPostCount(posts, "Jane Doe");

    return {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["no of posts"],
        },
      },
      series: [
        { name: "John", data: [johnPostsCount] },
        { name: "Jane", data: [janePostsCount] },
      ],
    };
  });

  const addRandPost = () => {
    const randPost = posts[Math.floor(Math.random() * posts.length)];
    const updatedPosts = [...posts, randPost];
    setPosts(updatedPosts);

    setChartData((prevChartData) => {
      const johnPostsCount = getPostCount(updatedPosts, "John Doe");
      const janePostsCount = getPostCount(updatedPosts, "Jane Doe");

      return {
        ...prevChartData,
        series: [
          { name: "John", data: [johnPostsCount] },
          { name: "Jane", data: [janePostsCount] },
        ],
      };
    });

    setShowToast(true);
  };

  return (
    <>
      <Toast
        showToast={showToast}
        toastMessage="New post added successfully!"
      />
      <main>
        <div className="header">
          <h1>Otter 🦦</h1>
          <button className="add-btn" onClick={addRandPost}>
            Add Random Post
          </button>
        </div>
        <div className="container">
          <div className="first-row">
            <div className="posts-wrapper">
              {posts.map((post, id) => (
                <React.Fragment key={id}>
                  <PostCard
                    id={id}
                    author={post.author}
                    content={post.content}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="sec-row">
            <h3>Post Trends</h3>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
