let noir = document.getElementById("noir");
let blanc = document.getElementById("blanc");

let header = document.getElementById("header");
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2");
let fashion = document.getElementById("fashion");
let footer = document.getElementById("fond3");
let copy = document.getElementById("good");
let mesLi = document.querySelectorAll("li");
let mesA = document.querySelectorAll("a");
let mesSpan = document.querySelectorAll("span");
let mesP = document.querySelectorAll("p");
let trust = document.querySelectorAll(".trusted");
let fasted = document.querySelectorAll(".fast");
let textCard = document.querySelectorAll(".texte");
let bordurTrust = document.querySelectorAll(".trust");
let recent = document.getElementsByClassName("recent")[0];
let delet1 = document.querySelectorAll(".gris");
let avion = document.getElementsByClassName("avion")[0];
let connexion = document.getElementById("connexion");
let fashion2 = document.getElementsByClassName("hotProduct")[0];
let divTest = document.getElementById("test1");
let maDiv = document.getElementById("formulaire");
let formulaire2 = document.getElementById("signInContainer");
let creatAccount = document.getElementById("submit1");
let maNav = document.getElementsByTagName("nav")[0];

let chevron = document.getElementById("right");


let page = document.getElementById("monBody");


let affichageForm2 = () => {
    formulaire2.style.display = "block";
    formulaire2.style.opacity = '0.9'
    maDiv.style.display = "none";
}
creatAccount.addEventListener("click", affichageForm2);

let affichageForm = () => {
    maDiv.style.display = "block";
    maDiv.style.opacity = '0.9'
    page.style.overflow = "hidden"
}
connexion.addEventListener("click", affichageForm);



let changeColor = () => {
    header.style.backgroundColor = "grey";
    header.style.transition = "4s";

    fashion.style.backgroundColor = "grey";
    fashion.style.transition = "4s";

    saleItems.style.backgroundColor = "white";
    saleItems.style.color = "black";
    saleItems.style.transition = "4s";

    chevron.style.color = "black"
    chevron.style.transition = "4s"
    section1.style.backgroundColor = "black";
    section1.style.transition = "4s";

    section2.style.backgroundColor = "grey";
    section2.style.transition = "4s";

    footer.style.backgroundColor = "grey";
    footer.style.transition = "4s";

    copy.style.Color = "red";
    copy.style.transition = "4s";

}

noir.addEventListener("click", changeColor)

let changeColor2 = () => {
    header.style.backgroundColor = "";
    header.style.Color = "";

    fashion.style.backgroundColor = "";
    fashion.style.Color = "";

    saleItems.style.backgroundColor = "";
    saleItems.style.color = "";
    saleItems.style.transition = "4s"

    chevron.style.color = "";
    chevron.style.transition = "4s";

    section1.style.backgroundColor = "";
    section1.style.Color = "";

    section2.style.backgroundColor = "";
    section2.style.Color = "";

    footer.style.backgroundColor = "";
    good.style.Color = "";

    mesLi.forEach(element => {
        element.style.color = "";
    });
    mesA.forEach(element => {
        element.style.color = "";
    });
    mesSpan.forEach(element => {
        element.style.color = "";
    });
    mesP.forEach(element => {
        element.style.color = "";
    });

    trust.forEach(element => {
        element.style.color = "";
    });

    fasted.forEach(element => {
        element.style.color = "";
    });

    bordurTrust.forEach(element => {
        element.style.borderColor = ""
    });

    recent.style.color = "";



    textCard.forEach(element => {
        element.style.color = "";
    }); delet1.forEach(e => {
        e.style.color = "black"
    });

    delet1.forEach(e => {
        e.style.color = ""
    });

    section2.style.Color = "";
    copy.style.color = "";

    avion.style.color = ""

    fashion2.style.color = "";
}

blanc.addEventListener("click", changeColor2)


let color = () => {
    mesLi.forEach(element => {
        element.style.color = "white";
    });
    mesA.forEach(element => {
        element.style.color = "white";
    });
    mesSpan.forEach(element => {
        element.style.color = "white";
    });
    mesP.forEach(element => {
        element.style.color = "white";
    });

    trust.forEach(element => {
        element.style.color = "black";
    });

    fasted.forEach(element => {
        element.style.color = "black";
    });

    bordurTrust.forEach(element => {
        element.style.borderColor = "black"
    });

    textCard.forEach(element => {
        element.style.color = "black";
    });

    recent.style.color = "white";

    fashion2.style.color = "white";

    section2.style.Color = "white";

    copy.style.color = "white";

    avion.style.color = "black"

    delet1.forEach(e => {
        e.style.color = "black"
    });

}
noir.addEventListener('click', color)
let counter = 0

let afficher = (e) => {
    if (counter % 2 === 0 && e.keyCode == 50) {
        changeColor();
        color();
    } else if (counter % 2 === 1 && e.keyCode == 50) {
        changeColor2();
    }
    counter++
}

window.addEventListener("keypress", afficher)


let close = document.getElementById("closer");

let fermerForm2 = () => {
    formulaire2.style.display = "none"
};
close.addEventListener("click", fermerForm2)

let fermerForm1 = () => {
    maDiv.style.display = "none"
};
close.addEventListener("click", fermerForm1)


let crochet = document.getElementById("crochet");
let saleItems = document.getElementById("sale-item");

let valider = document.getElementById('validation');





let inscription = document.getElementById("inscrit");






let close1 = document.getElementsByClassName("close1")[0];


let fermerform3 = () => {
    valider.style.display = "none";
}
close1.addEventListener("click", fermerform3)


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let maxWidth = parseInt(window.getComputedStyle(document.body).width);
    if (maxWidth <= 768) {
        return;
    } else {
        if (
            document.body.scrollTop > 395 ||
            document.documentElement.scrollTop > 395
        ) {
            //fixer la navbar
            maNav.style.zIndex = "1";
            maNav.style.backgroundColor = "black";
            maNav.style.left = "0";
            maNav.style.right = "0";
            maNav.classList.add("fixed-top");
            maNav.style.transitions = "2s";
            maNav.style.opacity = "0.5";
        } else {
            maNav.style.backgroundColor = "";
            maNav.classList.remove("fixed-top");
        }
    }
};



let carousel = document.querySelector("#fashion");
let colonnes = document.querySelectorAll(".slide .col-3");
let row = document.querySelector(".slide .row");
console.log(row)
let btnElts = carousel.querySelector(".buttonSlide");

const moveCarousel = (position) => {
    return `translateX(${-position * 25}%)`;
};

// const moveIcon = (pos) => {
//     btnElts.children.forEach(element => {
//         element.classList.add("far");
//         element.classList.remove("fas");
//     });
//     btnElts.children[pos].classList.add("fas");
//     btnElts.children[pos].classList.remove("far");
// }

let count = 0
setInterval(() => {
    row.style.transform = moveCarousel(count);
    if (count === 2) {
        count = 0;
    } else {
        count++;
    };
}, 3000);

for (let i = 0; btnElts.children.length; i++) {
    if (typeof btnElts.children[i] !== "undefined") {
        btnElts.children[i].addEventListener("click", () => {
            row.style.transform = moveCarousel(i);
            count = i;
        });
    } else {
        break;
    };
};


let retour = document.getElementById("return");

let btnRetour = () => {
    formulaire2.style.display = "none"
    maDiv.style.display = "block"
}
retour.addEventListener("click", btnRetour);

