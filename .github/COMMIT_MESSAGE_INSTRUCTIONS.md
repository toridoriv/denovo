## Commit Message Format

Analyze the staged changes included in this commit. Generate a single commit message using the format:

```
<intention>[ (scope):] <subject>

[body]

[footer(s)]
Signed-off-by: Tori Rodriguez <vrodriguezfe@icloud.com>
```

Where:

- **Intention:** The emoji character (see the Emoji Reference table below) that best matches the intent of the change.
- **Scope:** (optional) If provided, it must be a short lowercase noun in parentheses (e.g., `(deps)`, `(ui)`, `(core)`) describing the area of change.
- **Subject:** Concise description capitalized and written in the imperative mood (e.g., "Add login button", not "added login button"). Keep it under 72 characters.
- **Body:** (optional) Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.
- **Footer(s):** (optional) The footer should contain any information about Breaking Changes, or reference GitHub issues that this commit closes.

### Constraints

- **MUST NOT** repeat the name of the modified file(s). `git` already tracks this information.
- **MUST NOT** use words like "add", "update", or "fix" in the subject line. Instead, use a more descriptive verb that conveys the intent of the change. USE MORE DESCRIPTIVE VERBS, YOU MORON! You keep using update, wtf is wrong with you? And be
  specific goddammit! None of those empty descriptions, we need to help people understand this repo's history through the commits. For instance, adding this sections would be "Specify musts and must nots in a constraints section".

### Examples

- ✨ Add user authentication
- ✨ Add more files to showcase transpilation and bundling

  I installed `tsdown` to transpile TypeScript to JavaScript and to bundle the dependencies. I made sure to install an EcmaScript library (`@faker-js/faker`) and a CommonJS library (`debug`) so anyone using the starter template can see that both
  types of libraries can be bundled and transpiled.

  Signed-off-by: Tori Rodriguez <vrodriguezfe@icloud.com>

- 🗃️ (authors) Dump to backup file

### Emoji Reference

Pick the single most appropriate emoji from this list:

| Emoji |                          When to Use                          |
| :---: | :-----------------------------------------------------------: |
|  🎨   |            Improve structure / format of the code.            |
|  ⚡️   |                     Improve performance.                      |
|  🔥   |                     Remove code or files.                     |
|  🐛   |                          Fix a bug.                           |
|  🚑️   |                       Critical hotfix.                        |
|  ✨   |                    Introduce new features.                    |
|  📝   |                 Add or update documentation.                  |
|  🚀   |                         Deploy stuff.                         |
|  💄   |             Add or update the UI and style files.             |
|  🎉   |                       Begin a project.                        |
|  ✅   |                  Add, update, or pass tests.                  |
|  🔒️   |                Fix security or privacy issues.                |
|  🔐   |                    Add or update secrets.                     |
|  🔖   |                    Release / Version tags.                    |
|  🚨   |                Fix compiler / linter warnings.                |
|  🚧   |                       Work in progress.                       |
|  💚   |                         Fix CI Build.                         |
|  ⬇️   |                    Downgrade dependencies.                    |
|  ⬆️   |                     Upgrade dependencies.                     |
|  📌   |            Pin dependencies to specific versions.             |
|  👷   |                Add or update CI build system.                 |
|  📈   |            Add or update analytics or track code.             |
|  ♻️   |                        Refactor code.                         |
|  ➕   |                       Add a dependency.                       |
|  ➖   |                     Remove a dependency.                      |
|  🔧   |              Add or update configuration files.               |
|  🔨   |              Add or update development scripts.               |
|  🌐   |            Internationalization and localization.             |
|  ✏️   |                          Fix typos.                           |
|  💩   |           Write bad code that needs to be improved.           |
|  ⏪️   |                        Revert changes.                        |
|  🔀   |                        Merge branches.                        |
|  📦️   |           Add or update compiled files or packages.           |
|  👽️   |           Update code due to external API changes.            |
|  🚚   |    Move or rename resources (e.g.: files, paths, routes).     |
|  📄   |                    Add or update license.                     |
|  💥   |                  Introduce breaking changes.                  |
|  🍱   |                     Add or update assets.                     |
|  ♿️   |                    Improve accessibility.                     |
|  💡   |            Add or update comments in source code.             |
|  🍻   |                     Write code drunkenly.                     |
|  💬   |               Add or update text and literals.                |
|  🗃️   |               Perform database related changes.               |
|  🔊   |                      Add or update logs.                      |
|  🔇   |                         Remove logs.                          |
|  👥   |                 Add or update contributor(s).                 |
|  🚸   |             Improve user experience / usability.              |
|  🏗️   |                  Make architectural changes.                  |
|  📱   |                  Work on responsive design.                   |
|  🤡   |                         Mock things.                          |
|  🥚   |                 Add or update an easter egg.                  |
|  🙈   |               Add or update a .gitignore file.                |
|  📸   |                   Add or update snapshots.                    |
|  ⚗️   |                     Perform experiments.                      |
|  🔍️   |                         Improve SEO.                          |
|  🏷️   |                     Add or update types.                      |
|  🌱   |                   Add or update seed files.                   |
|  🚩   |             Add, update, or remove feature flags.             |
|  🥅   |                         Catch errors.                         |
|  💫   |           Add or update animations and transitions.           |
|  🗑️   |          Deprecate code that needs to be cleaned up.          |
|  🛂   | Work on code related to authorization, roles and permissions. |
|  🩹   |             Simple fix for a non-critical issue.              |
|  🧐   |                 Data exploration/inspection.                  |
|  ⚰️   |                       Remove dead code.                       |
|  🧪   |                      Add a failing test.                      |
|  👔   |                 Add or update business logic.                 |
|  🩺   |                  Add or update healthcheck.                   |
|  🧱   |                Infrastructure related changes.                |
|  🧑‍💻   |                 Improve developer experience.                 |
|  💸   |       Add sponsorships or money related infrastructure.       |
|  🧵   | Add or update code related to multithreading or concurrency.  |
|  🦺   |           Add or update code related to validation.           |
|  ✈️   |                   Improve offline support.                    |

---

### Dependencies

#### Updates

If the change updates a dependency, use this exact format instead:

- ⬆️ (deps): Bump `<package>` from `<old_version>` to `<new_version>`
- ⬆️ (deps-dev): Bump `<package>` from `<old_version>` to `<new_version>`

Strip any version range specifiers (`^`, `~`, `>=`, `<=`, etc.) from both version numbers. Use only the raw version number (e.g., `1.2.3`, not `^1.2.3`).

#### Downgrades

If the change downgrades a dependency, use this exact format instead:

- ⬇️ (deps): Downgrade `<package>` from `<old_version>` to `<new_version>`
- ⬇️ (deps-dev): Downgrade `<package>` from `<old_version>` to `<new_version>`

Strip any version range specifiers (`^`, `~`, `>=`, `<=`, etc.) from both version numbers. Use only the raw version number (e.g., `1.2.3`, not `^1.2.3`).
