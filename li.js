document.addEventListener("DOMContentLoaded", function () {
    // ចាប់យកគ្រប់រូបភាពដែលមានថ្នាក់ .reveal-img
    const animatedImages = document.querySelectorAll('.reveal-img');

    // កំណត់លក្ខខណ្ឌសម្រាប់ការចាប់រូបភាព
    const options = {
        root: null, // ផ្អែកលើអេក្រង់ browser ទាំងមូល
        threshold: 0.15 // ចលនានឹងចាប់ផ្តើមនៅពេលរូបភាពលេចចេញបាន ១៥% លើអេក្រង់
    };

    // បង្កើតមុខងារ Observer
    const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            // ប្រសិនបើរូបភាពបានលេចឡើងលើអេក្រង់
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // ថែម Class .active ដើម្បីឱ្យចលនារត់
                imageObserver.unobserve(entry.target); // ឈប់តាមដានរូបភាពនេះ (ឱ្យលេងចលនាតែទោលម្តងបានហើយ)
            }
        });
    }, options);

    // បញ្ជាឱ្យមុខងារចាប់ផ្តើមតាមដានរូបភាពគ្រប់គ្នា
    animatedImages.forEach(image => {
        imageObserver.observe(image);
    });
});