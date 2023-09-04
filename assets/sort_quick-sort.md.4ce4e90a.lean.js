import{_ as u,E as o,o as D,c as i,k as s,a as l,t as T,J as a,w as n,U as y}from"./chunks/framework.f31b4cfb.js";const M=JSON.parse('{"title":"Ranodmized Quick Sort","description":"quick sort implementation","frontmatter":{"title":"Ranodmized Quick Sort","editLink":true,"description":"quick sort implementation"},"headers":[],"relativePath":"sort/quick-sort.md","filePath":"sort/quick-sort.md","lastUpdated":1693837762000}'),b={name:"sort/quick-sort.md"},h={id:"frontmatter-title",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),_=y("",2),g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.724ex",height:"6.354ex",role:"img",focusable:"false",viewBox:"0 -1562.5 7833.9 2808.5","aria-hidden":"true"},k=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D43B",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(1165.8,0)"},[s("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"munderover",transform:"translate(2221.6,0)"},[s("g",{"data-mml-node":"mo"},[s("path",{"data-c":"2211",d:"M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"TeXAtom",transform:"translate(148.2,-1087.9) scale(0.707)","data-mjx-texclass":"ORD"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mo",transform:"translate(345,0)"},[s("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mn",transform:"translate(1123,0)"},[s("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mi",transform:"translate(509.9,1150) scale(0.707)"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mfrac",transform:"translate(3832.2,0)"},[s("g",{"data-mml-node":"mn",transform:"translate(360.8,676)"},[s("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"msup",transform:"translate(220,-719.9)"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mn",transform:"translate(378,289) scale(0.707)"},[s("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])]),s("rect",{width:"981.6",height:"60",x:"120",y:"220"})]),s("g",{"data-mml-node":"mo",transform:"translate(5331.6,0)"},[s("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mfrac",transform:"translate(6387.3,0)"},[s("g",{"data-mml-node":"msup",transform:"translate(220,676)"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D70B",d:"M132 -11Q98 -11 98 22V33L111 61Q186 219 220 334L228 358H196Q158 358 142 355T103 336Q92 329 81 318T62 297T53 285Q51 284 38 284Q19 284 19 294Q19 300 38 329T93 391T164 429Q171 431 389 431Q549 431 553 430Q573 423 573 402Q573 371 541 360Q535 358 472 358H408L405 341Q393 269 393 222Q393 170 402 129T421 65T431 37Q431 20 417 5T381 -10Q370 -10 363 -7T347 17T331 77Q330 86 330 121Q330 170 339 226T357 318T367 358H269L268 354Q268 351 249 275T206 114T175 17Q164 -11 132 -11Z",style:{"stroke-width":"3"}})]),s("g",{"data-mml-node":"mn",transform:"translate(603,363) scale(0.707)"},[s("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])]),s("g",{"data-mml-node":"mn",transform:"translate(473.3,-686)"},[s("path",{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z",style:{"stroke-width":"3"}})]),s("rect",{width:"1206.6",height:"60",x:"120",y:"220"})])])],-1),w=[k],v=y("",14);function H(A,x,L,V,E,q){const p=o("mi"),t=o("mo"),e=o("mn"),F=o("mrow"),C=o("munderover"),r=o("msup"),c=o("mfrac"),m=o("math"),d=o("mjx-assistive-mml"),Q=o("mjx-container");return D(),i("div",null,[s("h1",h,[l(T(A.$frontmatter.title)+" ",1),f]),_,a(Q,{class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},{default:n(()=>[(D(),i("svg",g,w)),a(d,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:n(()=>[a(m,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:n(()=>[a(p,null,{default:n(()=>[l("H")]),_:1}),a(t,null,{default:n(()=>[l("=")]),_:1}),a(C,null,{default:n(()=>[a(t,{"data-mjx-texclass":"OP"},{default:n(()=>[l("∑")]),_:1}),a(F,{"data-mjx-texclass":"ORD"},{default:n(()=>[a(p,null,{default:n(()=>[l("i")]),_:1}),a(t,null,{default:n(()=>[l("=")]),_:1}),a(e,null,{default:n(()=>[l("1")]),_:1})]),_:1}),a(p,null,{default:n(()=>[l("n")]),_:1})]),_:1}),a(c,null,{default:n(()=>[a(e,null,{default:n(()=>[l("1")]),_:1}),a(r,null,{default:n(()=>[a(p,null,{default:n(()=>[l("i")]),_:1}),a(e,null,{default:n(()=>[l("2")]),_:1})]),_:1})]),_:1}),a(t,null,{default:n(()=>[l("=")]),_:1}),a(c,null,{default:n(()=>[a(r,null,{default:n(()=>[a(p,null,{default:n(()=>[l("π")]),_:1}),a(e,null,{default:n(()=>[l("2")]),_:1})]),_:1}),a(e,null,{default:n(()=>[l("6")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),v])}const P=u(b,[["render",H]]);export{M as __pageData,P as default};
