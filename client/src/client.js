import { createClient } from '@supabase/supabase-js'

const URL = 'https://leugzpcgrywbkahtfxkn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxldWd6cGNncnl3YmthaHRmeGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMjE1NjQsImV4cCI6MjAyODU5NzU2NH0.4tPvLxjJoLIECIQ2Y8kjkP7698D-KInXr7xjJnAm8FI';

export const supabase = createClient(URL, API_KEY);