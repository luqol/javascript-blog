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
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(const activeLink of activeLinks){
            activeLink.classList.remove('active');
        }
        /* add class 'active' to the clicked link */
        this.classList.add('active');

        /* remove class 'active' from all articles */
        const activeArtiles = document.querySelectorAll('.posts .post');

        for(const activeArticle of activeArtiles){
            activeArticle.classList.remove('active')
        }

        /* get 'href' attribute from the clicked link */

        /* find the correct article using the selector (value of 'href' attribute) */

        /* add class 'active' to the correct article */
    }
    const links = document.querySelectorAll('.titles a')

    for (const link of links){
         link.addEventListener('click', titleClickHandler);
    }

}

