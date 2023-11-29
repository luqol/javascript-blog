'use strict';
{
    /* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links)
}) */
    const titleClickHandler = function(event){
        console.log('Link was clicked');
        console.log(event);
        /* remove class 'active' from all article links  */

        /* add class 'active' to the clicked link */
        this.classList.add('active');

        /* remove class 'active' from all articles */

        /* get 'href' attribute from the clicked link */

        /* find the correct article using the selector (value of 'href' attribute) */

        /* add class 'active' to the correct article */
    }
    const links = document.querySelectorAll('.titles a')

    for (const link of links){
         link.addEventListener('click', titleClickHandler);
    }

}

