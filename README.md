# Envisiontech Academy

Envisiontech Academy is an open-source learning platform designed to be accessible to everyone. This project utilizes Bun and SvelteKit for a performant and streamlined development experience.

---

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Clone the repository](#clone-the-repository)
3. [Devcontainer](#devcontainer)<br/>
   3.1. [Using Devcontainer](#using-devcontainer)
4. [Getting Started (Full Setup)](#4-getting-started-full-setup)<br/>
   4.1. [Prerequisites](#1-prerequisites)<br/>
   4.2. [Instructions](#instructions)<br/>
   4.2.1. [Install dependencies](#install-dependencies)<br/>
   4.2.2. [Run the development server](#run-the-development-server)
5. [Contributing](#contributing)
6. [License](#license)

---

## 1. Prerequisites:

- [GIT](https://git-scm.com/downloads)

## 2. Clone the repository:

```
console
git clone https://github.com/Envisionly/Envisionly-Tech-Academy.git
```

## 3. Devcontainer

This repository includes a devcontainer configuration for those who prefer a simplified setup. Devcontainers provide a pre-configured development environment within a Docker container. This allows you to get started quickly without installing dependencies or configuring your local machine.

### 3.1. Using Devcontainer:

1. Install the required extensions in your VS Code. (Remote - Containers extension pack)
2. Open the folder in VS Code.
3. A notification will appear prompting you to re-open in container. Click "Reopen in Container".
4. Install dependancies:

   ```
   console
   cd Envisionly-Tech-Academy
   bun install
   ```

5. You can then run the development server with the following command:

   ```
   console
   bun run dev
   ```

6. Open [localhost:5173](http://localhost:5173) in your browser to view the website.

## 4. Getting Started (Full Setup)

This section details the full setup process for those who don't want to use Devcontainers.

### 4.1. Prerequisites:

- [BUN](https://bun.sh/)

### 4.2. Instructions:

#### 4.2.1. Install dependencies:

```
console
cd Envisionly-Tech-Academy
bun install
```

#### 4.2.2. Run the development server:

```
console
bun run dev
```

This will start the development server. In your browser go to [localhost:5173](http://localhost:5173) to view the website.

---

## 5. Contributing

We welcome contributions to Envisiontech Academy! Please see the [CONTRIBUTING.md](/contributing.md) file for details on how to submit a pull request.

## 6. License

This project is licensed under the VSD3 license. The full license is available in the [LICENSE](https://github.com/Envisionly/Envisionly-Tech-Academy/blob/main/LICENSE) file.

---
