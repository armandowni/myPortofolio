function translateEn() {
    var task1 = []
    var about = "I am a student at Bina Nusantara University majoring in Informatics Engineering. Currently, I have had a year of work experience at PT Duta Data Teknologi in the field of Web Developer. I have experience in angular, laravel, and vuejs frameworks for frontend developers. I want to gain experience in my freelance career."

    var experience = "I also have several hobbies such as playing games, raising cats and playing on the fingerboard. The games I like have the theme of sports, racing, battle royale, etc. I like to adopt stray cats that are not mother-to-be or sick cats. About 5 stray cats that I adopted. The fingerboard is a small skateboard that is played with 2 fingers. My favorite hobby is the fingerboard, because I pride myself in being able to do tricks."

    var introSkill = "Below I have some of the abilities that I have learned while studying at BINUS. I am still developing several abilities and am looking for new abilities to support my career."

    var introResume = "Below are some of the backgrounds, education, skills, and projects I've worked on."

    var IntroPortofolio = "Below I have some sample projects I've worked on with the laravel, angular, vuejs framework. The theme I am working on is games, e-commerce, websites for hobbies and websites for Point of Sales (POS), and so on."

    var introContact = "If you want to know more or have anything about web developer or web design that you want to ask, you can contact contact or fill in the form below."

    var sumaryResume = "An innovative and creative web developer with 1 year work experience designing and developing a website from the initial concept to a website that functions as desired."

    var sma = "Science"

    var kuliah = "School of Computer Science"

    task1 = ["Fix errors or bugs on the website", "Creating new features", "Linking Website with API"]

    document.getElementById("aboutSelf").innerHTML = about
    document.getElementById("addOnExpereience").innerHTML = experience
    document.getElementById("myskills").innerHTML = introSkill
    document.getElementById("ResumeIntro").innerHTML = introResume
    document.getElementById("PortofolioIntro").innerHTML = IntroPortofolio
    document.getElementById("ContactIntro").innerHTML = introContact
    document.getElementById("SummaryIntro").innerHTML = sumaryResume
    document.getElementById("sma").innerHTML = sma
    document.getElementById("kuliah").innerHTML = kuliah
    var ul = document.getElementById("listTask1");

    // ul.removeChild(ul.childNodes[2]); 
    if (ul.children.length != 0) {
        for (let index = 0; index <= ul.children.length+1; index++) {
            ul.removeChild(ul.children[0]);
        }
    }
    if(ul.children.length == 0){
        for (let index = 0; index < task1.length; index++) {
            var y = document.createElement("LI");
            var t = document.createTextNode(task1[index]);
    
            y.appendChild(t);
            ul.appendChild(y);
        }
    }
    
}