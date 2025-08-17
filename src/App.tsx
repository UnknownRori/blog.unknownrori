import {
  RouterProvider,
} from 'react-router';

import router from './router';
import PostContext from '@/providers/PostProvider';
import SeriesContext from '@/providers/SeriesProvider';

import Container from './infrastructure/Container';

import InMemorySeriesRepository from './infrastructure/repository/InMemorySeriesRepository';
import { seriesData } from './statics/SeriesData';
import supabase from './infrastructure/supabase/supabase';
import SupabasePostRepository from './infrastructure/repository/SupabasePostRepository';

function App() {
  const container = new Container({
    seriesRepository: new InMemorySeriesRepository(seriesData),
    postRepository: new SupabasePostRepository(supabase),
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
