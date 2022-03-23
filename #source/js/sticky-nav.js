 $(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });
 AOS.init({
        offset: 130, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 500 // values from 0 to 3000, with step 50ms
      });