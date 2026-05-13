-- ============================================================
-- NYS Real Estate Exam — Supabase Setup
-- Run this in your Supabase SQL Editor:
-- supabase.com → Your Project → SQL Editor → New Query
-- ============================================================

-- 1. Create the profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id         UUID        REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email      TEXT        NOT NULL,
  is_admin   BOOLEAN     NOT NULL DEFAULT FALSE,
  is_banned  BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Policy: users can read their own profile
CREATE POLICY "Users read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- 4. Policy: admin can read ALL profiles
CREATE POLICY "Admin reads all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- 5. Policy: admin can update any profile (for banning)
CREATE POLICY "Admin updates profiles"
  ON public.profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- 6. Policy: allow insert (for creating profile on first sign-in)
CREATE POLICY "Users insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 7. Trigger: auto-create profile row when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, is_admin, is_banned)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.email = 'rishab.alim@gmail.com',  -- auto-set admin
    FALSE
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- DONE. Now go to supabase.com → Authentication → Settings
-- and set Site URL to your Vercel deployment URL.
-- ============================================================
