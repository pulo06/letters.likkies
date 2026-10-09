const letters = {

    reminder: {

        title: "A Little Reminder",

        text: `
            <p>Dear Likkies,</p>

            <p>
                I hope you know that you are loved by everyone around you,
                and that you deserve all the love you receive. Even when
                things get down, I hope you find reasons to smile again.
            </p>

            <p>
                You really are such a kind person (even though you always
                say, "I'm such a bad person" lmao). And honestly, I hope
                life is always a little kinder to you because you deserve
                that hehe.
            </p>

            <p>
                So yeah, just a little reminder that you are loved,
                appreciated, and important to the people around you.
                Don't ever doubt that, okay?
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    },


    things: {

        title: "Little Things I Like",

        text: `
            <p>Dear Likkies,</p>

            <p>
                I don't think I say this enough, but there are so many
                things I like about you. First of all, you're very pretty,
                obviously hehe, but I think what makes you even prettier
                is how kind you are.
            </p>

            <p>
                You're such an empath and you understand people's feelings
                so well. I really like that about you because you always
                seem to notice when something is wrong, even when someone
                doesn't say anything.
            </p>

            <p>
                And of course, I can't forget how you always get me food.
                I'm forever grateful hehe, and it just shows how caring
                you are. I also can't forget that one night when we were
                so hungry, we were literally just sitting there at like
                2 AM with Ruby, laughing and cracking the most random jokes.
                I don't even remember what was so funny anymore, but somehow
                we couldn't stop laughing.
            </p>

            <p>
                So yeah, these are just some of the little things I like
                about you. There's probably a lot more, but I'll save those
                for another time lmao.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    },


    faith: {

        title: "For Your Heart",

        text: `
            <p>Dear Likkies,</p>

            <p>
                I hope you always remember that God loves you so much and
                that He has a purpose for your life. Even when you don't
                understand why certain things happen, I hope you keep
                trusting Him and remember that He is always with you.
            </p>

            <p>
                I pray that God keeps guiding you, protecting you, and
                giving you reasons to smile even during the hard days.
                I hope He brings good people into your life, gives you
                the strength to get through whatever comes your way,
                and blesses you with all the happiness you deserve.
            </p>

            <p>
                I hope you know that I'll always be grateful that I got
                to know you. Take care of yourself, okay? And please don't
                forget how loved you are.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    }

};


const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");


let mailboxOpened = false;

let selectedLetter = false;


mailbox.addEventListener("click", () => {

    if (mailboxOpened) {
        return;
    }

    mailboxOpened = true;

    mailbox.classList.add("open");

    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);


    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";


    setTimeout(() => {

        lettersArea.classList.add("visible");


        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});


envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {
            return;
        }

        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];

        if (!letter) {
            return;
        }

        selectedLetter = true;


        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;


        envelope.classList.add("selected");


        envelopes.forEach(other => {

            if (other !== envelope) {
                other.classList.add("locked");
            }

        });


        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});


closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});


overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});


function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";


    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";


    const colors = [

        "#f4d878",
        "#e8c75c",
        "#f5df9a",
        "#d9e6d0",
        "#ded7e9"

    ];


    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";


    document.body.appendChild(petal);


    requestAnimationFrame(() => {

        petal.classList.add("active");

    });


    setTimeout(() => {

        petal.remove();

    }, 7500);

}


setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);


setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        "translateY(-4px) rotate(-1deg)"
                },

                {
                    transform:
                        "translateY(0) rotate(0deg)"
                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);
