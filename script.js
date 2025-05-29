document.addEventListener('DOMContentLoaded', () => {
    // Bu hissələr yalnız login.html faylında işləyəcək
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const forgotPasswordLink = document.getElementById('forgot-password');
    const backToLoginLink = document.getElementById('back-to-login');

    if (loginForm && forgotPasswordForm) {
        // Login formunu başlanğıcda aktiv et
        loginForm.classList.add('active');
        forgotPasswordForm.classList.add('hidden');

        // Şifrəni unutdum formuna keçid
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.remove('active');
            loginForm.classList.add('hidden');
            setTimeout(() => {
                forgotPasswordForm.classList.remove('hidden');
                forgotPasswordForm.classList.add('active');
            }, 300);
        });

        // Şifrəni unutdum formundan geri giriş formuna qayıt
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            forgotPasswordForm.classList.remove('active');
            forgotPasswordForm.classList.add('hidden');
            setTimeout(() => {
                loginForm.classList.remove('hidden');
                loginForm.classList.add('active');
            }, 300);
        });
    }

    // Şifrəni göstərmək/gizlətmək funksiyası (hər iki səhifədə istifadə olunur)
    window.togglePasswordVisibility = function(id) {
        const passwordInput = document.getElementById(id);
        const toggleIcon = passwordInput.nextElementSibling.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    };

    // Form submit hadisələri (yalnız nümunə, real tətbiqdə serverə göndərilməlidir)

    // Qeydiyyat formu (index.html)
    const registerFormElement = document.getElementById('register-form');
    if (registerFormElement) {
        registerFormElement.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Şifrələr uyğun gəlmir!');
                return;
            }
            // PATTERN DƏYİŞDİRİLDİ
            if (!/^[a-zA-Z0-9]{1,16}$/.test(password)) {
                 alert('Şifrə a-z, 0-9 simvollarından ibarət olmalı və maksimum 16 simvol olmalıdır!');
                 return;
            }

            // Qeydiyyat uğurlu olduqdan sonra giriş səhifəsinə yönləndir
            alert('Qeydiyyat uğurlu oldu!'); // İstifadəçiyə bildiriş
            window.location.href = 'login.html'; // Giriş səhifəsinə yönləndirmə
        });
    }


    // Giriş formu (login.html)
    if (loginForm) { // loginForm elementi yalnız login.html-də mövcud olacaq
        loginForm.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('login-password').value;

            // PATTERN DƏYİŞDİRİLDİ
            if (!/^[a-zA-Z0-9]{1,16}$/.test(password)) {
                 alert('Şifrə a-z, 0-9 simvollarından ibarət olmalı və maksimum 16 simvol olmalıdır!');
                 return;
            }
            alert('Giriş uğurlu oldu! (Bu, sadəcə bir nümunədir.)');
            // Real tətbiqdə burada serverə AJAX sorğusu göndərilir
        });
    }

    // Şifrə bərpası formu (login.html)
    if (forgotPasswordForm) { // forgotPasswordForm elementi yalnız login.html-də mövcud olacaq
        forgotPasswordForm.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Şifrə bərpası üçün emailinizə link göndərildi! (Bu, sadəcə bir nümunədir.)');
            // Real tətbiqdə burada serverə AJAX sorğusu göndərilir
        });
    }
});