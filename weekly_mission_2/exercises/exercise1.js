//Modelado de diagramas en bjetos js
const Issue = {
    title: "Artificial intelligence",
    repositorynameAssociated: "github.com/Fernando-Cortez",
    status: "open",
    numberofcomments: 100,
    labels: "AI, Machine learning, Deep learning",
    author: "Fernando Cortez",
    dataCreated: "2022-05-01",
    lastUpdate: "2022-07-02",
    getTitleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    },
    getGeneralinfo: function() {
        return `${this.title} by ${this.author} was created on ${this.dataCreated} and last update on ${this.lastUpdate}`;
    }

}

console.log("Titulo del Issue: " + Issue.title);
console.log(Issue.getGeneralinfo());

//MOdelado de pullRequest

const pullRequest = {
    title: "Artificial",
    brancmhName: "jr dev",
    dateCreated: Date.day,
    status: "activo",
    repositorioNameAssociated: "Launch-X",
    getStatus: function() {
        return `${this.status}`;
    },
    getTitleAndNamerepo: function() {
        return ` ${this.title} by ${this.repositorioNameAssociated}`;
    }
}
console.log("Pull Request: " + pullRequest.getTitleAndNamerepo());
console.log("Estado del repositorios: " + pullRequest.getStatus());



//Modelados de appds
//TWITER
const User = {
    User: "@Fernando",
    Username: "Fernando-Cortez",
    Email: "fernandolcortezlgarcia@gmail.com",
    Password: "12345678",
    age: 22,
    description: "I am a developer",
    location: "Mexico",
    links: "www.facebook.com/fernandolcortezlgarcia",
    dateJoined: "2022-05-01",
    following: 214,
    followers: 300,
    dateofbirth: "2000-05-24",
    photoPerfil: "https://pbs.twimg.com/profile_images/1101590585818582528/Y-QZ-ZQe_400x400.jpg",
    photoPortada: "https://pbs.twimg.com/profile_banners/1101590585818582528/1588242400/1500x500",
    getUser: function() {
        return `${this.User} ${this.Username}`;
    },
    getPhotoperfil: function() {
        return `${this.photoPerfil}`;
    },
    getPassword: function() {
        return `${this.Password}`;
    }
}
const Comment = {
    idComment: "1",
    comment: "Hola",
    date: "2022-05-01",
    user: "@Fernando",
    like: 100,
    reTweet: 20,
    share: 10,
    replys: 30,
    getComment: function() {
        return `${this.comment}`;
    },
    getReTweet: function() {
        return `Retweets: ${this.reTweet}`;
    },
    getdatecomment: function() {
        return `Fecha del comentario: ${this.date}`;

    }

}
console.log("Comentario: " + Comment.getComment());
console.log("Comentario: " + Comment.getReTweet());
console.log(Comment.getdatecomment())

const Tweets = {
    idTweet: "1",
    user: "Fernando-Cortez",
    userName: "@Fernando23233",
    date: "2022-05-01",
    hora: "20:00",
    text: "Hola mundo",
    photo: "https://pbs.twimg.com/profile_images/1101590585818582528/Y-QZ-ZQe_400x400.jpg",
    likes: 200,
    comment: 200,
}


//FACEBOOK

const newUserFacebook = {
    NameComplet: "Fernando Cortez Gr",
    NameUser: "FernandoCg",
    dateofbirth: "2022-05-01",
    tel: "+5213456789",
    sex: "Masculino",
    Contraseña: "fer232432edfd",
    getnewUser: function() {
        return `Name:${this.NameComplet} and  user: ${this.NameUser}`
    }
}
console.log(newUserFacebook.getnewUser());

const post = {
    idPost: "1",
    userName: "Fernando-Cortez",
    time: "20:00",
    description: "Hola mundo",
    media: "https://pbs.twimg.com/profile_images/1101590585818582528/Y-QZ-ZQe_400x400.jpg",
    likes: 200,
    comment: 200,
    share: 10,
    getPost: function() {
        return `${this.description} by ${this.userName}`;
    },
    getcommentAndLikes: function() {
        return `Num the comment:${this.comment} and Num the likes: ${this.likes} and share: ${this.share}`;
    }
}
console.log(post.getPost());
console.log(post.getcommentAndLikes());

const biography = {
    user: "Fernando-Cortez",
    userName: "@Fernando23233",
    birday: "2022-05-01",
    friends: 1000,
    description: "I am a developer",
    education: "Universidad de Monterrey",
    location: "Mexico",
    links: "www.facebook.com/fernandolcortezlgarcia",
    photos: [],
    amigos: [],
    post: [],
    info: [],
    getuserbiography: function() {
        return `${this.user} ${this.userName}`;
    }
}