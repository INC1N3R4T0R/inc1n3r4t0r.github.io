       //--------------------------------//
    
       function executeCommand(){
        var x = document.getElementById("input1").value;
        
        //Changing the color of input received
        $('#input1').replaceWith(x);
        $('#input1').css('color','#fbf1c7');
        //Replacing the input field with its answer to perma-freeze it

        //removing ID for another inputer to use
        $("#input1").removeAttr('id');
        

        const para = document.createElement("span");
        const element = document.getElementById("inputer");

        //SETTING MAIN CONDITIONS
        if (x=='instagram') //instagram
        {        
          para.classList.add("c1");
          
          setTimeout(() => {
            para.textContent = 'Opening Instagram.';
            element.appendChild(para);
          }, 500);

          setTimeout(() => {
            para.textContent = 'Opening Instagram..';
            element.appendChild(para);
          }, 1500);

          setTimeout(() => {
            para.textContent = 'Opening Instagram...';
            element.appendChild(para);
          }, 2000);

          setTimeout(() => {
            window.open("https://instagram.com/incinerator.codes","_blank");
          }, 3500);
          
          setTimeout(() => {
            para.textContent = 'Successfully redirected to Instagram';
            element.appendChild(para);
          }, 5500);

          setTimeout(() => {
            displayInputer();
          }, 6500);
        }

        else if (x=='linkedin') //linkedin
        {        
          para.classList.add("c1");
          
          setTimeout(() => {
            para.textContent = 'Fetching Linkedin.';
            element.appendChild(para);
          }, 500);

          setTimeout(() => {
            para.textContent = 'Fetching Linkedin..';
            element.appendChild(para);
          }, 1500);

          setTimeout(() => {
            para.textContent = 'Fetching Linkedin...';
            element.appendChild(para);
          }, 2000);

          setTimeout(() => {
            window.open("https://www.linkedin.com/in/aniket-chandanshive-24186b229/","_blank");
          }, 3500);
          
          setTimeout(() => {
            para.textContent = 'Successfully redirected to Linkedin';
            element.appendChild(para);
          }, 5500);

          setTimeout(() => {
            displayInputer();
          }, 6500);
        }

        else if (x=='cls'){
          
        }

        else{ //Default wrong command line
          para.textContent = "bash: Unable to locate '"+x+ "'. Type 'help' to get a list of commands.";
          para.classList.add('error');
          element.appendChild(para);

          displayInputer();
        }

      //--------------------------------//