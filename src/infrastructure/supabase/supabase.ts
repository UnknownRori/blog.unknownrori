import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/models/supabase';

const supabase = createClient<Database>('https://xbilcfmjnhioobnfmzco.supabase.co', import.meta.env.VITE_SUPABASE_PUBLIC_KEY);

export default supabase;
