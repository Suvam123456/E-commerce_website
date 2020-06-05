
let queary=window.matchMedia("(min-width:800px)");

    function sideNavMenu(queary){
        if(queary.matches){
            document.getElementById("topNavLink").style.transform="scale(1,1)";
        }
        else{
            document.getElementById("topNavLink").style.transform="scale(1,0)";
            let sideMenuBoolean=false;
            for(let i=0;i<2;i++){
                document.querySelectorAll("#sideNavMenu")[i].addEventListener("click",()=>{
                    if(sideMenuBoolean===false){
                        console.log(false);
                        document.querySelectorAll("#topNavLink")[i].style.transform= "scale(1,1)";
                        sideMenuBoolean=true;
                }
                else if(sideMenuBoolean===true){
                        console.log(true);
                        document.querySelectorAll("#topNavLink")[i].style.transform="scale(0,0)";
                        sideMenuBoolean=false;
                }
            })
         }
      }
    }
    sideNavMenu(queary);
    queary.addListener(sideNavMenu);

//------------------laptopLowerNav-------------------------------------
let imageSlider=document.querySelector("#imgContainer");
        let image=document.querySelectorAll("#imgContainer img");
        const size=85;
        var counter=1;
        document.getElementById("NxtBtn").addEventListener("click",()=>{
            if(counter>image.length){
                counter=1;
                imageSlider.style.transform="translateX("+ size*counter+"px)";
            }
            else{
                imageSlider.style.transform="translateX("+ -size*counter+"px)";
                counter++;
            }
        })

        document.getElementById("previousBtn").addEventListener("click",()=>{
            if(counter>image.length){
                counter=1;
                imageSlider.style.transform="translateX("+ -size*counter+"px)";
            }
            else{
                imageSlider.style.transform="translateX("+ size*counter+"px)";
                counter++;
            }
        })


//------------------------------advertise-------------------------------------
var addImage=["img/kitchen_hbd_rb_24may.jpg","img/7b8e5d1df0df2689.jpg","img/Homegym_hbd_rb_19may.jpg","img/24May_Audio_Store_W_Hero_DC.jpg"];
let imageNo=0;
function advertisements(){
 document.getElementById("advertisementImg").src=addImage[imageNo];
 imageNo++;
 if(imageNo>addImage.length-1)
    imageNo=0;
}
setInterval(advertisements,3000);
//---------------cart--------------------------
for(let i=0;i<2;i++){
   document.querySelectorAll("#cartImg")[i].addEventListener("click",()=>{
      document.querySelectorAll("#cartSideBar")[i].style.transform="scale(1,1)";
      document.querySelectorAll("#cartClose")[i].style.display="block";
   })

   document.querySelectorAll("#cartClose")[i].addEventListener("click",()=>{
      document.querySelectorAll("#cartSideBar")[i].style.transform="scale(1,0)";
      document.querySelectorAll("#cartClose")[i].style.display="none";
   })
}

    let quantity=0;
    let price=0;
    let cartArr=[];

   function includeCart(y){
       let mainCartDiv=document.createElement("div");
       mainCartDiv.id="cartDivs"+y;
       if(document.getElementById("cartDivs"+y)!=null){
        console.log("inside cart return part");
            return;
         }
       else{
            //console.log("inside cart else part");
            mainCartDiv.style.height="200px";
            mainCartDiv.style.width="100%";
            mainCartDiv.style.backgroundColor="blue";
            mainCartDiv.style.borderBottom="2px solid black";
            mainCartDiv.style.display="grid";
            mainCartDiv.style.gridTemplateColumns="40% 1fr";
            mainCartDiv.style.gridTemplateRows="80% 20%";
            document.querySelectorAll("#cartItemList")[1].appendChild(mainCartDiv);

       let subCartDiv1=document.createElement("div");
       let subCartDiv2=document.createElement("div");
       let subCartDiv3=document.createElement("div");
       let subCartDiv4=document.createElement("div");
       subCartDiv1.style.backgroundColor="yellow";
       subCartDiv2.style.backgroundColor="green";
       subCartDiv3.style.backgroundColor="orange";
       subCartDiv4.style.backgroundColor="white";

       mainCartDiv.appendChild(subCartDiv1);
       mainCartDiv.appendChild(subCartDiv2);
       mainCartDiv.appendChild(subCartDiv3);
       mainCartDiv.appendChild(subCartDiv4);

       for(let i=0;i<this.productObjEntries.length;i++){
            if(this.productObjEntries[i][0]===y){
                 creatCartImg(this.productObjEntries[i][1][0]);
                 cartPriceandQuantity(this.productObjEntries[i][1][2]);
            }

       }
       function creatCartImg(imgSrc){
            let newCartImg=document.createElement('img');
            newCartImg.src=imgSrc;
            newCartImg.style.height="100%";
            newCartImg.style.width="100%";
            newCartImg.style.objectFit="contain";
            subCartDiv1.appendChild(newCartImg);
            //subCartDiv2.innerText=entries[0][1][1];
       }
//----   
       function cartPriceandQuantity(cartPrice){
            let cartQuantityButt=document.createElement("button");
            cartQuantityButt.id="quantityItem"+y;
            cartQuantityButt.innerText="2";
            subCartDiv3.appendChild(cartQuantityButt);

            let cartPriceButt=document.createElement("button");
            cartPriceButt.id="priceItem"+y;
            cartPriceButt.innerText=cartPrice;
            cartPriceButt.style.backgroundColor="green";
            subCartDiv4.appendChild(cartPriceButt);

            let CartRemvButt=document.createElement("button");
            CartRemvButt.id="remove"+y;
            CartRemvButt.innerText="REMOVE";
            CartRemvButt.style.backgroundColor="red";
            subCartDiv4.appendChild(CartRemvButt);
    }
           
          cartArr.push(y);
          let remvArrdata=document.createElement("div");
          remvArrdata.innerText=y;
          remvArrdata.style.display="none";
          document.getElementById("remove"+y).appendChild(remvArrdata);

         document.getElementById("remove"+y).addEventListener("click",()=>{
             console.log("remove");
         let arryRemvNo =parseInt(document.getElementById("remove"+y).firstElementChild.innerText);//product key that need to be deleted
           for(let i=0;i<cartArr.length;i++){
                if(cartArr[i]==arryRemvNo){
                    console.log("checking");
                    cartArr.splice(i,1);
                }
           }
             document.getElementById("remove"+y).parentNode.parentNode.remove();
             finalPriceUpdate();
        }) 
           finalPriceUpdate();
    }
    
}    

      function finalPriceUpdate(){
          var result=0;
          console.log(cartArr);
          for( let i=0;i<cartArr.length;i++){
              console.log(document.getElementById("quantityItem"+cartArr[i]));
              result+=parseInt(document.getElementById("quantityItem"+cartArr[i]).innerText)*parseInt(document.getElementById("priceItem"+cartArr[i]).innerText);
         }
           document.querySelectorAll("#cartPriceing")[1].innerText=result+"("+cartArr.length+")";
           document.querySelectorAll("#cartQuantity")[0].innerHTML=cartArr.length;
           document.querySelectorAll("#cartQuantity")[1].innerHTML=cartArr.length;
         }

      //------------filter-------------------------------
      let filterFlag=false;
      let innerBrandFlag=false;
      document.querySelectorAll("#filterImg")[0].addEventListener("click",()=>{
          if(filterFlag==false){
            document.querySelectorAll("#filterItem")[0].style.transform="scale(1,1)"
            filterFlag=true;
          }
          else if(filterFlag==true){
            document.querySelectorAll("#filterItem")[0].style.transform="scale(1,0)"
            filterFlag=false;
          }
      })
      document.querySelectorAll("#brandBtn")[0].addEventListener("click",()=>{
                
                if(innerBrandFlag==false){
                    //console.log("inside brand");
                    document.getElementById("innerBrand").style.display="block";
                    innerBrandFlag=true;
                }
                else if(innerBrandFlag==true){
                    //console.log("outside brand");
                    document.getElementById("innerBrand").style.display="none";
                    innerBrandFlag=false;
                }
      })


      //--------------main search-----------------------------------------------------------
      // document.getElementById("mainSearchBtn").addEventListener("click",()=>{
      //    document.getElementById("searchPage").style.display="block";
      //    document.getElementById("homePage").style.display="none";
      // })

      let filterCount=0;
      
      var allProductList={
         electronics:["tv","smart tv","chimni","washing machine","trimmer","grinder","fridgr"],
         cloth:["shirt","top","tshirt","pant","fullpant","jeans","cottonpant","shocks","tie","kurti","bleazer"],
         sports:["crickrt bat","cosco ball","basket ball","swiming dress","hockey stick","foot ball"],
         mobileAndLaptop:["mobile","laptop"],
         homeUtensils:[""]
     }
      
     for(let i=0;i<2;i++){
       document.querySelectorAll("#mainSearchBtn")[i].addEventListener("click",()=>{

        if(filterCount>0 && this.occupiedSerchPage===true){
            for(let del=0;del<filterCount;del++){
                console.log("search page delete loop"+del);
                document.getElementById("searchPage").removeChild(document.getElementById("searchPage").lastElementChild);
            }
            filterCount=0;
         }

         else if(this.occupiedSerchPage===true){
             for(let del=0;del<this.productObjEntries.length;del++){
                 console.log("search page delete loop"+del);
                 document.getElementById("searchPage").removeChild(document.getElementById("searchPage").lastElementChild);
             }
         }
          
         this.occupiedSerchPage=false;
         document.getElementById("homePage").style.display="none";
         document.getElementById('searchPage').style.display="block";

         let serchedItem=document.querySelectorAll("#serchPlace")[i].value;
         let productList=Object.entries(allProductList);//product category identification
         for(let i=0;i<productList.length;i++){
             for(let j=0;j<productList[i][1].length;j++){
                 let checkingItem=productList [i][1][j];
                     if(serchedItem===checkingItem)
                         this.requiredSection=productList[i][0];//get category
             }
         }
        //console.log(this.requiredSection);
//----------------------------------------------------SWITCH CASES
      switch(this.requiredSection){

         case "mobileAndLaptop":
                switch(serchedItem){
                      case "mobile":
                         this.productObject={
                           1:["img/mobileAndLaptop/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpeg",""],
                           2:["img/mobileAndLaptop/apple-iphone-xs-mt9k2hn-a-original-imaf97f6hqebeych.jpeg",""],
                           3:["img/mobileAndLaptop/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg",""],
                           4:["img/mobileAndLaptop/oneplus-7t-hd1901-original-imafkwsyvmpx7xhf.jpeg",""],
                           5:["img/mobileAndLaptop/oneplus-7t-pro-hd1901-original-imafhck22abeqsqm.jpeg",""],
                           6:["img/mobileAndLaptop/pixel-3a-64-b-g020f-google-4-original-imafga3dbtbgrwpk.jpeg",""],
                           7:["img/mobileAndLaptop/samsung-galaxy-s9-plus-sm-g965fzkdins-original-imaf372g5zukw8wr.jpeg",""],
                           8:["img/mobileAndLaptop/samsung-galaxy-a51-sm-a515fzkhins-original-imafzhr399hrsbzb.jpeg",""],
                           9:["img/mobileAndLaptop/samsung-galaxy-s10-lite-sm-g770fzbsinu-original-imafzaqnw6bpqwag.jpeg",""],
                           10:["img/mobileAndLaptop/samsung-galaxy-s20-sm-g985fzadinu-original-imafpfkbqg3hpmgt.jpeg",""]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1],this.productObjEntries.length);
                         }
                         break;
                      case "laptop":
                         this.productObject={
                             11:["img/mobileAndLaptop/apple-na-thin-and-light-laptop-original-imafe6f78hur4jbh.jpeg",""],
                             12:["img/mobileAndLaptop/asus-na-laptop-original-imafr6cbfurgkspg.jpeg",""],
                             13:["img/mobileAndLaptop/asus-original-imafpbjwzpwnk3ry.jpeg",""],
                             14:["img/mobileAndLaptop/hp-na-2-in-1-laptop-original-imafghn4xssgnhee.jpeg",""],
                             15:["img/mobileAndLaptop/hp-na-laptop-original-imafzhjpvmbm2rzw.jpeg",""],
                             16:["img/mobileAndLaptop/hp-na-original-imafz5gjfz3tjgny.jpeg",""],
                             17:["img/mobileAndLaptop/hp-original-imafgg55bv2xzegc.jpeg",""],
                             18:["img/mobileAndLaptop/Lenovo-Ideapad-S145-81N30063IN-15-SDL510179960-1-4ff9e.jpeg",""],
                             19:["img/mobileAndLaptop/lenovo-na-gaming-laptop-original-imafjjj4wuudpbyn.jpeg",""],
                             20:["img/mobileAndLaptop/lenovo-na-laptop-original-imafmsgxyfq9z9cc.jpeg",""]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                     }
             break;

         case "cloth":
                switch(serchedItem){
                    case "shirt":
                    this.brandArr=["lp","jp","roadstr","ajio","Arrow","PA","Buff"];

                    for(let i=0;i<this.brandArr.length;i++){    //filter purposeb  
                        let filterBrandDiv=document.createElement("div");
                        filterBrandDiv.id="filterBrandDiv"+i;
                        document.getElementById("innerBrand").appendChild(filterBrandDiv);

                        let filterBrandText=document.createTextNode(this.brandArr[i]);
                        filterBrandText.id="filterBrandText"+i;
                        filterBrandDiv.appendChild(filterBrandText);   
                        
                        let filterBrandCheckBox=document.createElement("input");
                        filterBrandCheckBox.type="checkbox";
                        filterBrandCheckBox.id="filterBrandCheckBox"+i;
                        filterBrandDiv.appendChild(filterBrandCheckBox); 

                    }
                    
                    this.productObject={
                           21:["img/cloth/7xl-eamkc0006-sayesha-original-imaf7aysywz2f9uy.jpeg","this is shirt and only for checking \n purpose we will come to it later","1000","Arrow"],
                           22:["img/cloth/38-07082018-partywear-a2-anu06-house-of-sensation-original-imaf98xa262ybypx.jpeg","this is shirt and only for checking purpose we will come to it later","2000","Buff"],
                           23:["img/cloth/m-arhf-gr-base-41-original-imafen82rhxmpsg8.jpeg","","2000","jp"],
                           24:["img/cloth/m-hlsh010282-highlander-original-imafpchwgwhpezyf.jpeg","","2500","lp"],
                           25:["img/cloth/xl-oshdnf-bl-ojass-original-imaf9pnwdpwf2eg2.jpeg","","500","lp"],
                           26:["img/cloth/xxl-cs640501-ghpc-original-imaf96evn5dfyysw.jpeg","","300","lp"],
                           27:["img/cloth/xxl-tblwtshirtful-sh4-tripr-original-imaf9ajwb3mfbhmh.jpeg","","1200","Arrow"]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1],this.productObjEntries[i][1][2]);
                         }

                          document.getElementById("filterSearchBtn").addEventListener("click",()=>{ //search button in filter

                            if(this.occupiedSerchPage===true){  //delete recent serched element from search page
                                for(let del=0;del<this.productObjEntries.length;del++){
                                    document.getElementById("searchPage").removeChild(document.getElementById("searchPage").lastElementChild);
                                }
                            }
                            this.occupiedSerchPage=false;

                            for(let filterLoop=0;filterLoop<this.brandArr.length;filterLoop++){
                                if( document.getElementById("filterBrandCheckBox"+filterLoop).checked){ 
                                    console.log(this.brandArr[filterLoop]);
                                    for(let i=0;i<this.productObjEntries.length;i++){
                                        if(this.productObjEntries[i][1][3]==this.brandArr[filterLoop]){
                                            filterCount++;
                                            creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1],this.productObjEntries[i][1][2]);
                                        }
                                    }
                                }
                            }

                        })

                         break;
                     case "jeans":
                     this.productObject={
                           28:["img/cloth/28-d-jen-w-lbl-7-masterly-weft-original-imafjpwpvxgrkszv.jpeg",""],
                           29:["img/cloth/32-fmjno1022-flying-machine-original-imafz3upgxakzfzj.jpeg",""],
                           30:["img/cloth/32-maw19jn131-metronaut-original-imafkmgr8dh7v7u7.jpeg",""],
                           31:["img/cloth/36-jk1-mjrpkc-02-ridge-vogue-original-imaf8zq2mzkcqv9b.jpeg",""],
                           32:["img/cloth/40-blackbelano-aa-ad-av-original-imaeqbhmgqwphbqb.jpeg",""]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                     case "bleazer":
                     this.productObject={
                           33:["img/cloth/40-rl-blue-one-click-original-imaf8yrhtk2bz28s.jpeg",""],
                           34:["img/cloth/50-sb-mustardblue-manq-original-imaeh6t84aecnc2z.jpeg",""],
                           35:["img/cloth/1-2-years-gold-4019-rydho-original-imafbh3ys4rzfzhq.jpeg",""]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                     case "kurti":
                     this.productObject={
                           36:["img/cloth/m-avk993-m-grey-reyon-cottton-bled-stitched-front-slit-kurti-for-original-imafm7jj86hcdtax.jpeg",""],
                           37:["img/cloth/m-sunk990-m-blue-bridon-original-imafj5d4f5j3uxaz.jpeg",""],
                           38:["img/cloth/s-488-fjmp-florriefusion-original-imaeuzdbpyruatr6.jpeg",""],
                           39:["img/cloth/38-p-02-bandidhari-fashion-original-imafpzvj25sj6f2a.jpeg",""]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                }
             break;

         case "sports":
                switch(serchedItem){
                    case "":
                    this.productObject={
                           1:[],
                           2:[],
                           3:[]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;


                }
             break;

         case "electronics":
                switch(serchedItem){
                    case "":
                    this.productObject={
                           1:[],
                           2:[],
                           3:[]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                }
             break;

         case "homeUtensils":
                switch(serchedItem){
                    case "":
                    this.productObject={
                           1:[],
                           2:[],
                           3:[]
                         }
                         this.productObjEntries=Object.entries(this.productObject);
                         for(let i=0;i<this.productObjEntries.length;i++){
                             creatDivSrcPage(this.productObjEntries[i][0],this.productObjEntries[i][1][0],this.productObjEntries[i][1][1]);
                         }
                         break;
                }
             break;

         }
     })
   }
//----------------------------------------------FUNCTION creatDivSrcPage()----------------------------------

   function creatDivSrcPage(ProductKey,productObjEntriesImg,productObjEntriesDec,price){
         let mainScrProdDiv=document.createElement("div");
         mainScrProdDiv.id="cartDiv"+ProductKey;
         mainScrProdDiv.style.height="380px";
         mainScrProdDiv.style.width="100%";
         mainScrProdDiv.style.backgroundColor="blue";
         mainScrProdDiv.style.borderBottom="2px solid black";
         mainScrProdDiv.style.display="grid";
         mainScrProdDiv.style.gridTemplateColumns="30% 1fr";
         mainScrProdDiv.style.gridTemplateRows="80% 20%";
         document.getElementById("searchPage").appendChild(mainScrProdDiv);

         let srcSubDiv1=document.createElement("div");//image display
         let srcSubDiv2=document.createElement("div");//discription
         let srcSubDiv3=document.createElement("div");//price
         let srcSubDiv4=document.createElement("div");//buttons
         srcSubDiv1.style.backgroundColor="white";
         srcSubDiv2.style.backgroundColor="green";
         srcSubDiv3.style.backgroundColor="orange";
         srcSubDiv4.style.backgroundColor="yellow";

         srcSubDiv3.style.textAlign="center";
         
         srcSubDiv4.style.display="flex";
         srcSubDiv4.style.alignItems="center";
         srcSubDiv4.style.justifyContent="space-evenly";

         mainScrProdDiv.appendChild(srcSubDiv1);
         mainScrProdDiv.appendChild(srcSubDiv2);
         mainScrProdDiv.appendChild(srcSubDiv3);
         mainScrProdDiv.appendChild(srcSubDiv4);


         let SrcNewImg=document.createElement('img');

         SrcNewImg.src=productObjEntriesImg;
         SrcNewImg.style.height="300px";
         SrcNewImg.style.width="100px";
         SrcNewImg.style.objectFit="contain";

         srcSubDiv1.appendChild(SrcNewImg);
         srcSubDiv2.innerText=productObjEntriesDec;
        
         let QuantityBtn=document.createElement("button");
         QuantityBtn.id="quantityBtn"+ProductKey;
         let cartBtn=document.createElement("button");
         cartBtn.id="cartBtn"+ProductKey;
         let placeOrderBtn=document.createElement("button");
         placeOrderBtn.id="placeOrderBtn"+ProductKey;
         let wishListBtn=document.createElement("button");
         wishListBtn.id="wishListBtn"+ProductKey;
         QuantityBtn.innerText="QUANTITY";
         cartBtn.innerText="ADD TO CART";
         placeOrderBtn.innerText="PLACE ORDER";
         wishListBtn.innerText="WISH LIST";
         srcSubDiv4.appendChild(QuantityBtn);
         srcSubDiv4.appendChild(cartBtn);
         srcSubDiv4.appendChild(placeOrderBtn);
         srcSubDiv4.appendChild(wishListBtn);

         document.getElementById("cartBtn"+ProductKey).addEventListener("click",()=>{
            includeCart(ProductKey);
         })

         //console.log(price);
         srcSubDiv3.innerText=price;

         this.occupiedSerchPage=true;
         // document.querySelectorAll("#searchedPage p").innerText=itemsFound;
         // console.log(itemsFound);//undefined error checking need to be done
   }
// ------------------home button in search page-------------------------------
document.getElementById("searchPageHome").addEventListener("click",()=>{
      document.getElementById("searchPage").style.display="none";
      document.getElementById('homePage').style.display="block";

})
   



