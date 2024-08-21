# Contributing to reactive.so

Thank you for considering contributing to Reactive! I started this project to support students who may live far from campus or lack the opportunity to be on campus as frequently as typical students. These students might miss out on the "peer-to-peer" learning experience that many others benefit from. I truly appreciate your efforts in helping this project grow and improving the content. Please read through the following guidelines to make the contribution process smooth for everyone involved.

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Editing an Existing Blog](#editing-an-existing-post)
  - [Adding a New Blog](#adding-a-new-post)
- [Getting Started](#getting-started)
  - [Forking the Repository](#forking-the-repository)
  - [Setting Up Your Environment](#setting-up-your-environment)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Messages](#commit-messages)
- [Community Guidelines](#community-guidelines)

## How Can I Contribute?

### Reporting Bugs

If you encounter any issues or bugs, please open a new issue in the [Issues](https://github.com/herbievine/reactive.so/issues) section. Provide as much detail as possible, including steps to reproduce the bug, and any relevant screenshots.

### Suggesting Enhancements

We welcome suggestions for new features or improvements. To propose an enhancement, please open a new issue and describe your idea in detail.

### Editing an Existing Post

If you find any mistakes or areas for improvement in our existing blogs, feel free to make edits. Here’s how you can do it:

1. Fork the repository.
2. Locate the blog file you wish to edit in the `src/content/posts` directory.
3. Make your changes.
4. Submit a pull request (PR) with a clear explanation of your changes.

### Adding a New Post

We encourage you to share your knowledge with the community by writing a new blog post. Follow these steps:

1. Fork the repository.
2. Create a new file in the `src/content/posts` directory using the format `post-slug.mdx`.
3. Write your post in MDX. Ensure it’s well-structured, informative, and adheres to our [Code Style Guidelines](#code-style-guidelines).
4. Submit a PR with your post.

## Getting Started

### Forking the Repository

1. Go to the [repository](https://github.com/herbievine/reactive.so).
2. Click the “Fork” button in the upper right corner of the page.
3. Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/reactive.so.git
```

### Setting Up Your Environment

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

To set up the project:

1. Navigate to the project directory:

```bash
cd reactive
```

2. Install the dependencies:

```bash
npm install
```

You are now ready to contribute!

## Submitting a Pull Request

1. Ensure your fork is up-to-date with the main repository:

```bash
git fetch upstream
git merge upstream/main
```

2. Create a new branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add/Edit blog post: your-blog-title"
```

4. Push your branch:

```bash
git push origin feature/your-feature-name
```

5. Submit a PR to the `main` branch of the original repository.

## Code Style Guidelines

- **Markdown**: Follow [Markdown best practices](https://www.markdownguide.org/basic-syntax/).
- **Code**: Use consistent indentation (2 spaces) and meaningful variable names in code snippets.
- **Content**: Ensure your content is clear, concise, and free of typos. Include headings, bullet points, and code blocks where appropriate.

## Commit Messages

To maintain a clean and consistent Git history, we use [Commitizen](https://commitizen-tools.github.io/commitizen/) for our commit messages. Commitizen helps automate the process of writing commit messages that adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Community Guidelines

- **Be Respectful**: Maintain a welcoming and inclusive environment.
- **Collaborate**: Be open to feedback and constructive criticism.
- **Ask Questions**: If you’re unsure about something, don’t hesitate to ask.

Thank you for contributing to Reactive! Your efforts make this project better for everyone.
