function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
}

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let surnameInput = document.getElementById("surname");
    let phoneInput = document.getElementById("phone");
    let messageInput = document.getElementById("message");

    let name = nameInput.value.trim();
    let surname = surnameInput.value.trim();
    let phone = phoneInput.value.trim();
    let message = messageInput.value.trim();

    let phoneRegex = /^\+374\d{8}$/;

    if (!phoneRegex.test(phone)) {
        alert("⚠ Խնդրում ենք մուտքագրել վավեր հեռախոսահամար (+374) կոդով:");
        return;
    }

    let botToken = "7419149285:AAFaiEA-GpFmjGlM-c1cnJlMb4SaZqdyhI8"; 
    let chatId = "-1002637926880"; 

    let text = `📩 Նոր հաղորդագրություն!\n\n👤 Անուն: ${name} ${surname}\n📞 Հեռախոս: ${phone}\n📝 Հաղորդագրություն: ${message || "Հաղորդագրություն չկա"}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: text })
        });

        let data = await response.json();

        if (data.ok) {
            alert("✅ Հաղորդագրությունը հաջողությամբ ուղարկվեց!");

            nameInput.value = "";
            surnameInput.value = "";
            phoneInput.value = "";
            messageInput.value = ""; 

        } else {
            alert(`❌ Սխալ: ${data.description}`);
            console.error("Telegram API Error:", data);
        }
    } catch (error) {
        alert("❌ Տվյալները չուղարկվեցին, Խնդրում եմ ստուգեք ինտերնետը կամ վերանայեք լրացված դաշտերը!");
        console.error("Error:", error);
    }
});
