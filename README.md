# qrolic-block-theme
Qrolic.com New Block theme

# Project Name

## Performance Optimization Documentation

This document outlines the steps required for performance optimization in this project, including building and enqueuing JavaScript and CSS files.

### Installation

To install the necessary dependencies, navigate to the theme's root folder and run:

```bash
npm install
```

### Building the Project

After making any changes to the JavaScript or CSS files, you must build the project. This compiles and optimizes the files into the `dist` folder.

#### Building the Full Project

In the root folder, run:

```bash
npm run build
```

This command should be executed every time you make full changes to JS or CSS.

#### Building Block Code

When you complete the block code, ensure you run:

```bash
npm run build
```

### Enqueuing JS and CSS

Always enqueue the JS and CSS files from the `dist` folder that was created after running the `npm run build` command.

#### Example Enqueue Code

```php
function enqueue_theme_assets() {
    // Enqueue CSS
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/dist/main.css', array(), '1.0.0', 'all');

    // Enqueue JS
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/dist/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_theme_assets');
```

### Changing the Queue Path

If you need to change the queue path for the JS and CSS files, update the paths in the `wp_enqueue_style` and `wp_enqueue_script` functions accordingly.

### Summary

1. **Install Dependencies**: Run `npm install` in the theme's root folder.
2. **Build Project**: Run `npm run build` after making changes to JS or CSS.
3. **Build Block Code**: Run `npm run build` after completing block code.
4. **Enqueue Files**: Always enqueue JS and CSS from the `dist` folder.

