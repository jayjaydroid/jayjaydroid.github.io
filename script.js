/* ==================================================
   CURRENT YEAR
================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==================================================
   MOBILE MENU
================================================== */

const menuButton =
    document.querySelector(".menu-button");

const navigation =
    document.querySelector(".navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );

}


/* ==================================================
   CLOSE MOBILE MENU
================================================== */

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navigation) {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                }

            }
        );

    }
);