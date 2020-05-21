


const toggleMobileMenu = function(){
    const mobileDiv = document.getElementById(mobileDiv);
    //  mobileDiv.classLis.toggle("open");

    if (mobileDiv.hasClass("closed")){
         mobileDiv.removeClass("closed").addClass("open");
    } else
        mobileDiv.removeClass("open").addClass("closed");

};

