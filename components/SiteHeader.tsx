// components/SiteHeader.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export function SiteHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // ログイン状態を監視
  useEffect(() => {
    // 初回：現在のユーザーを取得
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoading(false);
    });

    // 状態変化（ログイン/ログアウト）を購読
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Login error:', error.message);
      alert('ログインに失敗しました');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
      alert('ログアウトに失敗しました');
    }
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* 左側：サイトタイトル（HOMEへのリンク） */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-100 transition-colors hover:text-emerald-300"
          >
            aaaのサイト
          </Link>
        </div>

        {/* 右側：ログインボタン + 3点リーダーメニュー */}
        <nav className="flex items-center gap-2">
          {/* ログイン / ログアウト */}
          {!loading && (
            <>
              {user ? (
                <>
                  {/* ログイン中：メールアドレス表示 + ログアウト */}
                  <span className="hidden text-xs text-slate-300 sm:inline">
                    {user.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-sky-500 px-3 py-1 text-sm font-medium text-sky-200 hover:bg-sky-500/10"
                  >
                    ログアウト
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleLogin}
                  className="rounded-full border border-sky-500 px-3 py-1 text-sm font-medium text-sky-200 hover:bg-sky-500/10"
                >
                  Login
                </button>
              )}
            </>
          )}

          {/* 3点リーダーメニュー */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-slate-700 px-2 py-1 text-slate-100 hover:bg-slate-800"
              aria-label="メニュー"
            >
              ⋯
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border border-slate-700 bg-slate-900 py-1 text-sm shadow-lg">
                <Link
                  href="/contact"
                  className="block px-3 py-1 text-slate-100 hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  開発者へ連絡
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
