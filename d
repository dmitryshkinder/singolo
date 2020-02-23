[33mcommit 275849e1fa32c1fdd39297f3ac5ad4521eaf20f0[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: Dmitry Shkinderd <44124141+dmitryshkinder@users.noreply.github.com>
Date:   Thu Feb 20 16:26:07 2020 +0300

    fix: delete point in header nav

[1mdiff --git a/img/icons/bubble.svg b/img/icons/bubble.svg[m
[1mindex a21f553..eacc58e 100644[m
[1m--- a/img/icons/bubble.svg[m
[1m+++ b/img/icons/bubble.svg[m
[36m@@ -1,7 +1,7 @@[m
 <svg [m
  xmlns="http://www.w3.org/2000/svg"[m
  xmlns:xlink="http://www.w3.org/1999/xlink"[m
[31m- width="62px" height="62px">[m
[32m+[m[32mwidth="62px" height="62px">[m[41m[m
 <path fill-rule="evenodd"  fill="rgb(102, 109, 137)"[m
  d="M31.000,41.000 C29.943,41.000 28.913,40.918 27.914,40.772 C27.230,41.605 24.286,44.476 21.161,44.988 C21.165,44.975 21.000,45.000 20.906,45.000 C20.405,45.000 20.000,44.595 20.000,44.094 C20.000,43.967 20.027,43.846 20.074,43.736 C20.074,43.736 20.073,43.736 20.072,43.736 C20.661,42.723 22.000,40.793 22.000,39.000 C22.000,38.971 22.008,38.953 22.008,38.926 C17.779,36.766 15.000,33.127 15.000,29.000 C15.000,22.373 22.163,17.000 31.000,17.000 C39.836,17.000 47.000,22.373 47.000,29.000 C47.000,35.627 39.836,41.000 31.000,41.000 ZM31.000,19.000 C23.280,19.000 17.000,23.486 17.000,29.000 C17.000,32.207 19.212,35.252 22.918,37.145 C23.587,37.486 24.008,38.175 24.008,38.926 C24.008,38.982 24.005,39.046 23.999,39.110 C23.979,40.144 23.673,41.148 23.283,42.042 C24.723,41.186 25.940,40.024 26.368,39.503 C26.751,39.036 27.320,38.771 27.914,38.771 C28.010,38.771 28.107,38.778 28.204,38.793 C29.143,38.931 30.083,39.000 31.000,39.000 C38.720,39.000 45.000,34.514 45.000,29.000 C45.000,23.486 38.720,19.000 31.000,19.000 ZM31.000,23.000 C25.673,23.000 21.000,25.804 21.000,29.000 C21.000,29.276 20.776,29.500 20.500,29.500 C20.224,29.500 20.000,29.276 20.000,29.000 C20.000,25.206 25.037,22.000 31.000,22.000 C31.276,22.000 31.500,22.224 31.500,22.500 C31.500,22.777 31.276,23.000 31.000,23.000 Z"/>[m
 <path fill-rule="evenodd"  stroke="rgb(102, 109, 137)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"[m
[1mdiff --git a/index.html b/index.html[m
[1mindex 22fc649..3927058 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -21,7 +21,7 @@[m
         <nav class="site-navigation">[m
           <ul class="header__nav">[m
             <li class="header__item">[m
[31m-              <a href="" class="header__link">[m
[32m+[m[32m              <a href="#" class="header__link header__link-active">[m[41m[m
                 HOME[m
               </a>[m
             </li>[m
[1mdiff --git a/style.css b/style.css[m
[1mindex b65b655..1495ba5 100644[m
[1m--- a/style.css[m
[1m+++ b/style.css[m
[36m@@ -54,10 +54,13 @@[m [mhtml{[m
 [m
 .header__item::after{[m
   content: "·";[m
[31m-  color: #fff;[m
[32m+[m[32m  color: #494e62;[m[41m[m
   position: absolute;[m
   margin-left: 9px;[m
[31m-  margin-top: 6px;[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.header__item:last-child::after{[m[41m[m
[32m+[m[32m  content: "";[m[41m[m
 }[m
 [m
 .header__item:last-child{[m
[36m@@ -66,18 +69,22 @@[m [mhtml{[m
 [m
 .header__item{[m
   display: inline;[m
[31m-  font-size: 12px;[m
   margin-right: 30px;[m
   margin-right: 26px;[m
 }[m
 [m
 .header__link{[m
   color: #fff;[m
[32m+[m[32m  font-weight: bold;[m[41m[m
   text-decoration: none;[m
   font-weight: 700;[m
   font-size: 12px;[m
 }[m
 [m
[32m+[m[32m.header__link-active{[m[41m[m
[32m+[m[32m  color: #f06c64;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
 .header__hr{[m
   height: 6px;[m
   background-color: #323746;[m
[36m@@ -120,7 +127,7 @@[m [mhtml{[m
   width: 484px;[m
   height: 240px;[m
   float: left;[m
[31m-  margin-left: 74px;[m
[32m+[m[32m  margin-left: 73px;[m[41m[m
   margin-top: 174px;[m
 }[m
 [m
[36m@@ -176,7 +183,6 @@[m [mhtml{[m
   margin-top: 7px;[m
   line-height: 1.9;[m
   text-align: justify;[m
[31m-  word-spacing: -3px;[m
 }[m
 [m
 .services__list{[m
[36m@@ -212,6 +218,11 @@[m [mhtml{[m
   word-spacing: -2px;[m
 }[m
 [m
[32m+[m[32m.inovative-ideas-title{[m[41m[m
[32m+[m[32m  margin-left: 1px;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[41m[m
 .love-answer-title{[m
   margin-left: 3px;[m
 }[m
