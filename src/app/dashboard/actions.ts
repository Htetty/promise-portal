'use server';

import { createClient } from '@/lib/supabase/server';

export async function getUserData() {
  const supabase = await createClient();
  
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('FA25') 
    .select('*')
    .eq('smccd_email', user.email)
    .single();

  if (error) {
    throw new Error('Failed to fetch user data');
  }

  return data;
}

export async function getPEOEvents() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('PEO')
    .select('*')
    .order('date', { ascending: true });

  if (error) {
    throw new Error('Failed to fetch PEO events');
  }

  return data;
}