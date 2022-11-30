showHomeHtml()

function showHomeHtml() {
    let idUser = localStorage.getItem('id')
    $.ajax({

        type: 'GET', url: `http://localhost:3000/user/infoUser/${idUser}`,
        headers: {
            'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token')
        }, success: (user) => {
            let str = `<div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                <div class="col-lg-2 align-self-center"></div>
                    <div class="col-lg-10 align-self-center">
                        <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                            <div class="row">                       
                                <div class="col-lg-12">
                                    <h2 id="hello">Xin chào ${user.username}</h2>
                                </div>
                                <div class="col-lg-12">
                                    <div class="main-green-button scroll-to-section">
                                        <a onclick="showWallet()">Ví của bạn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
            document.getElementById("body").innerHTML = str
        }
    })
}
