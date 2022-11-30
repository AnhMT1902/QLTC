function showWallet() {
    let idUser = localStorage.getItem('id')
    $.ajax({
        type: 'GET', url: `http://localhost:3000/wallet/showAll/${idUser}`,
        headers: {
            'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token')
        }, success: (wallet) => {
            let str = `
<div id="services" class="our-services section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                    <h2><span>Ví</span> Của Bạn<em></em></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row" id="wallet">
        </div>
    </div>
</div>
<div class="col-lg-4" id="addWallet">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal"
                   data-bs-whatever="@mdo">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon fas fa-plus " style=""></div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4 style=" text-align: left;margin-top: 35px">Thêm Ví</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Creat Wallet</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label"></label>
                                        <input type="text" class="form-control" id="recipient-name"
                                               placeholder="Name Wallet">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onclick="creatWallet()" class="btn btn-primary"
                                        data-bs-dismiss="modal">Send Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            for (let i = 0; i < wallet.length; i++) {
                str += `<div class="col-lg-4">
                <a onclick="showDetailWallet('${wallet[i]._id}')"><div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="icon">
                                <img src="../template/assets/images/service-icon-01.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <h4 style=" text-align: left">Tên ví: ${wallet[i].name}</h4>
                            <h4 style=" text-align: left;margin-top: 35px">Số dư: ${wallet[i].money}</h4>
                        </div>
                    </div>
                </div></a>
            </div>`
            }
            $(`#body`).html(str)
        }
    })
}


creatWallet = async () => {
    let name = $('#recipient-name').val();
    let idUser = localStorage.getItem('id')
    let create = {
        name: name,
        idUser: idUser,
        money: 0
    }
    console.log(create)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/wallet/create',
        data: JSON.stringify(create),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }, success: (check) => {
            console.log(check)
            if (check.check) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'thêm ví thành công',
                    showConfirmButton: false,
                    timer: 900
                })
            } else {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'tên ví đã được sử dụng',
                    showConfirmButton: false,
                    timer: 900
                })
            }
            showWallet()
        }
    })
}