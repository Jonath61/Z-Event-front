import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connection", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["connected"]),
    new Route("/editpassword", "Modifier le mot de passe", ["viewver, admin, streamer"], "/pages/auth/editpassword.html"),
    new Route("/streamer", "Streamer", "/pages/auth/streamer.html", ["admin"], "/js/auth/streamer.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Z-Event";