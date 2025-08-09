import {
  RouterProvider,
} from 'react-router';

import router from './router';
import PostContext from '@/providers/PostProvider';
import SeriesContext from '@/providers/SeriesProvider';

import Container from './infrastructure/Container';

import InMemorySeriesRepository from './infrastructure/repository/InMemorySeriesRepository';
import InMemoryPostRepository from './infrastructure/repository/InMemoryPostRepository';
import { seriesData } from './statics/SeriesData';
import { postData } from './statics/PostData';

function App() {
  const container = new Container({
    seriesRepository: new InMemorySeriesRepository(seriesData),
    postRepository: new InMemoryPostRepository(postData),
  });

  return (
    <>
      <PostContext value={container.postRepository}>
        <SeriesContext value={container.seriesRepository}>
          <RouterProvider router={router}>
          </RouterProvider>
        </SeriesContext>
      </PostContext>
    </>
  )
}

export default App
