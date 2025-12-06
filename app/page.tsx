// app/page.tsx
// ダッシュボード系アプリの「共通トップページ」テンプレート。
// 目的：見た目・レイアウト・ログインヘッダーを、他プロジェクトにコピペで再利用しやすくする。

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
      {/* ヒーローセクション */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Dashboard Template
        </p>
        <h1 className="text-3xl font-bold text-slate-100">
          Volatility Dashboard Template
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          このリポジトリは、ヘッダー（ログイン機能付き）とシンプルなレイアウトを
          他の金融ツール / 個人開発アプリに使い回すための「土台」として使います。
        </p>
      </section>

      {/* テンプレートの使い方メモ */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
        <h2 className="text-lg font-semibold text-slate-50">
          このテンプレの使い方（自分用メモ）
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-200">
          <li>
            新しくダッシュボード系アプリを作るとき、このリポジトリを
            <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              Use this template
            </code>
            や
            <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              git clone
            </code>
            で複製する。
          </li>
          <li>
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              components/SiteHeader.tsx
            </code>
            と
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              lib/supabaseClient.ts
            </code>
            をそのまま使い、ロゴ名やリンクだけ差し替える。
          </li>
          <li>
            この
            <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              app/page.tsx
            </code>
            をベースに、各アプリの説明・リンク・カードを作り変える。
            いらないセクションは削除してOK。
          </li>
        </ol>
        <p className="text-xs text-slate-400">
          ※ ログイン機能を使う場合は、環境変数
          <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-[0.7rem]">
            NEXT_PUBLIC_SUPABASE_URL
          </code>
          と
          <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-[0.7rem]">
            NEXT_PUBLIC_SUPABASE_ANON_KEY
          </code>
          を設定しておくこと。
        </p>
      </section>

      {/* サンプル：このテンプレで用意しているページ一覧 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">サンプルページ</h2>
        <p className="text-sm text-slate-300">
          下のリンクは「このテンプレから派生したダッシュボードで、どんなページを作るか」の例です。
          新しいプロジェクトでは、このリストを書き換えてください。
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Alerts ページ */}
          <Link
            href="/alerts"
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/70 hover:bg-slate-900"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              📈 Alerts Dashboard（例）
            </h3>
            <p className="text-xs text-slate-300">
              ボラティリティのアラートや通知一覧を表示するダッシュボードの例。
              他のアプリでは、ここにメイン機能のリンクを置く。
            </p>
          </Link>

          {/* NISA スニペット */}
          <Link
            href="/docs/snippets/nisa"
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/70 hover:bg-slate-900"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              🧾 NISA Simulator Snippet
            </h3>
            <p className="text-xs text-slate-300">
              金融系アプリで使い回せる NISA 計算や解説コンポーネントのサンプル。
              必要に応じて、このリンクを別のツール説明ページに差し替える。
            </p>
          </Link>

          {/* Tax Calculator スニペット */}
          <Link
            href="/docs/snippets/tax-calculator"
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/70 hover:bg-slate-900"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              💰 Tax Calculator Snippet
            </h3>
            <p className="text-xs text-slate-300">
              税金計算やシミュレーター UI の例。ここから必要なパーツだけコピペして、
              別プロジェクトのフォームやグラフに転用できる。
            </p>
          </Link>

          {/* お問い合わせ */}
          <Link
            href="/contact"
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-400/70 hover:bg-slate-900"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              ✉️ Contact / フィードバック
            </h3>
            <p className="text-xs text-slate-300">
              ログインヘッダーから辿れる「開発者へ連絡」ページの例。
              他アプリにテンプレをコピーしたときも、そのまま問い合わせフォームとして再利用可能。
            </p>
          </Link>
        </div>
      </section>

      {/* 次のアプリを作るときの TODO メモ */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          新しいアプリを作るときの TODO（チェックリスト）
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>サイトタイトル・ロゴ名を変更する（SiteHeader / layout.tsx）。</li>
          <li>
            不要なサンプルページ
            <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-xs">/alerts</code>
            や
            <code className="mx-1 rounded bg-slate-800 px-1.5 py-0.5 text-xs">
              /docs/snippets/*
            </code>
            を削除 or 差し替える。
          </li>
          <li>Supabase プロジェクトを新規で用意し、環境変数を新アプリ用に設定する。</li>
          <li>このページのテキストを、そのアプリのコンセプト説明に書き換える。</li>
        </ul>
      </section>
    </main>
  );
}
