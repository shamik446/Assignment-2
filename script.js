


//Array of objects

const imageArray = [
    {
        url:"images/product1.png",
    },
    {
        url:"images/product2.png",
    },
    {
        url:"images/product3.png",
    },
     {
        url:"images/product4.png",
    },
    {
        url:"images/product5.png",
    },
    {
        url:"images/product6.png",
    },
];

function handleShowMoreProject () {

    const projectContainer = document.getElementById("projects")
    
    
   

    for(const item of imageArray) {
      
        const projectDivImage = document.createElement("div");
       
      projectDivImage.classList.add("project");
        projectDivImage.innerHTML = `

     <img src="${item.url}" alt="">
     `;

        projectContainer.appendChild(projectDivImage);

        console.log(projectDivImage);
        
    }

    console.log("click", projectContainer);
}

function handleContact(event) {
    event.preventDefault();

   
    const email = event.target.email.value;
    const search = event.target.search.value;
    
    console.log(email);
    console.log(search);


    const successContainer = document.getElementById("success_container");

    console.log(successContainer);

    const emailParagraph = document.createElement("p");
    emailParagraph.innerText = `Your Email : ${email}`;


    console.log(emailParagraph);


    successContainer.appendChild(emailParagraph);

}