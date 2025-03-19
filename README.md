# squareComponents

## about

reuseable react components for personal use.

## components

- CustomSnackbar
- PasswordInput
- ThemeToggle
- ThemeToggleIconButton

## env

1. node js - v18.17.0
2. npm - v9.6.7

## changelog

### v1.7.0

- PaginatedTable
  - new optional prop caption.

### v1.6.4

- ThemeToggleIconButton
  - fix export.
  - fix bug in customChangeThemeState implementation.

### v1.6.3

- improve styling for PaginatedTable.

### v1.6.2

- add pageSize prop in PaginatedTable.
- updated storybook version.

### v1.6.1

- bugfix in AlertDialog story.

### v1.6.0

- add AlertDialog.

### v1.5.1

- remove extra parameter from PaginatedTable default args in storybook.

### v1.5.0

- add PaginatedTable.
- updated storybook version.

### v1.4.0

- convert all types to zod.

### v1.3.0

- ThemeToggleIconButton
  - add prop useFab.

### v1.2.0

- update storyboard version.

### v1.1.0

- ThemeToggleIconButton
  - add iconButtonProps.
- ThemeToggle
  - add buttonProps.

### v1.0.8

- experimental bug fix 3

### v1.0.7

- experimental bug fix 2

### v1.0.6

- experimental bug fix

### v1.0.5

- fix workflow to deploy storybook on github pages.
- add dev script.
- fix bug when `fullwidth` was set to false in ThemeToggle component.

### v1.0.4

- add types and missing dependencies in package.json.
- add storybook.
- add new component ThemeToggleIconButton.
- add `modeIconsSize`, `fullwidth` as optional props to ThemeToggle component.
- make `others` prop optional in the PasswordInput component.
- bug fix render PasswordInput even if no variant was passed.
- add `autoHideDuration` as optional prop to CustomSnackbar component.

### v1.0.3

- add props in ThemeToggle component.
- make some props optional to fix backwards compatibility issues.

### v1.0.2 (Breaking Change / Bug)

- fix variant implementation in ThemeToggle.
- add [LICENSE.md](LICENSE.md).

### v1.0.1 (Breaking Change / Bug)

- fix variant implementation in PasswordInput.

### v1.0.0

- initial implementation.

## Feedback is appreciated. Thank you!
