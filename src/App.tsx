import {
  RouterProvider,
} from 'react-router';

import router from './router';
import PostContext from '@/providers/PostProvider';
import SeriesContext from '@/providers/SeriesProvider';
import AuthContext from './providers/AuthProvider';

import Container from './infrastructure/Container';

import supabase from './infrastructure/supabase/supabase';
import SupabasePostRepository from './infrastructure/repository/SupabasePostRepository';
import SupabaseSeriesRepository from './infrastructure/repository/SupabaseSeriesRepository';
import SupabaseAuthProvider from './infrastructure/provider/SupabaseAuthProvider';

function App() {
  const container = new Container({
    seriesRepository: new SupabaseSeriesRepository(supabase),
    postRepository: new SupabasePostRepository(supabase),
    authProvider: new SupabaseAuthProvider(supabase),
  });

  return (
    <>
      <AuthContext value={container.authProvider}>
        <PostContext value={container.postRepository}>
          <SeriesContext value={container.seriesRepository}>
            <RouterProvider router={router}>
            </RouterProvider>
          </SeriesContext>
        </PostContext>
      </AuthContext>
    </>
  )
}

export default App
