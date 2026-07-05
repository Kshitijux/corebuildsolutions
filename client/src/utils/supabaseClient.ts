import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are missing! Direct authentication calls will fall back to placeholders.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://vkwqcrtzhwpxndsofSii.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key-for-development'
);
