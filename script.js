$(function (){

    $("#pays").on("click", ()=>{

        $.ajax({
            url: "all.json",
            method: "GET",
            dataType: "json",
            success: (paysListe) => {

                let text = `<table>`;
    
                paysListe.forEach((pays, indice) => {
                    text += `<tr>`;
                    text += `<td>${indice + 1} </td>`;
                    text += `<td>${pays.name} </td>`;
                    text += `<td>${pays.topLevelDomain.toString()} </td>`;
                    text += `<td>${pays.alpha2Code} </td>`;
                    text += `<td>${pays.callingCodes[0].toString()} </td>`;
                    text += `<td>${pays.altSpellings[1]} </td>`;
                    text += `<td>${pays.capital} </td>`;
                    text += `<td>${pays.region} </td>`;
                    text += `</tr>`;
                });
    
                text += `</table>`
    
                document.querySelector("div").innerHTML = text;
    
    
            }
        })
    })
})