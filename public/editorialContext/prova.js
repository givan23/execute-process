import React from "react";


///////////////////////////////////// modulo common


export const SnippetListCommon = {
    snippetCommon: [
        {
            sni1: snippet1(),
        },
        {
            sni2: snippet2(),
        },
    ]
};

function snippet1() {

    return <>
        <div>snippet1</div>
        <Snippet1_1/>
    </>

}

function Snippet1_1() {

    return <div>snippet1_1</div>
}

function snippet2() {

    return <div>snippet2</div>
}



///////////////////////////////////// modulo virtual

export const SnippetListVirtual = {
    snippetVirtual: [
        {
            sni3: snippet3(),
        },
        {
            sni4: snippet4(),
        },
    ]
};

function snippet3() {

    return <>
        <div>snippet3</div>
        <Snippet3_3/>
    </>

}

function Snippet3_3() {

    return <div>snippet3_3</div>
}

function snippet4() {

    return <div>snippet4</div>
}

//set local storage
export function setLocalStorage (SnippetListCommon) {
    const SnippetListCommonString = JSON.stringify(SnippetListCommon);
    localStorage.setItem('SNIPPET_GLOBAL', SnippetListCommonString);


}
export const SNIPPET_GLOBAL= 'SNIPPET_GLOBAL';

export function appendLocalStorage(SNIPPET_GLOBAL, SnippetListOther) {

    let SnippetListCommonString = localStorage.getItem(SNIPPET_GLOBAL);
    if(SnippetListCommonString === null) SnippetListCommonString = "";
    let SnippetListCommon = JSON.parse(SnippetListCommonString);

    const SnippetListOtherString = JSON.stringify(SnippetListOther);
    localStorage.setItem(SNIPPET_GLOBAL, SnippetListOtherString);
}

export function getLocalStorage (SNIPPET_GLOBAL) {
    return JSON.parse( localStorage.getItem(SNIPPET_GLOBAL) );
}


