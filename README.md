# mini-api
Docker + GitHub Actions を用いて
CI/CDパイプラインを構築した学習プロジェクト

Node.jsで作成したシンプルなAPIを題材に、
Docker + GitHub Actions を用いたCI/CDパイプラインを構築しました。

コード変更からテスト、Dockerイメージのビルド、レジストリへのpushまでを
自動化することで、再現性のある開発・配布プロセスを理解することを目的としています。

---

# Tech Stack

- Node.js
- Express
- Jest
- Docker
- GitHub Actions
- GitHub Container Registry (GHCR)

---

# CI/CD構成

このプロジェクトでは以下のCI/CDパイプラインを構築しています。

### CI (Continuous Integration)

- GitHubへpush
- GitHub Actionsが起動
- Node環境をセットアップ
- npm install
- npm test 実行

### CD (Continuous Delivery)

CI成功後、

- Docker image build
- GHCR (GitHub Container Registry)へpush

これによりDocker環境で再現可能な形で、アプリケーションを配布可能な状態にしています。

---

# CI/CD Flow

push → GitHub Actions → npm test → Docker build → GHCR push

---

# 学んだこと

このプロジェクトを通して以下を理解しました。

- Dockerによる実行環境の再現性
- GitHub ActionsによるCI構築
- CI/CDパイプラインの基本構造
- Docker imageによる配布可能な成果物の作成
