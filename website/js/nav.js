


const mobileDiv = document.getElementById("mobileDiv");

function toggleMobileMenu(){
    console.log('hello this toggled')
    console.log(mobileDiv)
    

    if (mobileDiv.classList.contains("default") || mobileDiv.classList.contains("closed")){
         mobileDiv.classList.add("open");
         mobileDiv.classList.remove("default");
         mobileDiv.classList.remove("closed");
    } else if (mobileDiv.classList.contains("open")){
            mobileDiv.classList.add("closed");
            mobileDiv.classList.remove("open");
    }   
       

};

