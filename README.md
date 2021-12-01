# gentile
PWA to consult the names of the inhabitants of the communes of Switzerland

## Contributing

If you want to contribute to this project, please read the following.

### Coding style

You have to respect the coding style defined in the `.eslintrc.js` file. The following command is really useful in order to automatically fix your code: `npm run lintfix`.

### Nuxt components names

Please add a `name` property to each component and prefix its name with its directory structure ; for example:

- `components/Logo.vue` will be `name: 'Logo',`
- `components/admin/Logo.vue` will be `name: 'AdminLogo',`

### Nuxt pages names

Please add a `name` property to each page and append the word `Page` at the end of its name:

- `pages/contact.vue` will be `name: 'ContactPage',`
- `pages/admin/settings.vue` will be `name: 'AdminSettingsPage',`

### Design framework

We use [Tailwind](https://tailwindcss.com) to design our application.
