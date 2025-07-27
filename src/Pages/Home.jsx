import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/Config'
import {Container, PostCard} from '../Components/index'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
  return (
   
  <div className="w-full py-20 bg-gray-50 dark:bg-gray-900 text-center">
    <Container>
      <div className="flex justify-center">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            No Posts Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {`Login to view posts or check back later.`}
          </p>
        </div>
      </div>
    </Container>
  </div>
);
    }
return (
  <div className="w-full py-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </Container>
  </div>
);


}

export default Home