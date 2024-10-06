import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';

dotenv.config();

// console.log("SUPABASE_URL:", process.env.SUPABASE_URL); // Debugging line
// console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY); // Debugging line

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;