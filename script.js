$(function () {

    $("#pays").on("click", () => {

        $.ajax("https://restcountries.com/v3.1/all", {
            success: function (tableauPays) {
                // attend que le réseau retourne une réponse en success
                // const tableauPays = reponse.responseJSON ; // tableau objet => collection
                let html = "";
                for (let pays of tableauPays) {
                    html += `<li>${pays.name.common} - ${pays.flag} </li>`
                }
                $(".resultats").html(html);
            },
            error: function () {
                // attend que le réseau retourne une réponse en erreur
                $(".resultats").html("<li>pb</li>");
            },
            complete: function () {
                // attend que le réseau retourne une réponse quelquelsoit
            }
            /* url: "all.json",
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
     
     
             }*/
        })
    })
    $("#cocktail").on("click", () => {
        $("#resulcoc").css({
            display: "grid",
            "grit-template-columns": "repeat(3, 1fr)",
            gap: 10,
            "max-width": 1200,
            margin: "0 auto"
        })

        $.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", {
            success: function (data) {
                const cocktails = data.drinks;
                let html = ``;
                for (let cocktail of cocktails) {
                    html += `<article>
                    <h2>${cocktail.strDrink}</h2>
                    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strTags}">
                    <p> ${cocktail.strInstructions}</p>
                </article>`
                }
                console.log("ok")
                $("#resulcoc").html(html);
            },
            error: function () {
                // attend que le réseau retourne une réponse en erreur
                console.log("erreur");
            },
            complete: function () {
                // attend que le réseau retourne une réponse quelquelsoit
            }


        }

        )
    })
})