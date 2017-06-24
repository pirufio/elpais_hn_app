angular.module('starter.translate', ['pascalprecht.translate'])
.config(function($translateProvider){
	//Config language
	$translateProvider.preferredLanguage("en");
	$translateProvider.fallbackLanguage("en");
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
	//Translate for EN
	$translateProvider.translations('en', {
	    title: "EL PAIS",
	    Home: "Home",
	    fontSize: "Tamaño texto",
	    Bookmark: "Guardar",
	    unBookmark: "Desmarcar",
	    Small: "Pequeño",
	    Normal: "Normal",
	    Large: "Largo",
	    extraLarge: "Extra Largo",
	    Settings: "Configuración",
	    textSize: "Texto",
	    textSizeDescription: "Tamaño del texto",
	    notification: "Notificaciones",
	    disconnected: "Sin conexión",
	    photos: "Fotos",
	    videos: "Videos",
	    latest: "ULTIMO",
	    topnew: "MAS LEIDAS",
	    video: "VIDEOS",
	    trending: "TENDENCIAS",
	    thisArticle: "Esta nota tiene ",
	    comment: "comentario",
	    comments: "comentarios",
	    addComment: "Agregar un comentario",
	    nextStory: "Prñxima nota",
	    Comment: "Comentario",
	    noData: "Sin datos",
	    logout: "Salir",
	    myBookmarks: "Mis notas guardadas",
	    appSettings: "Configuración",
	    support: "Soporte",
	    rateApp: "Valorar en el Store",
	    shareApp: "Compartir",
	    information: "Información",
	    aboutUs: "About us",
	    termsOfUse: "Terms of use",
	    privacyPolicy: "Privacy policy",
	    version: "Version",
	    versionNumber: "1.1.1",
	    news: "Noticias",
	    photo: "Fotos",
	    bookmark: "Bookmarks",
	    noBookmark: "No bookmarks found",
	    logIn: "Log in",
	    username: "Usuario",
	    password: "Clave",
	    forgotPassword: "Olvidó la clave?",
	    notMember: "Not a member yet?",
	    signUpNow: "SIGN UP NOW",
	    resetPassword: "Reset Password",
	    enterEmail: "Enter your register email address",
	    email: "Email",
	    register: "Register",
	    weNeed: "We need a few more details about you before we set up your account",
	    firstName: "First Name",
	    lastName: "Last Name",
	    rePassword: "Re-Password",
	    iAgree: "I agree to the",
	    termsConditions: "Términos y condiciones",
	    keyword: "Keyword",
	    emptyList: "Empty list",
	    noResult: "No results avalible",
	    pull: "Pull to refresh..."
	});
	//End Translate for EN
});