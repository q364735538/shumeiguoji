/**
 * Created by lihen on 2016/10/3.
 */
window.onload = function () {
//正则验证姓名和电话
//验证姓名
    var luNameReg = /^[\u4e00-\u9fa5]{2,6}$/;
    var luName = document.getElementById("luName");

    luName.onblur = function () {
        if (this.value.length < 16) {
            this.style.backgroundColor = "";
            if (luNameReg.test(this.value)) {
                // luName.nextSibling.innerText("∨");
                this.style.backgroundColor = "";
            } else {
                // luName.nextSibling.innerHTML("x");
                this.style.backgroundColor = "red";
            }
        } else {
            this.style.backgroundColor = "red";
        }

    };
    //验证电话号码
    var luPhoneReg = /^0[0-9]{2,3}[-][0-9]{7,8}$/;
    var luPhone = document.getElementById("luPhone");
};
