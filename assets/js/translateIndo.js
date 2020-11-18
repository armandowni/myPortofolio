function translateIndo() {
    var task1 = []
    var about = "Saya mahasiswa Universitas Bina Nusantara jurusan Teknik Informatika. Saat ini saya pernah mendapatkan pengalaman kerja di PT.Duta Data Teknologi bidang Web Developer selama satu tahun. Saya mempunyai pengalaman di framework angular, laravel, dan vuejs untuk frontend developer. Saya ingin mendapatkan pengalaman di karir freelance saya."

    var experience = "Saya juga mempunyai beberapa hobi seperti bermain game, memelihara kucing, dan bermain fingerboard. Game yang saya sukai bertemakan olahraga, balapan, battle royale, dll. Saya suka mengadopsi kucing liar yang tidak ada induk atau kucing yang sakit. Sekitar 5 kucing liar yang saya adopsi.Fingerboard adalah skateboard kecil yang di mainkan 2 jari. Hobi yang sangat saya sukai adalah fingerboard,karena ada kebanggaan sendiri jika bisa melakukan trik."

    var introSkill = "Di bawah ini saya mempunyai beberapa kemampuan yang pernah saya pelajari selama kuliah di BINUS. Beberapa kemampuan masih saya kembangkan dan sedang mencari kemampuan-kemampuan baru untuk menunjang karir saya."

    var introResume = "Di bawah ini adalah beberapa latar belakang, pendidikan,keterampilan, dan projek yang pernah saya kerjakan."

    var IntroPortofolio = "Di bawah ini saya mempunyai beberapa contoh projek yang pernah saya kerjakan dengan framework laravel, angular,vuejs. Tema yang saya kerjakan ada game, e-commerce, website untuk hobby dan website Point of sales(POS), dan lain-lain."

    var introContact = "Jika anda ingin lebih tau atau ada hal tentang web developer atau web desain yang ingin di tanyakan, bisa hubungi kontak atau isi form di bawah ini."

    var sumaryResume = "Web Developer yang inovatif dan kreatif dengan pengalaman kerja 1 tahun merancang dan mengembangkan sebuah website dari konsep awal hingga menjadi website yang berfungsi sesuai keinginan."

    var sma = "IPA"

    var kuliah = "Tenik Informatika"

    task1 = ["Membetulkan error atau bug di dalam website", "Membuat fitur-fitur baru", "Menghubungkan Website dengan API"]

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
    // console.log(ul.children.length);

    if (ul.children.length != 0) {
        // ul.removeChild(ul.children[0]);
        for (let index = 0; index <= ul.children.length+1; index++) {
            ul.removeChild(ul.children[0]);
        }
    }
    if (ul.children.length == 0) {
        for (let index = 0; index < task1.length; index++) {
            var y = document.createElement("LI");
            var t = document.createTextNode(task1[index]);
            y.appendChild(t);
            ul.appendChild(y);
        }
    }

}