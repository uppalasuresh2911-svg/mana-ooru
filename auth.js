// 🔐 OoruVaani Common Login Protection

const firebaseConfig = {
    apiKey: "AIzaSyAHcDJvfVnqo36ICUCjSG8dz6GODXBJAq0",
    authDomain: "manaooru-18af9.firebaseapp.com",
    projectId: "manaooru-18af9",
    storageBucket: "manaooru-18af9.firebasestorage.app",
    messagingSenderId: "147443654207",
    appId: "1:147443654207:web:032c405abb71f73e54228a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(function(user) {

    if (!user) {
        window.location.href = "index.html";
    }

});