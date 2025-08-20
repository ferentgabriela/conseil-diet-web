// Middleware to handle 410 Gone responses for intentionally removed pages
import gonePaths from '../../config/gone-paths.json';

export function checkGonePage(pathname: string): boolean {
  return gonePaths.gonePaths.includes(pathname);
}

export function createGoneResponse(): Response {
  return new Response(
    `<!DOCTYPE html>
    <html lang="fr-LU">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Page supprimée - 410 Gone</title>
      <style>
        body { font-family: system-ui, sans-serif; text-align: center; padding: 2rem; background: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        h1 { color: #dc2626; }
        a { color: #059669; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>410 - Page supprimée</h1>
        <p>Cette page a été intentionnellement supprimée et ne reviendra pas.</p>
        <p>Vous pouvez :</p>
        <ul style="text-align: left; max-width: 300px; margin: 1rem auto;">
          <li><a href="/">Retourner à l'accueil</a></li>
          <li><a href="/#blog">Consulter nos articles</a></li>
          <li><a href="/#cabinets">Prendre rendez-vous</a></li>
        </ul>
      </div>
    </body>
    </html>`,
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=86400' // Cache 410 responses for 1 day
      }
    }
  );
}