"use strict";

$(document).ready(function(){
  $('.documents h3').on('click', function(){
    // console.log('実行');
    $(this).next().toggleClass('hidden');
  });
});