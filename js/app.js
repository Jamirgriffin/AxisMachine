function sendEmail(name, email, telephone, message) {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            telephone: number,
            message: message,
            services: services
        })
    };
    return fetch("/contact", options)
        .then(res => {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your message has been sent Successfully!',
                })
                form.reset()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error, please try agian!',
                })
            }
        })
}