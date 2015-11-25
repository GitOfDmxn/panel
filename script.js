/*
* @Author: 端木曦楠
* @Date:   2015-11-25 17:20:50
* @Last Modified by:   端木曦楠
* @Last Modified time: 2015-11-25 17:29:42
*/

function $(id) {
  return typeof id=='string'?document.getElementById(id):id;
}
window.onload = function(){
   $('contact').onclick = function(){
      $('panel1').style.display = 'block';
   }
   $('close-ico').onclick = function(){
      $('panel1').style.display = 'none';
   }
}
