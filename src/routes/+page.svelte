<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/global.css">
  <script defer src="/build/bundle.js"></script>
  <script>
    import { link } from '$app/navigation';
  </script>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
     <ul>
      <li>
        <a href="/catpics">Cat Pics</a>
        <a href="/catfacts">Cat Facts</a>
      </li>
     </ul>
      <a href="/">Home</a>
    </nav>
  </header>
  <main>
   <!-- <svelte:slot /> -->
  </main>
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>