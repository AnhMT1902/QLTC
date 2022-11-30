function showDetailWallet(idWallet) {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/wallet/show/${idWallet}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }, success: (detailWallet) => {
            let str = `
<div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-12 align-self-center">
                        <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h2>Xin Chào UserName</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <table class="table ">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">TÊN GIAO DỊCH</th>
                                    <th scope="col">LOẠI GIAO DỊCH</th>
                                    <th scope="col">SỐ TIỀN</th>
                                </tr>
                                </thead>
                                <tbody class="table-group-divider" id="transaction">
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
       $('#body').html(str)
            printDetailHTML(detailWallet)
        }
    })
}
function printDetailHTML(detailWallet){
    let str = `<tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>`
    console.log(detailWallet)
}