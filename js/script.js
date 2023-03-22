//---------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------Area de las variables-----------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//
//
const objData_CanvaOptions = {
    divContainers: document.getElementsByClassName("c_CanvaOptions_ContMainPart_Grid_LI_ContentText_TitleSvg"),
    indexDivMaxHeight: 2,
    divContainerMaxHeight: document.getElementsByClassName("c_CanvaOptions_ContMainPart_Grid_LI_ContentText_TitleSvg")[2]
};
//
const objData_FormPlantillas_Grid = {
    gridNroColumnMax: 6,
    order: [
            [ ],
            [[0, 2, 4, 6, 10, 8, 12],
             [1, 3, 5, 7, 11, 9, 13]],
            [[0, 3, 10, 12],
             [1, 4, 6, 11, 8, 13],
             [2, 5, 7, 9]],
            [[0, 4, 8, 13],
             [1, 5, 11, 12],
             [2, 6, 10],
             [3, 7, 9]],
            [ ],
            [[0, 6, 12],
             [1, 7],
             [2, 8],
             [3, 9],
             [4, 10],
             [5, 11, 13]]
    ],
    imgSrc: [
             "https://template.canva.com/EAE_JQ0j_RY/2/0/283w-xCfjUN8KqGY.jpg",//1  - Maria julia estevez
             "https://template.canva.com/EAE6Up9bd34/4/0/283w-saV88B7nSNI.jpg",//2  - Catalina estevez estudiante
             "https://template.canva.com/EAFGypeI7SI/1/0/225w-2Dd4rQDuphs.jpg",//3  - Renovamos stock
             "https://template.canva.com/EAFJx2UnPmc/1/0/225w-BpjQq46BKRg.jpg",//4  - Sabado open
             "https://template.canva.com/EAE4ioG9M7o/1/0/283w-yp4CGJJuPkY.jpg",//5  - Tomas sanchez
             "https://template.canva.com/EAFAV5wm11Q/1/0/283w-V-ArBIX5Ut0.jpg",//6  - Catalina estevez
             "https://template.canva.com/EAFHin1sA_U/2/0/400w-n2hIDwZYptU.jpg",//7  - Andrea morales
             "https://template.canva.com/EAFDH81WwZw/2/0/225w-CnOEHchCIHA.jpg",//8  - Todo llega
             "https://template.canva.com/EAFBwZmF3W4/1/0/400w-1b2QfJdloLE.jpg",//9  - Estilo en cada rincon
             "https://template.canva.com/EAFGt7RhBsM/2/0/225w-sGh5h5xQ4HQ.jpg",//10 - Medios de pago
             "https://template.canva.com/EAFGEz3lcEU/4/0/225w-IDC-0LxzLD4.jpg",//11 - Hola agosto
             "https://template.canva.com/EAFGEp3b-vI/2/0/400w-0u4Kz9hG5ws.jpg",//12 - Gracias por tanto apoyo
             "https://template.canva.com/EAFIxl4M53M/1/0/225w-CvVzzdxWpgw.jpg",//13 - Amor a los detalles
             "https://template.canva.com/EAFFU_6VptQ/2/0/225w-8TQK5cnrnP8.jpg" //14 - Atencion
    ]
};
//
let arrayLanguageFinalDescriptionsListBox = [
                                             "Afaan Oromoo (Itoophiyaa)", 
                                             "Bahasa Indonesia (Indonesia)",
                                             "Basa Jawa (Indonesia)",
                                             "Basa Sunda (Indonesia)",
                                             "Català (Espanya)", 
                                             "Cebuano (Pilipinas)",
                                             "Cymraeg (Cymru)",  
                                             "Dansk (Danmark)",  
                                             "Deutsch (Deutschland)",
                                             "Eesti (Eesti)",
                                             "English (Australia)",
                                             "English (India)",
                                             "English (Philippines)", 
                                             "English (US)", 
                                             "English (United Kingdom)",  
                                             "Español (Argetina)", 
                                             "Español (Colombia)", 
                                             "Español (España)", 
                                             "Español (Estados Unidos)", 
                                             "Español (México)",
                                             "Español asddddddddddddddddddddda",
                                             "No hay opciones disponibles"
];
//
const objDataReziseSensors = {
    resizeObserver: {
        handler: new ResizeObserver(function(entries){controlResizeObserverElements(entries)}),
        observedElements: [
            document.getElementById("id_Header_ContainerOptions_UL"),
            objData_CanvaOptions.divContainerMaxHeight
        ] 
    },
    matchMedia: {
        mQueryLists: [
            window.matchMedia("(max-width:600px)"),
            window.matchMedia("(max-width:900px)"),
            window.matchMedia("(max-width:1200px)"),
            window.matchMedia("(max-width:2500px)")
        ]
    }
};

//---------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------Area de los eventos------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//
//
document.addEventListener("mousedown", function(event){controlOnMouseDown(event)});
//
document.addEventListener("mouseover", function(event){controlOnMouseOver(event)});
//
document.addEventListener("transitionend",function(event){controlTransitionEnd(event)});
//
document.getElementById("id_Header_DropDownOptions_Button").addEventListener("mouseover",onMouseOver_Header_DropDownOptions);
document.getElementById("id_Header_DropDownOptions_Button").addEventListener("mouseleave",onMouseLeave_Header_DropDownOptions);
//
//
document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Button").addEventListener("click",controlDropDownWrapper_FinalDescriptions_SelectListBox);
document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput_Svg").addEventListener("focus",() => {document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput_Input").focus()});
document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput_Input").addEventListener("keyup",function(event){inputSearch_FinalDescriptions_SelectListBox(event.target)});
//
Array.from(document.getElementsByClassName("c_FinalDescriptions_GridDescription_Form_TextAndSvg")).forEach(element => {
    element.addEventListener("click", function() {controlDropDownWrapper_FinalDescriptions_GridDescription_Form_Wrapper(element.nextElementSibling)});
});
//
objDataReziseSensors.matchMedia.mQueryLists.forEach(MediaQueryL => {
    MediaQueryL.addEventListener("change",controlWindowMatchMedia);
});

//---------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------Area de inicializacion----------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//
//
objDataReziseSensors.resizeObserver.observedElements.forEach(element => {
    objDataReziseSensors.resizeObserver.handler.observe(element);
});
//
initializeSelectListBox();
//
initialize_Header_ContainerOptions();
//
initializeGrid_FormPlantillas_Grid();
//
initialize_SlideForms_Container();

function showModal(){
    console.log("Show modal.", document.getElementsByClassName("cModal"));
    //
    const body = document.body;
    const divModal = document.getElementsByClassName("cModal")[0];
    //
    body.style.overflow = "hidden";
    divModal.style.display = "flex";
    body.querySelectorAll("video").forEach(video => {
        video.style.opacity = "0.9";
    });
}

function changeForm(form1Class, form2Class){
    //
    console.log("asd; ", `.${form1Class}`,`.${form2Class}`);
    const form1 = document.querySelector(`.${form1Class}`);
    const form2 = document.querySelector(`.${form2Class}`);
    console.log("asd2; ", form1,form2);
    form2.getAttribute
    //
    form1.style.display = "none";
    form2.style.display = "flex";
}

function openWindow_ModalRegisterForm_DivForm_Content_DivButtons(elementButton){
    //
    console.log("qwe: ",elementButton,elementButton.getAttribute("data-url"));
    //
    const openedWindow = window.open(elementButton.getAttribute("data-url"),"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=600");
    //
    for (let i = 0; i < elementButton.children.length - 1; i++) {
        elementButton.children[i].style.display = "none";
    }
    elementButton.lastElementChild.style.display = "block";
    elementButton.classList.add("stateFlag__Clicked__c_ModalRegisterForm_DivForm_Content_DivButtons");
    //
    console.log("dewfefef", elementButton.parentElement.children);
    for (const button of elementButton.parentElement.children) {
        button.disabled = true;
    }
    //
    const timer = setInterval(() => {
        if (openedWindow.closed) {
            clearInterval(timer);
            //
            for (let i = 0; i < elementButton.children.length - 1; i++) {
                elementButton.children[i].style.display = "block";
            }
            elementButton.lastElementChild.style.display = "none";
            elementButton.classList.remove("stateFlag__Clicked__c_ModalRegisterForm_DivForm_Content_DivButtons");
            //
            for (const button of elementButton.parentElement.children) {
                button.disabled = false;
            }
        }
    }, 500);
}

function dasd(){
    //
    console.log("qfafas2: ",openedWindow, openedWindow.closed);
}

//---------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------Area de las funciones-----------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------Parte funciones de control de la ventana------------------------------------//
function controlOnMouseDown(event){
    //
    controlFocus_FinalDescriptions_SelectListBox("checkFocus", event.target);
}

function controlOnMouseOver(event){
    //
    controlOnMouseOver_Header_ContainerOptions_UL_HideContainerDropDown(event);
}

function controlTransitionEnd(event){
    //
    switch (event.target) {
        case document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper"):
            restorePostTransition_Wrapper_FinalDescriptions_SelectListBox();
            break;
    
        default:
            break;
    }
}

function controlWindowMatchMedia(){
    //
    if(objDataReziseSensors.matchMedia.mQueryLists[0].matches){
        console.log("600px");
        controlChangeColumnsGrid_FormPlantillas_Grid();
        adaptHeight_CanvaOptions(false);
    }
    else if(objDataReziseSensors.matchMedia.mQueryLists[1].matches){
        console.log("900px");
        controlChangeColumnsGrid_FormPlantillas_Grid();
        controlResize_FinalDescriptions_GridDescription_Form_Wrapper("dropDown");
    }
    else if(objDataReziseSensors.matchMedia.mQueryLists[2].matches){
        console.log("1200px");
        controlChangeColumnsGrid_FormPlantillas_Grid();
        controlResize_FinalDescriptions_GridDescription_Form_Wrapper("normal");
    }
    else if(objDataReziseSensors.matchMedia.mQueryLists[3].matches){
        console.log("2500px");
        controlChangeColumnsGrid_FormPlantillas_Grid();
    }
}

function controlResizeObserverElements(entries){
    for (let entry of entries){
        switch(entry.target){
            case objDataReziseSensors.resizeObserver.observedElements[0]:
                //
                if(window.innerWidth >= 900){
                    controlResizeWidth_Header_ContainerOptions_UL(entry.contentRect.width);
                }
                break;
            case objDataReziseSensors.resizeObserver.observedElements[1]:
                //
                if(window.innerWidth >= 600){
                    adaptHeight_CanvaOptions(true);
                }
                break;
            default:
                break;
        }    
    }
}

//----------------------Parte funciones particulares de Header DropDown Options------------------------//
function onMouseOver_Header_DropDownOptions(){
    let hideMessage = document.getElementById("id_Header_DropDownOptions_HoverMessage");
    if(getComputedStyle(hideMessage).visibility !== "visible"){
        //
        let parentDiv = hideMessage.parentElement;
        let triangle = hideMessage.children[0];

        const hideMessageRect = hideMessage.getBoundingClientRect();
        const parentDivRect = parentDiv.getBoundingClientRect();
        const triangleRect = triangle.getBoundingClientRect();

        triangle.style.top = `-${(triangleRect.height)}px`;
        triangle.style.left = `${(parentDivRect.x)}px`;
        hideMessage.style.bottom = `-${(triangleRect.height + hideMessageRect.height)}px`;
        hideMessage.style.left = `${(17 - parentDivRect.x)}px`;
        hideMessage.style.visibility = "visible";
    }
}

function onMouseLeave_Header_DropDownOptions(){
    let hideMessage = document.getElementById("id_Header_DropDownOptions_HoverMessage");
    hideMessage.style.visibility = "hidden";
}

//----------------------Parte funciones particulares de Header Container Options------------------------//
function changeVisibility_Header_ContainerOptions_UL_HideContainerDropDown(hideContainerOptions, visibilityBoolValue){
    //
    if(visibilityBoolValue){
        if(getComputedStyle(hideContainerOptions).visibility === "hidden"){
            //
            const padding_MainContainer_Header = parseFloat(getComputedStyle(document.getElementById("idMainContainer_Header")).paddingInline);
            const xPos_ContainerOptions_UL = document.getElementById("id_Header_ContainerOptions_UL").getBoundingClientRect().x;
            let maxWidth = document.documentElement.clientWidth - xPos_ContainerOptions_UL - padding_MainContainer_Header;
            //
            //console.log("wodth :", maxWidth);
            hideContainerOptions.style.maxWidth = `${maxWidth}px`;
            hideContainerOptions.style.visibility = "visible";
            hideContainerOptions.style.display = "flex";
        }
    }
    else{
        if(getComputedStyle(hideContainerOptions).visibility === "visible"){
            hideContainerOptions.style.visibility = "hidden";
            hideContainerOptions.style.display = "none";
        }
    }
}

function controlOnMouseOver_Header_ContainerOptions_UL_HideContainerDropDown(event){
    //
    const divContainerDropDownButtons = document.querySelectorAll(".c_Header_ContainerOptions_UL_ContainerDropDownButtons");
    const hideDropDownContainer = document.querySelectorAll(".c_Header_ContainerOptions_UL_HideContainerDropDown");
    for (let i = 0; i < divContainerDropDownButtons.length; i++) {
        //
        if(hasElementThatAncestor(event.target, divContainerDropDownButtons[i])){
            changeVisibility_Header_ContainerOptions_UL_HideContainerDropDown(hideDropDownContainer[i], true);
        }
        else if(!hasElementThatAncestor(event.target, hideDropDownContainer[i])){
            changeVisibility_Header_ContainerOptions_UL_HideContainerDropDown(hideDropDownContainer[i], false);
        }
    }
}

function controlResizeWidth_Header_ContainerOptions_UL(containerWidth){
    //
    let uList = document.getElementById("id_Header_ContainerOptions_UL");
    let uListItems = uList.children;
    let button3Points = document.getElementById("id_Header_ContainerOptions_UL_Button3Points");
    let widthStack = 646;
    let indexItemsVisible = uList.childElementCount-1;
    //
    if(widthStack <= containerWidth){
        button3Points.style.visibility = "hidden";
        uListItems[indexItemsVisible].style.visibility = "visible";
    }
    else{
        button3Points.style.visibility = "visible";
        uListItems[indexItemsVisible].style.visibility = "hidden";
        widthStack -= (parseFloat(getComputedStyle(uListItems[indexItemsVisible]).width) - parseFloat(getComputedStyle(button3Points).width));
        //
        for (let nroWidthStackChecks = 1; nroWidthStackChecks <= uList.childElementCount; nroWidthStackChecks++){
            if(widthStack > containerWidth){
                indexItemsVisible--;
                uListItems[indexItemsVisible].style.visibility = "hidden";    
                widthStack -= (parseFloat(getComputedStyle(uListItems[indexItemsVisible]).width) - parseFloat(getComputedStyle(uList).columnGap));
            }
            else{
                uListItems[indexItemsVisible].appendChild(button3Points);
                indexItemsVisible--;
                break;
            }
        }
    }
    for (; indexItemsVisible >= 0; indexItemsVisible--) {
        uListItems[indexItemsVisible].style.visibility = "visible";
    }
}

function DEPRECATEDcreateFormType_Header_ContainerOptions(formType, containerElement, alignSelf, payload){
    if(formType === 3){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        const containerMain = document.createElement("div");
        const containerChild = document.createElement("a");
        const containerChild_ContentText = document.createElement("div");
        const containerChild_ContentText_Title = document.createElement("div");
        const containerChild_Img = document.createElement("div");
        //Se crean los elementos 
        const textTitleElement = document.createElement("p");
        const svgTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPathTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //Se crean los elementos 
        const textContentTextElement = document.createElement("p");
        //Se crean los elementos 
        const imgElement = document.createElement("img");
        //
        containerMain.classList.add("cDispFlexRowCenterAlignFlexStart");
        containerMain.style.margin = "15px";
        containerMain.style.columnGap = "15px";
        containerMain.style.alignSelf = alignSelf;
        //
        containerChild.classList.add("cDispFlexColumnCenterAlignFlexStart");
        containerChild.setAttribute("href","#");
        containerChild.style.textDecoration = "none";
        containerChild.style.width = "260px";
        containerChild.style.cursor = "pointer";
        containerChild_ContentText.classList.add("cDispFlexColumnCenterAlignFlexStart");
        containerChild_ContentText_Title.classList.add("cDispFlexRowFlexStartAlignCenter");
        containerChild_ContentText_Title.style.marginBottom = "6px";
        containerChild_Img.classList.add("cDispFlexRowCenterAlignCenter");
        containerChild_Img.style.marginBottom = "15px";
        containerChild_Img.style.borderRadius = "8px";
        containerChild_Img.style.overflow = "hidden";
        //
        textTitleElement.classList.add("cConfigFont5Prop1");
        textTitleElement.classList.add("cTextColorBlack1");
        textTitleElement.style.fontWeight = "bold";  
        svgTitleElement.style.marginTop = "-1px";
        svgTitleElement.style.verticalAlign = "middle";
        svgTitleElement.setAttribute("width","16");
        svgTitleElement.setAttribute("height","16");
        svgTitleElement.setAttribute("viewBox","0 0 16 16");
        svgPathTitleElement.setAttribute("fill","currentColor");
        svgPathTitleElement.setAttribute("d","m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z");
        //
        textContentTextElement.classList.add("cConfigFont6Prop1");
        textContentTextElement.classList.add("cTextColorGray1");  
        //
        imgElement.style.width = "256px";
        imgElement.style.height = "192px";
        imgElement.style.transition = "transform .2s ease";
        //
        const nroDivForms = payload.length;
        for (let i = 0; i < nroDivForms; i++) {
            const cloneSvgPathTitleElement = svgPathTitleElement.cloneNode(false);
            const cloneSvgTitleElement = svgTitleElement.cloneNode(false);
            const cloneTextTitleElement = textTitleElement.cloneNode(false);
            cloneTextTitleElement.innerHTML = payload[i][0];
            const cloneTextContentTextElement = textContentTextElement.cloneNode(false);
            cloneTextContentTextElement.innerHTML = payload[i][1];
            const cloneImgElement = imgElement.cloneNode(false);
            cloneImgElement.setAttribute("src", payload[i][2]);
            const cloneContainerChild_Img = containerChild_Img.cloneNode(false);
            const cloneContainerChild_ContentText_Title = containerChild_ContentText_Title.cloneNode(false);
            const cloneContainerChild_ContentText = containerChild_ContentText.cloneNode(false);
            const cloneContainerChild = containerChild.cloneNode(false);
            cloneContainerChild.addEventListener("mouseover",function(e){
                cloneImgElement.style.transform = "scale(1.06)";
                cloneTextTitleElement.style.textDecorationLine = "underline";
            });
            cloneContainerChild.addEventListener("mouseleave",function(e){
                cloneImgElement.style.transform = "scale(1)";
                cloneTextTitleElement.style.textDecorationLine = "none";
            });
            //
            cloneSvgTitleElement.appendChild(cloneSvgPathTitleElement);
            cloneTextTitleElement.appendChild(cloneSvgTitleElement);
            //
            cloneContainerChild_ContentText_Title.appendChild(cloneTextTitleElement);
            //
            cloneContainerChild_ContentText.appendChild(cloneContainerChild_ContentText_Title);
            cloneContainerChild_ContentText.appendChild(cloneTextContentTextElement);
            //
            cloneContainerChild_Img.appendChild(cloneImgElement);
            //
            cloneContainerChild.appendChild(cloneContainerChild_Img);
            cloneContainerChild.appendChild(cloneContainerChild_ContentText);
            //
            containerMain.appendChild(cloneContainerChild);
            //
            containerElement.appendChild(containerMain);
            
        }
    }
    else if(formType === 2){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        const containerMain = document.createElement("div");
        const containerChild = document.createElement("a");
        const containerChild_ContentText = document.createElement("div");
        const containerChild_ContentText_Title = document.createElement("div");
        const containerChild_Img = document.createElement("div");
        //Se crean los elementos 
        const textTitleElement = document.createElement("p");
        const svgTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPathTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //Se crean los elementos 
        const textContentTextElement = document.createElement("p");
        //Se crean los elementos 
        const imgElement = document.createElement("img");
        //Se agregan las clases y propiedades para el elemento
        //
        containerMain.style.display = "grid";
        containerMain.style.margin = "15px";
        containerMain.style.alignSelf = alignSelf;
        //
        containerChild.classList.add("cDispFlexRowFlexStartAlignCenter");
        containerChild.setAttribute("href","#");
        containerChild.style.textDecoration = "none";
        containerChild.style.width = "340px";
        containerChild.style.height = "max-content";
        containerChild.style.padding = "10px";
        containerChild.style.borderRadius = "6px";
        containerChild_ContentText.classList.add("cDispFlexColumnCenterAlignFlexStart");
        containerChild_ContentText_Title.classList.add("cDispFlexRowFlexStartAlignCenter");
        containerChild_ContentText_Title.style.marginBottom = "6px";
        containerChild_Img.classList.add("cDispFlexRowCenterAlignCenter");
        //
        textTitleElement.classList.add("cConfigFont5Prop1");
        textTitleElement.classList.add("cTextColorBlack1");
        textTitleElement.style.fontWeight = "bold";  
        svgTitleElement.style.marginTop = "-1px";
        svgTitleElement.style.verticalAlign = "middle";
        svgTitleElement.setAttribute("width","16");
        svgTitleElement.setAttribute("height","16");
        svgTitleElement.setAttribute("viewBox","0 0 16 16");
        svgPathTitleElement.setAttribute("fill","currentColor");
        svgPathTitleElement.setAttribute("d","m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z");
        //
        textContentTextElement.classList.add("cConfigFont6Prop1");
        textContentTextElement.classList.add("cTextColorGray1");
        //
        imgElement.style.width = "64px";
        imgElement.style.height = "64px";
        imgElement.style.borderRadius = "8px";
        imgElement.style.marginRight = "20px";
    
        //Se crean las constantes y variables necesarias para el algoritmo de creacion
        const nroDivForms = payload.length;
        const maxNroRows = 3;
        const nroColumns = Math.ceil(nroDivForms / maxNroRows);
        containerMain.style.gridTemplateColumns = `repeat(${nroColumns},1f)`;
        //
        for (let i = 0, indexRow = 1, indexColumn = 1; i < nroDivForms; i++) {
            //
            const cloneSvgPathTitleElement = svgPathTitleElement.cloneNode(false);
            const cloneSvgTitleElement = svgTitleElement.cloneNode(false);
            const cloneTextTitleElement = textTitleElement.cloneNode(false);
            cloneTextTitleElement.innerHTML = payload[i][0];
            const cloneTextContentTextElement = textContentTextElement.cloneNode(false);
            cloneTextContentTextElement.innerHTML = payload[i][1];
            const cloneImgElement = imgElement.cloneNode(false);
            cloneImgElement.setAttribute("src", payload[i][2]);
            const cloneContainerChild_ContentText_Title = containerChild_ContentText_Title.cloneNode(false);
            const cloneContainerChild_ContentText = containerChild_ContentText.cloneNode(false);
            const cloneContainerChild_Img = containerChild_Img.cloneNode(false);
            const cloneContainerChild = containerChild.cloneNode(false);
            cloneContainerChild.addEventListener("mouseover",function(e){
                if(getComputedStyle(cloneContainerChild).backgroundColor !== "rgba(64, 87, 109, 0.07)"){
                    if(hasElementThatAncestor(e.target,cloneContainerChild)){
                        cloneContainerChild.style.backgroundColor = "rgba(64,87,109,.07)";
                        cloneTextTitleElement.style.textDecorationLine = "underline";
                    }
                }
            });
            cloneContainerChild.addEventListener("mouseleave",function(e){
                cloneContainerChild.style.backgroundColor = "inherit"; 
                cloneTextTitleElement.style.textDecorationLine = "none";
            });
            //
            cloneSvgTitleElement.appendChild(cloneSvgPathTitleElement);
            cloneTextTitleElement.appendChild(cloneSvgTitleElement);
            cloneContainerChild_ContentText_Title.appendChild(cloneTextTitleElement);
            //
            cloneContainerChild_ContentText.appendChild(cloneContainerChild_ContentText_Title);
            cloneContainerChild_ContentText.appendChild(cloneTextContentTextElement);
            //
            cloneContainerChild_Img.appendChild(cloneImgElement);
            //
            cloneContainerChild.appendChild(cloneContainerChild_Img);
            cloneContainerChild.appendChild(cloneContainerChild_ContentText);
            cloneContainerChild.style.gridRow = `${indexRow}`;
            cloneContainerChild.style.gridColumn = `${indexColumn}`;
            //
            containerMain.appendChild(cloneContainerChild);
            if(((i+1) % maxNroRows) === 0){
                indexColumn++;
                indexRow = 1;
            }
            else{
                indexRow++;
            }
        }
        containerElement.appendChild(containerMain);
    }
    else if(formType === 10){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        const containerMain = document.createElement("div");
        const containerMain_Title = document.createElement("a");
        //Se crean los elementos 
        const textTitleElement = document.createElement("p");
        const svgTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPathTitleElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //
        containerMain.classList.add("cDispFlexRowCenterAlignFlexStart");
        containerMain.style.margin = "15px";
        containerMain.style.alignSelf = alignSelf;
        //
        containerMain_Title.classList.add("cDispFlexRowFlexStartAlignCenter");
        containerMain_Title.style.cursor = "pointer";
        containerMain_Title.setAttribute("href", "#");
        containerMain_Title.addEventListener("mouseover",function(e){
            textTitleElement.style.textDecorationLine = "underline";
        });
        containerMain_Title.addEventListener("mouseleave",function(e){
            textTitleElement.style.textDecorationLine = "none";
        });
        //
        textTitleElement.classList.add("cConfigFont6Prop1");
        textTitleElement.classList.add("cTextColorBlack1");
        textTitleElement.style.fontWeight = "bold";  
        textTitleElement.innerHTML = payload[0];
        svgTitleElement.style.marginTop = "-1px";
        svgTitleElement.style.verticalAlign = "middle";
        svgTitleElement.setAttribute("width","16");
        svgTitleElement.setAttribute("height","16");
        svgTitleElement.setAttribute("viewBox","0 0 16 16");
        svgPathTitleElement.setAttribute("fill","currentColor");
        svgPathTitleElement.setAttribute("d","m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z");
        //
        svgTitleElement.appendChild(svgPathTitleElement);
        textTitleElement.appendChild(svgTitleElement);
        //
        containerMain_Title.appendChild(textTitleElement);
        //
        containerMain.appendChild(containerMain_Title);
        //
        containerElement.appendChild(containerMain);
    }
    else if(formType === 100){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        let containerMain = document.createElement("div");
        //
        setTimeout(()=>{
            containerMain.style.height = `${containerElement.getBoundingClientRect().height}px`;
        },100);
        containerMain.style.borderLeft = "1px solid rgba(43,59,74,.3)";
        //
        containerElement.appendChild(containerMain);
    }
    else if(formType === 101){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        let containerMain = document.createElement("div");
        //
        setTimeout(()=>{
            containerMain.style.width = `${containerElement.getBoundingClientRect().width}px`;
        },10);
        containerMain.style.borderTop = "1px solid rgba(43,59,74,.3)";
        //
        containerElement.appendChild(containerMain);
    }
    else if(formType === 1){
        //-------------Se crean los elementos div principales para la estructura-----------------------------------//
        //Se crean los elementos Div
        var containerMain = document.createElement("div");
        let containerChild_Title = document.createElement("div");
        let containerChild_FormText = document.createElement("div");
        //Se agregan las clases y propiedades para el elemento
        containerMain.classList.add("cDispFlexColumnCenterAlignFlexStart");
        containerMain.style.margin = "15px 15px";
        //Se agregan las clases y propiedades para el elemento
        containerChild_Title.classList.add("cDispFlexRowFlexStartAlignFlexStart");
        containerChild_Title.style.marginBottom = "10px";
        containerChild_Title.style.marginLeft = "5px";
        //Se agregan las clases y propiedades para el elemento
        containerChild_FormText.classList.add("cDispFlexRowFlexStartAlignFlexStart");
        containerChild_FormText.style.columnGap = "60px";
        //-------------Se crean la parte interior del contenedor titulo de la estructura especificada--------------//
        //Se crea el elemento parrafo para el titulo
        let textTitleElement = document.createElement("p");
        //Se agregan las clases y propiedades para el elemento
        textTitleElement.innerHTML = payload[0];
        textTitleElement.classList.add("cConfigFont5Prop1");
        textTitleElement.classList.add("cTextColorBlack1");
        textTitleElement.style.fontWeight = "bold";
        //Se agrega el elemento a su padre
        containerChild_Title.appendChild(textTitleElement);
        //-------------Se crean la parte interior del contenedor formText de la estructura especificada------------//
        //Se crean las constantes y variables necesarias para el algoritmo de creacion
        let arrayAnchorText = payload[1];
        let anchorTextElements = [];
        let containerChild_FormText_Columns = [];
        const maxNroRows = 9;
        const nroColumns = Math.ceil(arrayAnchorText.length / maxNroRows);
        //Se realiza el primer bucle FOR para crear las columnas en base al array de texto
        for (let i = 0, indexItemRef = 0, nroActualRows = 0, countItemsRemaining = arrayAnchorText.length; i < nroColumns; i++) {
            //Se verifica la cantidad restante de Items, para rellenar como filas en la columna prosiguiente a crear
            if(countItemsRemaining >= maxNroRows){
                nroActualRows = maxNroRows;//La columna prosiguiente tendra el valor de filas maximo especificado para una columna
                countItemsRemaining -= maxNroRows;//Se descuenta la cantidad restante de Items que se agregaran
            }
            else{
                nroActualRows = countItemsRemaining;//La columna prosiguiente tendra el valor de filas que hayan quedado restantes
            }
            //Se crea la columna contenedora que almacenara a las filas de los Items (Elementos Anchor), ademas se agregan sus clases
            containerChild_FormText_Columns[i] = document.createElement("div");
            containerChild_FormText_Columns[i].classList.add("cDispFlexColumnCenterAlignFlexStart");
            //Se realiza el segundo bucle FOR para crear y rellenar los Items dentro de la columna
            for (let indexItemColumn = indexItemRef; indexItemColumn < (indexItemRef + nroActualRows); indexItemColumn++) {
                //Se crea el elemento anchor que sera almacenado en columna como Item
                anchorTextElements[indexItemColumn] = document.createElement("a");
                //Se agregan las clases, atributos y propiedades para el elemento
                anchorTextElements[indexItemColumn].innerHTML = arrayAnchorText[indexItemColumn];
                anchorTextElements[indexItemColumn].classList.add("cConfigFont6Prop1");
                anchorTextElements[indexItemColumn].classList.add("cTextColorGray1");
                anchorTextElements[indexItemColumn].setAttribute("href", "#");
                anchorTextElements[indexItemColumn].style.whiteSpace = "nowrap";
                anchorTextElements[indexItemColumn].style.textDecoration = "none";
                anchorTextElements[indexItemColumn].style.paddingBlock = "5px";
                anchorTextElements[indexItemColumn].style.paddingLeft = "8px";
                //Se agregan eventos de mouse Over y Leave sobre el elemento
                anchorTextElements[indexItemColumn].addEventListener("mouseover",function(e){e.target.style.backgroundColor = "rgba(64,87,109,.07)";});
                anchorTextElements[indexItemColumn].addEventListener("mouseleave",function(e){e.target.style.backgroundColor = "inherit";});
                //Por ultimo se agrega el elemento en su columna
                containerChild_FormText_Columns[i].appendChild(anchorTextElements[indexItemColumn]);
            }
            //Se incrementa el indice de referencia de Items en base a los agregados recientemente como filas en la columna
            indexItemRef += nroActualRows;
            //Se genera un TimeOut con el fin de esperar la correcta carga de los Items, para poder luego realizar un relleno en su padding 
            setTimeout(()=>{
                //Se obtiene el obj Rect de la columna contenedora
                const rectParent = containerChild_FormText_Columns[i].getBoundingClientRect();
                //Se realiza un bucle FOR para adaptar
                for (let indexItemColumn = 0; indexItemColumn < containerChild_FormText_Columns[i].childElementCount; indexItemColumn++) {
                    //Se obtiene el obj Rect del elemento
                    const rectChild = containerChild_FormText_Columns[i].children[indexItemColumn].getBoundingClientRect();
                    //Mediante los datos Rect Width de la columna y su hijo (Item), se realiza un relleno en su padding derecho 
                    containerChild_FormText_Columns[i].children[indexItemColumn].style.paddingRight = `${rectParent.width - rectChild.width + 8}px`;
                }
            },100);
            //Por ultimo se agrega la columna al contenedor FormText
            containerChild_FormText.appendChild(containerChild_FormText_Columns[i]);
        }
        //-------------Se agregan las partes titulo y formText al contenedor Main y este a su vez al padre---------//
        containerMain.appendChild(containerChild_Title);
        containerMain.appendChild(containerChild_FormText);
        containerElement.appendChild(containerMain);
    }
}

function DEPRECATEDinitialize_Header_ContainerOptions(){
    //
    let formStructMainInfo = [];
    let formStructChildInfo = [];
    let formContainerInfo = [];
    //----------------------------------------------------------------------------------------------------------//
    //-------------------->Informacion de la estructura form del hide DropDown Container 1----------------------//
    //----------------------------------------------------------------------------------------------------------//
    //-----------------Se setea la informacion los form containers----------------------------------------------//
    formContainerInfo[0] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: [["¡A diseñar!"],
                    ["Creador de logos", 
                    "Creador de flyers", 
                    "Creador de banners", 
                    "Creador de carteles", 
                    "Creador de currículumns", 
                    "Creador de invitaciones", 
                    "Creador de tarjetas de presentación", 
                    "Creador de intros de video", 
                    "Creador de memes", 
                    "Creador de collages", 
                    "Creador de graficos", 
                    "Ver todo"]]
    };
    formContainerInfo[1] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: [["Más información sobre los mejores productos"],
                  ["Presentaciones", 
                      "Pizarras online", 
                      "Editor de PDF", 
                      "Gráficos",
                      "Sitios web",
                      "Membretes",
                      "Agendas",
                      "Currículumns vitae",
                      "Tarjetas de presentación",
                      "Publicaciones",
                      "Historias",
                      "Instagram",
                      "Facebook",
                      "Twitter",
                      "YouTube",
                      "Anuncios en video",
                      "Editor de videos",
                      "Álbumes de fotos",
                      "Editor de fotos",
                      "Folletos",
                      "Flyers",
                      "Logos",
                      "Menús",
                      "Carteles",
                      "Stickers",
                      "Carteles para jardín",
                      "Tarjetas",
                      "Calendarios",
                      "Invitaciones",
                      "Etiquetas",
                      "Tazas",
                      "Postales",
                      "Playeras"]]
    };
    formContainerInfo[2] = {
        id: "formContainer",
        typeForm: 100,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[3] = {
        id: "formContainer",
        typeForm: 3,
        alignSelf: "auto",
        payload: [["Explorá las plantillas de Canva",
                  "Explorá cientos de plantillas gratis listas para usar y elegí la que más te guste.",
                  "img/imgHideCont/imgExploraPlantillasCanva.png"]]
    };
    //-----------------Se setea la informacion del form struct main---------------------------------------------//
    formStructMainInfo[0] = {
        id: "formStruct",
        divChildren: formContainerInfo,
        typeFlex: "row"
    };
    //----------------------------------------------------------------------------------------------------------//
    //-------------------->Informacion de la estructura form del hide DropDown Container 2----------------------//
    //----------------------------------------------------------------------------------------------------------//
    //-----------------Se setea la informacion los form containers----------------------------------------------//
    formContainerInfo = [];
    formContainerInfo[0] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: ["Casos de uso",
                  ["Creá contenido más rápido", 
                  "Cautivá a tu público", 
                  "Asegurá el éxito de tu marca",
                  "Optimizá el trabajo en equipo",
                  "Planidicá y programá tus posts",
                  "Gestioná los recursos de tu marca",
                  "Lluvias de ideas y talleres",
                  "Ganá en produtividad"]]
    };
    formContainerInfo[1] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: ["Funciones",
                  ["Invitá personas a tu equipo", 
                  "Plantillas del equipo",
                  "Gestión de la marca",
                  "Gestión de contenido",
                  "Productividad",
                  "Controles de la marca",
                  "Seguridad y SSO",
                  "Integraciones"]]
    };
    formContainerInfo[2] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: ["Industrias",
                  ["Medios y publicaciones",
                  "Noticias",
                  "Bienes raíces",
                  "Salud y bienestar",
                  "Tecnología",
                  "Deportes",
                  "Venta minorista",
                  "Emprendimientos"]]
    };
    formContainerInfo[3] = {
        id: "formContainer",
        typeForm: 1,
        alignSelf: "auto",
        payload: ["Departamentos",
                  ["Marketing",
                  "Comunicación interna",
                  "Agencias creativas",
                  "Ventas"]]
    };
    formContainerInfo[4] = {
        id: "formContainer",
        typeForm: 100,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[5] = {
        id: "formContainer",
        typeForm: 2,
        alignSelf: "auto",
        payload: [["Worksuite Visual",
                   "Revientá tu forma de trabajar.",
                   "img/imgHideCont/imgWorkVisual.png"],
                  ["Casos de estudio",
                   "Descubrí la forma en que usaqn Canva algunas de las principales empresas del mundo.",
                   "img/imgHideCont/imgCasosEstudio.png"],
                  ["Canva para Equipos",
                   "Para equipos de cualquier tamaño que quieren crear en conjunto.",
                   "img/imgHideCont/imgCanvaParaEquipo.png"]]
    };
    //-----------------Se setea la informacion del form struct main---------------------------------------------//
    formStructMainInfo[1] = {
        id: "formStruct",
        divChildren: formContainerInfo,
        typeFlex: "row"
    };
    //----------------------------------------------------------------------------------------------------------//
    //-------------------->Informacion de la estructura form del hide DropDown Container 3----------------------//
    //----------------------------------------------------------------------------------------------------------//
    //-----------------Se setea la informacion los form containers----------------------------------------------//
    formContainerInfo = [];
    formContainerInfo[0] = {
        id: "formContainer",
        typeForm: 2,
        alignSelf: "auto",
        payload: [["Docentes y escuelas",
                   "Creá y colaborá visualmente en el salón de clases.",
                   "img/imgHideCont/imgEdu.png"],
                  ["Estudiantes",
                   "Diseños y documentos para estimular el aprendizaje.",
                   "img/imgHideCont/imgEstudiante.png"],
                  ["Recursos gratis para docentes",
                   "Tutoriales, crusos, webinarrs y mucho más, solo para docentes.",
                   "img/imgHideCont/imgSrcDocente.png"],
                  ["Integraciones con LMS",
                   "Integrá Canva con tu sistema de gestión del apredizaje.",
                   "img/imgHideCont/imgIntegracionesLMS.png"],
                  ["Casos de estudio",
                   "Descubrí la forma en que otras personas aprovechan las herramientas de aprendizaje creativo y colaborativo.",
                   "img/imgHideCont/imgCasosEstudio.png"]]
    };
    formContainerInfo[1] = {
        id: "formContainer",
        typeForm: 100,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[2] = {
        id: "formContainer",
        typeForm: 3,
        alignSelf: "auto",
        payload: [["Convertite en Creador de Educación",
                   "Creá y publicá tus propios recursos en Canva. Ganá compartiendo.",
                   "img/imgHideCont/imgCreadorEducacion.png"]]
    };
    //-----------------Se setea la informacion del form struct main---------------------------------------------//
    formStructMainInfo[2] = {
        id: "formStruct",
        divChildren: formContainerInfo,
        typeFlex: "row"
    };
    //----------------------------------------------------------------------------------------------------------//
    //-------------------->Informacion de la estructura form del hide DropDown Container 4----------------------//
    //----------------------------------------------------------------------------------------------------------//
    //-----------------Se setea la informacion los form containers----------------------------------------------//
    formContainerInfo = [];
    formContainerInfo[0] = {
        id: "formContainer",
        typeForm: 3,
        alignSelf: "auto",
        payload: [["Gratis",
                   "Para cualquiera que quiera diseñar, ya sea por cuenta propia o en equipo. Es gratis or siempre.",
                   "img/imgHideCont/imgCanvaGratis.png"],
                  ["Pro",
                   "Para quienes quieren obtner acceso ilimitado a contenido prémium y herramientas de diseño inteligentes.",
                   "img/imgHideCont/imgCanvaPro.png"],
                  ["Equipos",
                   "Para equipos pequeños y grandes que quieren crear en conjunto, con herramientas prémium diseñadas para respetar la identidad de sus marcas.",
                   "img/imgHideCont/imgCanvaEquipo.png"]]
    };
    formContainerInfo[1] = {
        id: "formContainer",
        typeForm: 101,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[2] = {
        id: "formContainer",
        typeForm: 10,
        alignSelf: "flex-start",
        payload: ["Compare pricing"]
    };
    formContainerInfo[3] = {
        id: "formContainer",
        typeForm: 100,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[4] = {
        id: "formContainer",
        typeForm: 2,
        alignSelf: "flex-start",
        payload: [["Educación",
                   "Una potente herramienta gratis para estudiantes, docentes y cualquier salón de clases.",
                   "img/imgHideCont/imgEducacion.png"],
                  ["ONG",
                   "Canva Pro es gratis para cualquier organización sin fines de lucro registrada. Unite ahora.",
                   "img/imgHideCont/imgONG.png"]]
    };
     //-----------------Se setea la informacion de los form struct children-------------------------------------//
    formStructChildInfo[0] = {
        id: "formStruct",
        divChildren: [formContainerInfo[0]],
        typeFlex: "row"
    };
    formStructChildInfo[1] = {
        id: "formStruct",
        divChildren: [formStructChildInfo[0], formContainerInfo[1], formContainerInfo[2]],
        typeFlex: "column"
    };
    //-----------------Se setea la informacion del form struct main---------------------------------------------//
    formStructMainInfo[3] = {
        id: "formStruct",
        divChildren: [formStructChildInfo[1], formContainerInfo[3], formContainerInfo[4]],
        typeFlex: "row"
    };
    //----------------------------------------------------------------------------------------------------------//
    //-------------------->Informacion de la estructura form del hide DropDown Container 5----------------------//
    //----------------------------------------------------------------------------------------------------------//
    //-----------------Se setea la informacion los form containers----------------------------------------------//
    formContainerInfo = [];
    formContainerInfo[0] = {
        id: "formContainer",
        typeForm: 2,
        alignSelf: "flex-start",
        payload: [["Blog",
                   "Explorá articulos y recursos.",
                   "img/imgHideCont/imgBlog.png"],
                  ["Design School",
                   "Disfrutá de nuestros tutoriales y cursos.",
                   "img/imgHideCont/imgDesignSchool.png"],
                  ["Eventos",
                   "Inspirate en las tendencias y aprendé de especialistas en diseño.",
                   "img/imgHideCont/imgEventos.png"],
                  ["Centro de ayuda",
                   "Obtené ayuda y soporte técnico.",
                   "img/imgHideCont/imgCentroAyuda.png"]]
    };
    formContainerInfo[1] = {
        id: "formContainer",
        typeForm: 100,
        alignSelf: "auto",
        payload: [ ]
    };
    formContainerInfo[2] = {
        id: "formContainer",
        typeForm: 3,
        alignSelf: "auto",
        payload: [["Primeros pasos",
                   "Accedé a nuestro tutorial rápido y comenzá a diseñar con profesionalismo en Canva.",
                   "img/imgHideCont/imgCentroAyuda_Big.png"]]
    };
    //-----------------Se setea la informacion del form struct main---------------------------------------------//
    formStructMainInfo[4] = {
        id: "formStruct",
        divChildren: formContainerInfo,
        typeFlex: "row"
    };
    //
    const divContainerDropDownButtons = document.querySelectorAll(".c_Header_ContainerOptions_UL_ContainerDropDownButtons");
    const hideDropDownContainer = document.querySelectorAll(".c_Header_ContainerOptions_UL_HideContainerDropDown");
    //
    for(i = 0; i < divContainerDropDownButtons.length; i++){
        //
        const divDropDownButton = divContainerDropDownButtons[i].children[1];
        setTimeout(()=>{
            divDropDownButton.style.width = `${divDropDownButton.previousElementSibling.clientWidth}px`;
        },100);
        //
        hideDropDownContainer[i].style.top = `${hideDropDownContainer[i].parentElement.clientHeight}px`;
        hideDropDownContainer[i].style.display = "none";
        //
        hideDropDownContainer[i].appendChild(generateFormStruct_Header_ContainerOptions(formStructMainInfo[i]));
    }
}

function DEPRECATEDgenerateFormStruct_Header_ContainerOptions(formStructMain) {
    //
    let formStruct = formStructMain;
    //
    const divContainer = document.createElement("div");
    //
    if(formStruct.typeFlex === "row"){
        divContainer.classList.add("cDispFlexRowCenterAlignCenter");
    }
    else if(formStruct.typeFlex === "column"){
        divContainer.classList.add("cDispFlexColumnCenterAlignCenter");
    }
    else{
        
    }
    //
    for (let i = 0; i < formStruct.divChildren.length; i++) {
        if(formStruct.divChildren[i].id === "formContainer"){
            createFormType_Header_ContainerOptions(formStruct.divChildren[i].typeForm, divContainer, formStruct.divChildren[i].alignSelf, formStruct.divChildren[i].payload);
        }
        else if(formStruct.divChildren[i].id === "formStruct"){
            const divContainerRecursive = generateFormStruct_Header_ContainerOptions(formStruct.divChildren[i]);
            divContainer.appendChild(divContainerRecursive);
        }
        else{

        }
    }
    //
    return divContainer;
}


function initialize_Header_ContainerOptions(){
    //
    const divContainerDropDownButtons = document.querySelectorAll(".c_Header_ContainerOptions_UL_ContainerDropDownButtons");
    const hideDropDownContainer = document.querySelectorAll(".c_Header_ContainerOptions_UL_HideContainerDropDown");
    //
    const objDataHideContainer = [
       {//-------------------------1-----------------------------//
        formMainStruct: `
                        <div class="cDispFlexRowFlexStartAlignFlexStart formHere1">

                        </div>
                        `,
        formData: [
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["¡A diseñar!"],
                              ["Creador de logos", 
                               "Creador de flyers", 
                               "Creador de banners", 
                               "Creador de carteles", 
                               "Creador de currículumns", 
                               "Creador de invitaciones", 
                               "Creador de tarjetas de presentación", 
                               "Creador de intros de video", 
                               "Creador de memes", 
                               "Creador de collages", 
                               "Creador de graficos", 
                               "Ver todo"]]},  
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["Más información sobre los mejores productos"],
                              ["Presentaciones", 
                               "Pizarras online", 
                               "Editor de PDF", 
                               "Gráficos",
                               "Sitios web",
                               "Membretes",
                               "Agendas",
                               "Currículumns vitae",
                               "Tarjetas de presentación",
                               "Publicaciones",
                               "Historias",
                               "Instagram",
                               "Facebook",
                               "Twitter",
                               "YouTube",
                               "Anuncios en video",
                               "Editor de videos",
                               "Álbumes de fotos",
                               "Editor de fotos",
                               "Folletos",
                               "Flyers",
                               "Logos",
                               "Menús",
                               "Carteles",
                               "Stickers",
                               "Carteles para jardín",
                               "Tarjetas",
                               "Calendarios",
                               "Invitaciones",
                               "Etiquetas",
                               "Tazas",
                               "Postales",
                               "Playeras"]]},  
                   {type: 100, 
                    queryRoute: "formHere1",
                    payload: []},
                   {type: 3, 
                    queryRoute: "formHere1",
                    payload: [["Explorá las plantillas de Canva",
                               "Explorá cientos de plantillas gratis listas para usar y elegí la que más te guste.",
                               "img/imgHideCont/imgExploraPlantillasCanva.png"]]},
                    ]
        },
       {//-------------------------2-----------------------------//
        formMainStruct: `
                        <div class="cDispFlexRowFlexStartAlignFlexStart formHere1">

                        </div>
                        `,
        formData: [
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["Casos de uso"],
                              ["Creá contenido más rápido", 
                               "Cautivá a tu público", 
                               "Asegurá el éxito de tu marca",
                               "Optimizá el trabajo en equipo",
                               "Planidicá y programá tus posts",
                               "Gestioná los recursos de tu marca",
                               "Lluvias de ideas y talleres",
                               "Ganá en produtividad"]]},  
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["Funciones"],
                              ["Invitá personas a tu equipo", 
                               "Plantillas del equipo",
                               "Gestión de la marca",
                               "Gestión de contenido",
                               "Productividad",
                               "Controles de la marca",
                               "Seguridad y SSO",
                               "Integraciones"]]},   
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["Industrias"],
                              ["Medios y publicaciones",
                               "Noticias",
                               "Bienes raíces",
                               "Salud y bienestar",
                               "Tecnología",
                               "Deportes",
                               "Venta minorista",
                               "Emprendimientos"]]}, 
                   {type: 1, 
                    queryRoute: "formHere1",
                    payload: [["Departamentos"],
                              ["Marketing",
                               "Comunicación interna",
                               "Agencias creativas",
                               "Ventas"]]},
                   {type: 100, 
                    queryRoute: "formHere1",
                    payload: []},
                   {type: 2, 
                    queryRoute: "formHere1",
                    payload: [["Worksuite Visual",
                               "Revientá tu forma de trabajar.",
                               "img/imgHideCont/imgWorkVisual.png"],
                              ["Casos de estudio",
                               "Descubrí la forma en que usaqn Canva algunas de las principales empresas del mundo.",
                               "img/imgHideCont/imgCasosEstudio.png"],
                              ["Canva para Equipos",
                               "Para equipos de cualquier tamaño que quieren crear en conjunto.",
                               "img/imgHideCont/imgCanvaParaEquipo.png"]]},
                ]
        },
       {//-------------------------3-----------------------------//
        formMainStruct: `
                        <div class="cDispFlexRowFlexStartAlignFlexStart formHere1">

                        </div>
                        `,
        formData: [
                   {type: 2, 
                    queryRoute: "formHere1",
                    payload: [["Docentes y escuelas",
                               "Creá y colaborá visualmente en el salón de clases.",
                               "img/imgHideCont/imgEdu.png"],
                              ["Estudiantes",
                               "Diseños y documentos para estimular el aprendizaje.",
                               "img/imgHideCont/imgEstudiante.png"],
                              ["Recursos gratis para docentes",
                               "Tutoriales, crusos, webinarrs y mucho más, solo para docentes.",
                               "img/imgHideCont/imgSrcDocente.png"],
                              ["Integraciones con LMS",
                               "Integrá Canva con tu sistema de gestión del apredizaje.",
                               "img/imgHideCont/imgIntegracionesLMS.png"],
                              ["Casos de estudio",
                               "Descubrí la forma en que otras personas aprovechan las herramientas de aprendizaje creativo y colaborativo.",
                               "img/imgHideCont/imgCasosEstudio.png"]]},  
                   {type: 100, 
                    queryRoute: "formHere1",
                    payload: []},
                   {type: 3, 
                    queryRoute: "formHere1",
                    payload: [["Convertite en Creador de Educación",
                               "Creá y publicá tus propios recursos en Canva. Ganá compartiendo.",
                               "img/imgHideCont/imgCreadorEducacion.png"]]},
                    ]
 
        },
       {//-------------------------4-----------------------------//
        formMainStruct: `
                        <div class="cDispFlexRowFlexStartAlignFlexStart">
                            <div class="cDispFlexColumnCenterAlignFlexStart">
                                <div class="cDispFlexRowFlexStartAlignCenter formHere1">
                            
                                </div>
                                <div class="cDispFlexRowFlexStartAlignCenter formHere2">
                                    
                                </div>
                                <div class="cDispFlexRowFlexStartAlignCenter formHere3">
                                    
                                </div>
                            </div>
                            <div class="cDispFlexRowFlexStartAlignCenter formHere4">
                        
                            </div>
                            <div class="cDispFlexRowFlexStartAlignCenter formHere5">
                        
                            </div>
                        </div>
                        `,
        formData: [
                   {type: 3, 
                    queryRoute: "formHere1",
                    payload: [["Gratis",
                               "Para cualquiera que quiera diseñar, ya sea por cuenta propia o en equipo. Es gratis or siempre.",
                               "img/imgHideCont/imgCanvaGratis.png"],
                              ["Pro",
                               "Para quienes quieren obtner acceso ilimitado a contenido prémium y herramientas de diseño inteligentes.",
                               "img/imgHideCont/imgCanvaPro.png"],
                              ["Equipos",
                               "Para equipos pequeños y grandes que quieren crear en conjunto, con herramientas prémium diseñadas para respetar la identidad de sus marcas.",
                               "img/imgHideCont/imgCanvaEquipo.png"]]},
                   {type: 101, 
                    queryRoute: "formHere2",
                    payload: []}, 
                   {type: 4, 
                    queryRoute: "formHere3",
                    payload: ["Compare pricing"]},  
                   {type: 100, 
                    queryRoute: "formHere4",
                    payload: []}, 
                   {type: 2, 
                    queryRoute: "formHere5",
                    payload: [["Educación",
                               "Una potente herramienta gratis para estudiantes, docentes y cualquier salón de clases.",
                               "img/imgHideCont/imgEducacion.png"],
                              ["ONG",
                               "Canva Pro es gratis para cualquier organización sin fines de lucro registrada. Unite ahora.",
                               "img/imgHideCont/imgONG.png"]]},         
                    ]
        },
       {//-------------------------5-----------------------------//
        formMainStruct: `
                        <div class="cDispFlexRowFlexStartAlignFlexStart formHere1">

                        </div>
                        `,
        formData: [
                   {type: 2, 
                    queryRoute: "formHere1",
                    payload: [["Blog",
                               "Explorá articulos y recursos.",
                               "img/imgHideCont/imgBlog.png"],
                              ["Design School",
                               "Disfrutá de nuestros tutoriales y cursos.",
                               "img/imgHideCont/imgDesignSchool.png"],
                              ["Eventos",
                               "Inspirate en las tendencias y aprendé de especialistas en diseño.",
                               "img/imgHideCont/imgEventos.png"],
                              ["Centro de ayuda",
                               "Obtené ayuda y soporte técnico.",
                               "img/imgHideCont/imgCentroAyuda.png"]]},  
                   {type: 100, 
                    queryRoute: "formHere1",
                    payload: []},
                   {type: 3, 
                    queryRoute: "formHere1",
                    payload: [["Primeros pasos",
                               "Accedé a nuestro tutorial rápido y comenzá a diseñar con profesionalismo en Canva.",
                               "img/imgHideCont/imgCentroAyuda_Big.png"]]},
                    ]
 
        }
    ];
    //
    for(i = 0; i < divContainerDropDownButtons.length; i++){
        //
        const divDropDownButton = divContainerDropDownButtons[i].children[1];
        //
        hideDropDownContainer[i].style.top = `${hideDropDownContainer[i].parentElement.clientHeight}px`;
        //
        generateFormStruct_Header_ContainerOptions(hideDropDownContainer[i], objDataHideContainer[i]);
        //
        setTimeout((index)=>{
            divDropDownButton.style.width = `${divDropDownButton.previousElementSibling.clientWidth}px`;
            hideDropDownContainer[index].style.display = "none";
        },500,i);
    }
}

function generateFormStruct_Header_ContainerOptions(parentContainer, data){
    //
    const fragmentHTMLMain = document.createDocumentFragment();
    const template = document.createElement("template");   
    //
    template.innerHTML = data.formMainStruct;
    fragmentHTMLMain.appendChild(template.content);
    //
    for (let i = 0; i < data.formData.length; i++) {
        //
        createFormType_Header_ContainerOptions(data.formData[i].type, fragmentHTMLMain.querySelector(`.${data.formData[i].queryRoute}`), data.formData[i].payload)
    }
    //
    parentContainer.appendChild(fragmentHTMLMain);
}

function createFormType_Header_ContainerOptions(formType, parentContainer, payload){
    //
    if(formType == 1){
        //
        const fragmentHTML = document.createDocumentFragment();
        const template = document.createElement("template");   
        template.innerHTML = `
            <div class="c_Header_CO_UL_HCDD_FormType1 cDispFlexColumnCenterAlignFlexStart">
                <div class="c_Header_CO_UL_HCDD_FormType1_Title cDispFlexRowFlexStartAlignFlexStart">
                    <p class="cConfigFont5Prop1 cTextColorBlack1"><b>${payload[0]}</b></p>
                </div>
                <div class="c_Header_CO_UL_HCDD_FormType1_Content cDispFlexRowFlexStartAlignFlexStart">
                
                </div>
            </div>`;
        //
        fragmentHTML.appendChild(template.content);
        //
        let arrayAnchorText = payload[1];
        const maxNroRows = 9;
        const nroColumns = Math.ceil(arrayAnchorText.length / maxNroRows);
        const fragmentHTMLColumn = document.createDocumentFragment();
        //
        for (let i = 0, indexAnchor = 0, nroRowToFill = 0; i < nroColumns; i++) {
            //
            template.innerHTML = `
                                  <div class="cDispFlexColumnCenterAlignFlexStart">
 
                                  </div>`;
            fragmentHTMLColumn.appendChild(template.content);
            //
            nroRowToFill = ((arrayAnchorText.length - indexAnchor) >= maxNroRows) ? maxNroRows : (arrayAnchorText.length - indexAnchor);
            template.innerHTML = '';
            //
            for (j = indexAnchor; j < (indexAnchor + nroRowToFill); j++) {
                //
                template.innerHTML += `<a href="#" class="cConfigFont6Prop1 cTextColorGray1">${arrayAnchorText[j]}</a>`;
            }
            //
            indexAnchor += nroRowToFill;
            //
            fragmentHTMLColumn.firstElementChild.appendChild(template.content);
            fragmentHTML.querySelector(":nth-child(2)").appendChild(fragmentHTMLColumn);
        }
        //
        parentContainer.appendChild(fragmentHTML);
        //
        setTimeout(function(parentContainer) {
            const divContainerColumns = parentContainer.querySelectorAll(".c_Header_CO_UL_HCDD_FormType1_Content div");
            //
            for (let i = 0; i < divContainerColumns.length; i++) {
                //
                const rectParentWidth = divContainerColumns[i].getBoundingClientRect().width;
                //Se realiza un bucle FOR para adaptar
                for (let indexAnchor = 0; indexAnchor < divContainerColumns[i].childElementCount; indexAnchor++) {
                    //Se obtiene el obj Rect del elemento
                    const rectChildWidth = divContainerColumns[i].children[indexAnchor].getBoundingClientRect().width;
                    //Mediante los datos Rect Width de la columna y su hijo (Item), se realiza un relleno en su padding derecho 
                    divContainerColumns[i].children[indexAnchor].style.paddingRight = `${rectParentWidth - rectChildWidth + 8}px`;
                    //
                    divContainerColumns[i].children[indexAnchor].addEventListener("mouseover",function(e){
                        e.target.style.backgroundColor = "rgba(64,87,109,.07)";
                    });
                    divContainerColumns[i].children[indexAnchor].addEventListener("mouseleave",function(e){
                        e.target.style.backgroundColor = "inherit";
                    });
                }
            }
        },50,parentContainer.lastElementChild);
    }
    else if(formType == 2){
        //
        const fragmentHTML = document.createDocumentFragment();
        const template = document.createElement("template");  
        // 
        template.innerHTML = `<div class="c_Header_CO_UL_HCDD_FormType2">
                    
                              </div>`;
        //
        fragmentHTML.appendChild(template.content);
        //
        template.innerHTML = '';
        const nroDivForms = payload.length;
        const maxNroRows = 3;
        const nroColumns = Math.ceil(nroDivForms / maxNroRows);
        fragmentHTML.firstElementChild.style.gridTemplateColumns = `repeat(${nroColumns}, 1fr)`;
        //
        for (let i = 0, indexRow = 1, indexColumn = 1; i < nroDivForms; i++) {
            //
            let titleTextFragmented = [payload[i][0].split(" ").slice(0, -1).join(" "), payload[i][0].split(" ").pop()];
            //
            template.innerHTML +=  `<a href="#" class="c_Header_CO_UL_HCDD_FormType2_Form cDispFlexRowFlexStartAlignCenter" style="grid-row: ${indexRow}; grid-column: ${indexColumn};">
                                        <div class="c_Header_CO_UL_HCDD_FormType2_Form_Img cDispFlexRowCenterAlignCenter">
                                            <img src="${payload[i][2]}" alt="">
                                        </div>
                                        <div class="c_Header_CO_UL_HCDD_FormType2_Form_Content cDispFlexColumnCenterAlignFlexStart">
                                            <div class="c_Header_CO_UL_HCDD_FormType2_Form_Content_Title cDispFlexRowFlexStartAlignCenter">
                                                <p class="cConfigFont5Prop1 cTextColorBlack1" style="font-weight: bold;">
                                                    ${titleTextFragmented[0]}
                                                    <nobr style="word-spacing: -4px">
                                                        ${titleTextFragmented[1]}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                            <path fill="currentColor" d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"></path>
                                                        </svg>
                                                    </nobr>
                                                </p>
                                            </div>
                                            <p class="cConfigFont6Prop1 cTextColorGray1">
                                                ${payload[i][1]}
                                            </p>
                                        </div>
                                    </a>`;
            //
            if(((i+1) % maxNroRows) === 0){
                indexColumn++;
                indexRow = 1;
            }
            else{
                indexRow++;
            }
        }
        //
        fragmentHTML.firstElementChild.appendChild(template.content);
        parentContainer.appendChild(fragmentHTML);
        //
        parentContainer.querySelectorAll(".c_Header_CO_UL_HCDD_FormType2 a").forEach(anchorForm => {
            anchorForm.addEventListener("mouseover",function(e){
                if(getComputedStyle(anchorForm).backgroundColor !== "rgba(64, 87, 109, 0.07)"){
                    if(hasElementThatAncestor(e.target, anchorForm)){
                        anchorForm.style.backgroundColor = "rgba(64,87,109,.07)";
                        anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType2_Form_Content_Title p").style.textDecorationLine = "underline";
                    }
                }
            });
            anchorForm.addEventListener("mouseleave",function(){
                anchorForm.style.backgroundColor = "inherit";
                anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType2_Form_Content_Title p").style.textDecorationLine = "none";
            });
        });
    }
    else if(formType == 3){
        //
        const fragmentHTML = document.createDocumentFragment();
        const template = document.createElement("template");   
        template.innerHTML = `<div class="c_Header_CO_UL_HCDD_FormType3 cDispFlexRowCenterAlignFlexStart">
                    
                              </div>`;
        //
        fragmentHTML.appendChild(template.content);
        //
        template.innerHTML = '';
        const nroColumns = payload.length;
        for (let i = 0; i < nroColumns; i++) {
            //
            let titleTextFragmented = [payload[i][0].split(" ").slice(0, -1).join(" "), payload[i][0].split(" ").pop()];
            //
            template.innerHTML += `
                <a href="#" class="c_Header_CO_UL_HCDD_FormType3_Form cDispFlexColumnCenterAlignFlexStart">
                    <div class="c_Header_CO_UL_HCDD_FormType3_Form_Img cDispFlexRowCenterAlignCenter">
                        <img src="${payload[i][2]}" alt="">
                    </div>
                    <div class="c_Header_CO_UL_HCDD_FormType3_Form_Content cDispFlexColumnCenterAlignFlexStart">
                        <div class="c_Header_CO_UL_HCDD_FormType3_Form_Content_Title cDispFlexRowFlexStartAlignCenter">
                            <p class="cConfigFont5Prop1 cTextColorBlack1" style="font-weight: bold;">
                                ${titleTextFragmented[0]}
                                <nobr style="word-spacing: -4px">
                                    ${titleTextFragmented[1]}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="currentColor" d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"></path>
                                    </svg>
                                </nobr>
                            </p>
                        </div>
                        <p class="cConfigFont6Prop1 cTextColorGray1">
                            ${payload[i][1]}
                        </p>
                    </div>
                </a>`;
        }
        //
        fragmentHTML.firstElementChild.appendChild(template.content);
        parentContainer.appendChild(fragmentHTML);
        //
        parentContainer.querySelectorAll(".c_Header_CO_UL_HCDD_FormType3 a").forEach(anchorForm => {
            anchorForm.addEventListener("mouseover",() => {
                anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType3_Form_Img img").style.transform = "scale(1.06)";
                anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType3_Form_Content_Title p").style.textDecorationLine = "underline";
            });
            anchorForm.addEventListener("mouseleave",() => {
                anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType3_Form_Img img").style.transform = "scale(1)";
                anchorForm.querySelector(".c_Header_CO_UL_HCDD_FormType3_Form_Content_Title p").style.textDecorationLine = "none";
            });
        });
    }
    else if(formType == 4){
        //
        const fragmentHTML = document.createDocumentFragment();
        const template = document.createElement("template"); 
        // 
        let titleTextFragmented = [payload[0].split(" ").slice(0, -1).join(" "), payload[0].split(" ").pop()]; 
        //
        template.innerHTML = `
            <div class="c_Header_CO_UL_HCDD_FormType4 cDispFlexColumnCenterAlignFlexStart">
                <a href="#" class="c_Header_CO_UL_HCDD_FormType4_Title cConfigFont6Prop1 cTextColorBlack1">
                    ${titleTextFragmented[0]}
                    <nobr style="word-spacing: -4px">
                        ${titleTextFragmented[1]}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="currentColor" d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"></path>
                        </svg>
                    </nobr>
                </a>
            </div>`;
        //
        fragmentHTML.appendChild(template.content);
        parentContainer.appendChild(fragmentHTML);
        //
        const acnhorTitle = parentContainer.lastElementChild.querySelector(".c_Header_CO_UL_HCDD_FormType4_Title");
        //
        acnhorTitle.addEventListener("mouseover",() => {
            acnhorTitle.style.textDecorationLine = "underline";
        });
        acnhorTitle.addEventListener("mouseleave",() => {
            acnhorTitle.style.textDecorationLine = "none";
        });
    }
    else if(formType == 100){
        let containerMain = document.createElement("div");
        //
        setTimeout(()=>{
            parentContainer.style.height = `${parentContainer.parentElement.getBoundingClientRect().height}px`;
            containerMain.style.height = "100%";
        },100);
        containerMain.style.borderLeft = "1px solid rgba(43,59,74,.3)";
        //
        parentContainer.appendChild(containerMain);
    }
    else if(formType == 101){
        let containerMain = document.createElement("div");
        //
        parentContainer.style.width = "100%";
        containerMain.style.width = "100%";
        containerMain.style.borderTop = "1px solid rgba(43,59,74,.3)";
        //
        parentContainer.appendChild(containerMain);
    }
}

//-----------------------------------------Parte funciones genericas------------------------------------------//
function fillSelectListBox(selectListBox, arrayItems){
    for (let i = 0; i < arrayItems.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = arrayItems[i];
        //listItem.addEventListener("click",() => {window.location.reload()});
        selectListBox.appendChild(listItem);
    }
}

function hasElementThatAncestor(element, ancestorElement){
    //
    if(element !== null && ancestorElement !== null){
        //
        let elementTraveler = element;
        let cond = true;
        //console.log("elementStart: ", elementTraveler)
        //
        while (cond) {
            //
            if(elementTraveler === ancestorElement){
                //console.log("elementFinal: ", elementTraveler);
                return true;
            }
            //
            if(elementTraveler.parentElement === null){
                //console.log("ParentNULL");
                return false;
            }
            else{
                elementTraveler = elementTraveler.parentElement;
            }
        }
    }
    else{
        return null;
    }
}

//----------------------Parte funciones particulares de adaptar altura de CanvaOptions------------------------//
function adaptHeight_CanvaOptions(continueAdapting){
    //
    const indexMaxHeightDiv = objData_CanvaOptions.indexDivMaxHeight;
    const divContainers = objData_CanvaOptions.divContainers;
    //
    if(continueAdapting){
        let heightMax = window.getComputedStyle(divContainers[indexMaxHeightDiv]).height;
        //
        for (let i = 0; i < divContainers.length; i++) {
            if(i !== indexMaxHeightDiv){
                divContainers[i].style.height = heightMax;
            }
        }
    }
    else{
        for (let i = 0; i < divContainers.length; i++) {
            if(i !== indexMaxHeightDiv){
                divContainers[i].style.height = "auto";
            }
        }
    }
}

//--------------------------//
function initializeGrid_FormPlantillas_Grid(){
    //
    const nroColumns = objData_FormPlantillas_Grid.gridNroColumnMax;
    const containerGrid = document.getElementById("id_FormPlantillas_Grid");
    const templateFlexContainerColumn = document.getElementById("id_Template_FormPlantillas_Grid_FlexColumn");
    const templateContainerPlantilla = document.getElementById("id_Template_FormPlantillas_Grid_ContainerPlantilla");
    const fragmentHTMLFlexContainerColumn = document.createDocumentFragment();
    const fragmentHTMLContainerPlantilla = document.createDocumentFragment();
    //
    for (let i = 0; i < nroColumns; i++) {
        //
        const cloneTemplateFlexContainerColumn = templateFlexContainerColumn.content.cloneNode(true);
        // 
        let columnOrderPlantillas = objData_FormPlantillas_Grid.order[nroColumns-1][i];
        for (let j = 0; j < columnOrderPlantillas.length; j++) {
            //
            const cloneTemplateContainerPlantilla = templateContainerPlantilla.content.cloneNode(true);
            //
            let imgSrc = objData_FormPlantillas_Grid.imgSrc[columnOrderPlantillas[j]];
            cloneTemplateContainerPlantilla.querySelector(".c_FormPlantillas_Grid_FlexColumn_ContainerPlantilla").setAttribute("id", `id_FormPlantillas_Grid_FlexColumn_ContainerPlantilla${columnOrderPlantillas[j]}`);
            cloneTemplateContainerPlantilla.querySelector(".c_FormPlantillas_Grid_FlexColumn_ContainerPlantilla img").setAttribute("src", imgSrc);
            //
            fragmentHTMLContainerPlantilla.appendChild(cloneTemplateContainerPlantilla);
        }
        //
        fragmentHTMLFlexContainerColumn.appendChild(cloneTemplateFlexContainerColumn);
        fragmentHTMLFlexContainerColumn.children[i].appendChild(fragmentHTMLContainerPlantilla);
        fragmentHTMLContainerPlantilla.replaceChildren();
    }
    //
    containerGrid.appendChild(fragmentHTMLFlexContainerColumn);
}

function controlChangeColumnsGrid_FormPlantillas_Grid(){
    //
    const containerGrid = document.getElementById("id_FormPlantillas_Grid");
    const flexContainerColumns = containerGrid.children;
    const nroColumns = window.getComputedStyle(containerGrid).getPropertyValue("grid-template-columns").split(" ").length;
    const nroColumnsMax = objData_FormPlantillas_Grid.gridNroColumnMax;
    const fragmentHTMLRemovedContainerPlantilla = document.createDocumentFragment();
    //
    for (let i = 0; i < nroColumnsMax; i++) {
        //
        if(i < nroColumns){
            flexContainerColumns[i].style.display = "flex";
        }
        else{
            flexContainerColumns[i].style.display = "none";
        }
        //
        while (flexContainerColumns[i].children.length > 0) {
            fragmentHTMLRemovedContainerPlantilla.appendChild(flexContainerColumns[i].children[0]);
        }
    }
    //
    const fragmentHTMLContainerPlantillaForColumns = Array(nroColumns).fill(document.createDocumentFragment(),0);
    for (let i = 0; i < nroColumns; i++) {
        //
        let columnOrderPlantillas = objData_FormPlantillas_Grid.order[nroColumns-1][i];
        for (let j = 0; j < columnOrderPlantillas.length; j++) {
            //
            for (let k = 0; k < fragmentHTMLRemovedContainerPlantilla.children.length; k++) {
                //
                let idNro = parseInt(fragmentHTMLRemovedContainerPlantilla.children[k].id.replace("id_FormPlantillas_Grid_FlexColumn_ContainerPlantilla", ""));
                //
                if(idNro == columnOrderPlantillas[j]){
                    //
                    fragmentHTMLContainerPlantillaForColumns[i].appendChild(fragmentHTMLRemovedContainerPlantilla.children[k]);
                    break;
                }
            }
        }
        //
        flexContainerColumns[i].appendChild(fragmentHTMLContainerPlantillaForColumns[i]);
    }
}

//-----------------------//
function initialize_SlideForms_Container(){
    //
    const formInfo = [
        {img: "https://content-management-files.canva.com/fb5f143d-e59a-4c7a-a2d6-14f658c592b1/LATAM.jpg",
         titleText: "El evento virtual más importante de Canva",
         contentText: "Registrate para acceder gratis a Canva Crear y descubrir los últimos lanzamientos el 23 de marzo de 2023.",
         link: "https://www.canva.com/es_419/canva-create/"},
        {img: "https://content-management-files.canva.com/e85c7778-c24c-4ad8-9f6a-bdc406e799f0/desktopApp-en-500x375.jpg",
         titleText: "Tenemos una app para computadoras",
         contentText: "Diseñá y trabajá en equipo desde tu computadora, sin buscador, plantillas ni distracciones. ¡Descargá la app gratis!",
         link: "https://www.canva.com/es_ar/descargar/windows/"},
        {img: "https://content-management-files.canva.com/9a698171-9e12-4751-9b65-79f87ac2a68b/presentations-en-500x375.jpg",
         titleText: "Hacemos que dar presentaciones sea fácil",
         contentText: "Con nuestras presentaciones de consulta, te va a olvidar del estrés que genera preparar y dar presentaciones.",
         link: "https://www.canva.com/es_mx/presentaciones/"},
        {img: "https://content-management-files.canva.com/bb95860a-174b-4a6f-ab7b-dc64fbb7cf52/video-en-500x375.jpg",
         titleText: "Tenemos un editor de video",
         contentText: "Crea y edita videos profesionales con animaciones y audios sencillos, y mucho más.",
         link: "https://www.canva.com/es_mx/editor-videos/"},
        {img: "https://content-management-files.canva.com/6db7fa0f-4e2b-4fe0-8c17-5e4c91f05370/education-en-500x375.jpg",
         titleText: "Es gratis para el aula",
         contentText: "Usá Canva para enseñar y aprender en persona, de forma remota o en modalidad híbrida. Los docentes y los estudiantes obtienen su propia versión gratuita de Canva.",
         link: "https://www.canva.com/es_ar/educacion/"},
        {img: "https://content-management-files.canva.com/cb2d1b65-2d9f-47c4-9714-751d932faa00/sustainability-en-500x375.jpg",
         titleText: "Es sostenible",
         contentText: "Descubrí lo que hacemos para reducir nuestra huella de carbono y por qué tu pedido de impresión de Canva hace que el planeta sea un lugar más habitable.",
         link: "https://www.canva.com/es_ar/sostenibilidad/"},
        {img: "https://content-management-files.canva.com/73f87f06-a29f-489a-8474-c844622536dc/nonProfits-en-500x375.jpg",
         titleText: "Gratis para ONG",
         contentText: "Las ONG obtienen su propia versión de Canva para que puedan seguir contribuyendo al mundo.",
         link: "https://www.canva.com/es_ar/canva-para-ongs/"},
        {img: "https://content-management-files.canva.com/f109b1d6-d8fb-43e2-9436-4e00b9763e00/creators-en-500x375.jpg",
         titleText: "Celebramos la diversidad",
         contentText: "Conocé cómo apoyamos a una variedad de creadores y creadoras y les damos voz a culturas de todas partes del mundo.",
         link: "https://www.canva.com/canva-represents/"}
    ];
    //
    const divContainer = document.querySelector(".c_SlideForms_ContMain_ContShow_ContForms");
    //
    const template = document.getElementById("id_Template_SlideForms_ContMain_ContShow_ContForms_Form").content;
    const fragmentHTML = document.createDocumentFragment();
    //
    formInfo.forEach(info => {
        //
        const clone = template.cloneNode(true);
        //
        clone.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_Img").setAttribute("href", info.link);
        clone.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_Img img").setAttribute("src", info.img);
        clone.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_TextContent h4").insertAdjacentText("afterbegin", info.titleText);
        clone.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_TextContent p").insertAdjacentText("afterbegin", info.contentText);
        //
        fragmentHTML.appendChild(clone);
    });
    //
    divContainer.appendChild(fragmentHTML);
    //
    divContainer.querySelectorAll(".c_SlideForms_ContMain_ContShow_ContForms_Form").forEach(Form => {
        //
        Form.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_Img img").style.transition = "transform .5s ease";
        //
        Form.addEventListener("mouseover", function(){
            Form.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_Img img").style.transform = "scale(1.1)";
        });
        Form.addEventListener("mouseleave", function(){
            Form.querySelector(".c_SlideForms_ContMain_ContShow_ContForms_Form_Img img").style.transform = "scale(1)";
        });
    });
}

function slideControl_SlideForms_ButtonSlide(slideDirection){
    //
    const slideFormsContainerMain = document.getElementById("id_SlideForms_ContMain");
    const slideFormsContainerShow = slideFormsContainerMain.firstElementChild;
    const slideFormsContainerForms = slideFormsContainerShow.firstElementChild;
    const buttonSlideLeft = slideFormsContainerMain.children[1];
    const buttonSlideRight = slideFormsContainerMain.children[2];
    //
    const formWidth = 304;
    const formGap = 24;
    const containerFormWidth = formWidth + formGap;
    const xOriginRef = slideFormsContainerShow.getBoundingClientRect().x;
    const xActual = slideFormsContainerForms.getBoundingClientRect().x;
    const showWidth = slideFormsContainerShow.getBoundingClientRect().width;
    const maxWidth = slideFormsContainerForms.getBoundingClientRect().width;
    //
    const divisionWidth = (showWidth / containerFormWidth);
    let xPos = xActual - xOriginRef;
    let xWidthSlide = Math.trunc(divisionWidth) * containerFormWidth;
    //
    if(slideDirection == "left"){
        const xPosLimit = 0;
        //
        if(xPos + xWidthSlide >= xPosLimit){
            xPos = xPosLimit;
            buttonSlideLeft.style.visibility = "hidden";
        }
        else{
            if(window.getComputedStyle(buttonSlideRight).visibility == "hidden"){
                xPos += ((Math.trunc(divisionWidth) + (Math.ceil(divisionWidth) - divisionWidth)) * containerFormWidth) - formGap;
            }
            else{
                xPos += xWidthSlide;
            }
        }
        //
        if(window.getComputedStyle(buttonSlideRight).visibility == "hidden"){
            buttonSlideRight.style.visibility = "visible";
        }
    }
    else if(slideDirection == "right"){
        const xPosLimit = showWidth - maxWidth;
        //
        if(xPos - xWidthSlide <= xPosLimit){
            xPos = xPosLimit;
            buttonSlideRight.style.visibility = "hidden";
        }
        else{
            xPos -= xWidthSlide;
        }
        //
        if(window.getComputedStyle(buttonSlideLeft).visibility == "hidden"){
            buttonSlideLeft.style.visibility = "visible";
        }
    }
    //
    slideFormsContainerForms.style.transform = `translateX(${xPos}px)`;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------Parte funciones particulares del Wrapper de FinalDescriptions------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
function controlResize_FinalDescriptions_GridDescription_Form_Wrapper(mode){
    //Se obtienen los wrappers mediante su nombre de clase
    const wrappers = document.getElementsByClassName("c_FinalDescriptions_GridDescription_Form_Wrapper"); 
    //Se verifica el modo al que se va a pasar, luego de haber hecho un resize
    if(mode === "normal"){ //Cuando se pasa al de estado (o modo) "dropDown" a "normal"
        //Se iteran los wrappers
        for (const wrapper of wrappers) {
            //Se remueve la propiedad "height" del elemento
            wrapper.style.removeProperty("height");
        }
    }
    else if(mode === "dropDown"){ //Cuando se pasa al de estado (o modo) "normal" a "dropDown"
        //Se iteran los wrappers
        for (const wrapper of wrappers) {
            //Se verifica si anteriormente el wrapper estaba visible, mediante la consulta de su clase Flag, para volver a ese estado nuevamente
            if(wrapper.classList.contains("stateFlag__Visible__c_FinalDescriptions_GridDescription_Form_Wrapper")){
                //Para volver al modo visible, se elimina la clase Flag y se llama a su funcion de control DropDown para establecer el estado
                wrapper.classList.remove("stateFlag__Visible__c_FinalDescriptions_GridDescription_Form_Wrapper");
                controlDropDownWrapper_FinalDescriptions_GridDescription_Form_Wrapper(wrapper);
            }
        }
    }
    else{ //Cuando el parametro enviado es incorrecto
        console.log("Parametro Mode, incorrecto.");
    }
}

function controlDropDownWrapper_FinalDescriptions_GridDescription_Form_Wrapper(wrapperElement){
    //Se obtiene el boton Svg correspondiente al wrapper
    const svgButton = wrapperElement.previousElementSibling.lastElementChild;
    //Se verifica si el wrapper esta visible, mediante la consulta de su clase Flag
    if(wrapperElement.classList.contains("stateFlag__Visible__c_FinalDescriptions_GridDescription_Form_Wrapper")){
        //Se remueve del wrapper, la clase "Flag de estado visible"
        wrapperElement.classList.remove("stateFlag__Visible__c_FinalDescriptions_GridDescription_Form_Wrapper");
        //Se establece la propiedad "height" como 0, haciendo desaparecer el wrapper
        wrapperElement.style.height = 0;
        //Se altera el "Path" del boton Svg, quedando la presentacion de "flecha hacia abajo" 
        svgButton.firstElementChild.setAttribute("d","m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z");
    }
    else{
        //Se agrega al wrapper, la clase "Flag de estado visible"
        wrapperElement.classList.add("stateFlag__Visible__c_FinalDescriptions_GridDescription_Form_Wrapper");
        //Se obtiene todo el valor real del contenido de wrapper, tomando en cuenta su altura de contenido y su margen de bloque
        const wrapperULElement = wrapperElement.firstElementChild;
        const offsetHeight = parseInt(window.getComputedStyle(wrapperULElement).getPropertyValue("height"));
        const marginHeight = parseInt(window.getComputedStyle(wrapperULElement).getPropertyValue("margin-top")) + parseInt(window.getComputedStyle(wrapperULElement).getPropertyValue("margin-bottom"));
        //Se establece la propiedad "height" como el valor real de contenedor que posee el wrapper, haciendo aparecer el wrapper
        wrapperElement.style.height = offsetHeight + marginHeight + "px";
        //Se altera el "Path" del boton Svg, quedando la presentacion de "flecha hacia arriba" 
        svgButton.firstElementChild.setAttribute("d","m4.29 10.53 3.53-3.54c.1-.1.26-.1.36 0l3.53 3.54a.75.75 0 1 0 1.06-1.06L9.24 5.93a1.75 1.75 0 0 0-2.48 0L3.23 9.47a.75.75 0 0 0 1.06 1.06z");
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------//

//-------------------Parte funciones particulares del SelectListBox de FinalDescriptions-----------------------//
function initializeSelectListBox(){
    //
    let ListBox = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ListBox");
    //
    fillSelectListBox(ListBox, arrayLanguageFinalDescriptionsListBox);
    //
    let listBoxItemLanguageNotFound = ListBox.children[ListBox.childElementCount-1];
    listBoxItemLanguageNotFound.style.display = "none";
    listBoxItemLanguageNotFound.style.padding = "22px";
    listBoxItemLanguageNotFound.style.minWidth = "auto";
}

function restorePostTransition_Wrapper_FinalDescriptions_SelectListBox(){
    let wrapper = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper");
    wrapper.style.visibility = "hidden";
    wrapper.style.opacity = "1";
}

function controlDropDownWrapper_FinalDescriptions_SelectListBox(){
    let wrapper = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper");
    let button = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Button");
    if(wrapper.classList.contains("c_visible")){
        wrapper.classList.remove("c_visible");
        wrapper.style.opacity = "0";
        button.style.borderColor = "rgba(43,59,74,.3)";
    }
    else{
        wrapper.classList.add("c_visible");
        wrapper.style.visibility = "visible";
        button.style.borderColor = "#8b3dff";
        controlFocus_FinalDescriptions_SelectListBox("makeFocus", null);
    }
}

function controlFocus_FinalDescriptions_SelectListBox(mode, targetElement){
    let containerInput = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput");
    let input = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput_Input");
    switch (mode) {
        case "makeFocus":
            input.focus();
            input.classList.add("c_focused");
            containerInput.style.borderColor = "#8b3dff";
            break;
        case "checkFocus":
            if(input.classList.contains("c_focused")){
                console.log(targetElement);
                //
                let button = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Button");
                if(targetElement !== button){
                    let wrapper = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper");
                    if(targetElement !== wrapper){
                        let InputSvg = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ContainerInput_Svg");
                        if(targetElement !== containerInput && targetElement !== InputSvg && targetElement !== input){
                            let listBox = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ListBox");
                            if(targetElement !== listBox && targetElement.parentElement !== listBox){
                                input.classList.remove("c_focused");
                                input.value = "";
                                inputSearch_FinalDescriptions_SelectListBox(input);
                                controlDropDownWrapper_FinalDescriptions_SelectListBox();
                            }
                        }
                        else{
                            input.focus();
                            containerInput.style.borderColor = "#8b3dff";
                        }
                    }
                    else{
                        containerInput.style.borderColor = "rgba(43,59,74,.3)";
                    }
                }
            }
            break;
        default:
            break;
    }
}

function inputSearch_FinalDescriptions_SelectListBox(input) {
    //
    let textValue = input.value.toLowerCase();
    let textValueLength = textValue.length;
    let listBox = document.getElementById("id_FinalDescriptions_FlexForm_ContainerButton_Wrapper_ListBox");
    let listBoxItems = listBox.children;
    let listBoxItemsLenght = listBoxItems.length - 1;
    let listSimilarLanguage = [];
    //
    if(textValueLength === 0){
        for (let i = 0, j = 0; i < listBoxItemsLenght; i++) {
            listBoxItems[i].style.display = "flex";
        }
    }
    else{
        for (let i = 0, j = 0; i < listBoxItemsLenght; i++) {
            //
            let foundSimilar = false;
            let itemText = listBoxItems[i].innerHTML.toLowerCase();
            //
            for (let k = 0; (k + textValueLength) <= itemText.length; k++) {
                if(itemText.substring(k,k+textValueLength) === textValue)
                {
                    foundSimilar = true;
                    listSimilarLanguage[j] = itemText;
                    j++;
                    break;
                }
            }
            if(foundSimilar){
                listBoxItems[i].style.display = "flex";
            }
            else{
                listBoxItems[i].style.display = "none";
            }
        }
    }
    //
    let listBoxItemLanguageNotFound = listBoxItems[listBoxItemsLenght];
    if(listSimilarLanguage.length === 0 && textValueLength !== 0){
        listBoxItemLanguageNotFound.style.display = "flex";
    }
    else{
        listBoxItemLanguageNotFound.style.display = "none";
        if(listSimilarLanguage.length >= 6 || listSimilarLanguage.length === 0){
            listBox.style.overflowY = "visible";
        }
        else{
            listBox.style.overflow = "hidden";
        }
    }
}






