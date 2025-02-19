# rails-react-todo

## アプリ概要
Ruby on Rails × React TODOアプリ<br>

### 技術スタック
- Ruby 3.3
- Ruby on Rails 8
- TypeScript
- React 19
- MySQL 8.0

## 環境構築
### envファイルの作成
```
cd backend
cp .env.example .env
```
.envファイルの記述内容は、管理者に問い合わせる

### master.keyファイルの作成
```
cd backend/config
touch master.key
```
master.keyファイルの記述内容は、管理者に問い合わせる

### Dockerコンテナ　ビルド・起動
rails-react-todoディレクトリ直下で、下記コマンドを実行する。<br>

コンテナのビルド
```
docker compose build
```

コンテナの起動
```
docker compose up -d
```

### バックエンド
apiコンテナにアクセス
```
docker compose exec api bash
```

bundleインストール
```
$ bundle install
```

テーブルの作成
```
$ bundle exec rails db:create
```

シーダーの実行
```
$ bundle exec rails db:seed
```

### フロントエンド
frontコンテナにアクセス
```
docker compose exec front bash
```

npmインストール
```
npm install
```

コンパイル(開発環境)
```
npm run dev
```

ビルド(本番環境)
```
npm run build
```

### ブラウザ
トップページ：http://localhost:3000
