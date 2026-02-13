---
name: git-commit
description: Smart git commit that analyzes staged changes and generates commit message
disable-model-invocation: false
allowed-tools: Bash(git *), Read, Grep
argument-hint: "[optional commit message]"
---

# Git Commit Context

## Current Git Status
!`git status --short 2>/dev/null || echo "Not a git repository"`

## Staged Changes Summary
!`git diff --staged --stat 2>/dev/null || echo "No staged changes"`

## Full Staged Diff
!`git diff --staged 2>/dev/null || echo "No staged changes to show"`

# Git Commit Skill

This skill helps you create intelligent git commits by analyzing staged changes and generating appropriate commit messages.

## Your Task

Analyze the git context above and:

1. **Check if staged changes exist**: If no staged changes (`git diff --staged` shows "No staged changes"), inform the user and suggest running `git add` first.

2. **If staged changes exist**:
   - Analyze the `git diff --staged` output to understand what changed
   - Generate a descriptive commit message following conventional commit format
   - Show a preview of the commit message for user confirmation
   - Commit the changes with `git commit -m "your generated message"`

3. **If a custom message was provided** (in `$ARGUMENTS`):
   - Use the provided message instead of generating one
   - Commit with `git commit -m "$ARGUMENTS"`

## How to Analyze the Diff

Examine the `git diff --staged` output:

### File Patterns
- `src/components/*.tsx` - React component changes
- `*.test.js` or `*.spec.js` - Test files
- `package.json` or `package-lock.json` - Dependency changes
- `*.md` - Documentation changes
- `*.css` or `*.scss` - Style changes

### Change Types
- `+` lines (additions) - New features, functions, code
- `-` lines (deletions) - Removed code, cleanup
- `@@ ... @@` chunks - Modified code sections

### Common Patterns to Detect
- **Bug fix**: Variable name corrections, error handling additions, null checks
- **Feature addition**: New functions, components, API endpoints
- **Refactor**: Code reorganization, renaming, extracting functions
- **Dependency update**: Version changes in `package.json`
- **Documentation**: Updates to comments, README, docstrings
- **Style changes**: CSS property modifications

## Commit Message Format

Generate commit messages in this format:

```
<type>: <short description>

<optional longer description>
```

### Types (choose one):
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code restructuring without changing behavior
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

### Examples:
- `fix: Correct variable name in FormSubmit component`
- `feat: Add objectToQueryString utility function`
- `refactor: Replace querystring dependency with custom implementation`
- `chore: Update package-lock.json dependencies`

## Steps to Execute

1. **Check repository**: `git rev-parse --git-dir` to ensure we're in a git repo
2. **Check for staged changes**: `git diff --staged --name-only` to see if anything is staged
3. **If no staged changes**: Show `git status` and exit with suggestion to run `git add`
4. **Generate message**: Based on diff analysis, create appropriate commit message
5. **Preview**: Show the generated message to user
6. **Commit**: Run `git commit -m "generated message"`
7. **Show result**: `git log --oneline -3` to show recent commits

## Notes

- This skill commits only **staged** changes
- Always review the generated message before committing
- For custom messages, use: `/git-commit "your message here"`
- The skill will not commit if no changes are staged