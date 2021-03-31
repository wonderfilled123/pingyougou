window.onload = function(){
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regqq =/^[1-9]\d{4,}$/; // 4,大于等于4位
    var reguname =/^[\u4e00-\u9fa5]{2,8}$/;
    var regmes = /^\d{6}$/;
    var tel = document.querySelector("#tel");
    var qq = document.querySelector("#qq");
    var mes = document.querySelector("#mes");
    var uname = document.querySelector("#uname");
    var psw = document.querySelector("#psw");
    var sure= document.querySelector("#sure");
    regexp(tel,regtel);
    regexp(qq,regqq);
    regexp(uname,reguname);
    regexp(mes,regmes);
    regexp(psw,regpsw);
  

    function regexp(ele,reg) {
        ele.onblur = function(){
            if(reg.test(this.value))
            {
                this.nextElementSibling.className="success";
                this.nextElementSibling.innerHTML='<i class="success-icon"></i>恭喜您输入正确';
            }
            else
            {
               this.nextElementSibling.className="error";
               this.nextElementSibling.innerHTML='<i class="error-icon"></i>恭喜您输入不正确';
            }
       }
    } 

   

}