const dados = document.getElementById('dados');

async function apiGet(url, apiTitle, db=false) {
    const inicio = performance.now();
    try{
        const divMain = document.createElement("div");
        divMain.className = "container-data-pattern";
        const tituloAPI = document.createElement("h5");
        tituloAPI.textContent = apiTitle;
        const lista = document.createElement("ul");
        const divStatus = document.createElement("div");

        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            const fim = performance.now();
            divMain.textContent = "";
            const statusMessage = document.createElement("span");
            
            divStatus.appendChild(statusMessage);
            divMain.appendChild(tituloAPI);
            divMain.appendChild(divStatus);
            divMain.appendChild(lista);
            console.log(data.dados.length);
            
            if(data.dados.length > 1){
                if(!db){
                    data.dados.forEach(element => {
                            const dataElement = document.createElement("ul");
                            dataElement.textContent = element;
                            lista.appendChild(dataElement);
                    });
                }else{
                    data.dados.forEach(element => {
                            const dataElement = document.createElement("ul");
                            dataElement.textContent = `Recurso: ${element.nome_do_recurso} - ${element.quantidade}`;
                            lista.appendChild(dataElement);
                    });
                }
            
            const ping = Math.round(fim - inicio);
            statusMessage.textContent = `Online - Ping: ${ping}`;

        }else{

        }
        }else if(data.dados.length == 1){
            const dataConverted = document.createElement("span");
            dataConverted.textContent = data.dados;
            divMain.appendChild(dataConverted);
        }

        dados.appendChild(divMain);
        
    }   
    catch{
        dados.textContent = "Erro ao fazer requisição, verifique a estrutura!";
        console.log("erro do catch do try");
    }
};


apiGet('api/dados', 'API - usuários - localhost:8000/api/dados');
apiGet('api/data', 'API - data atual no servidor - localhost:8000/api/data');
apiGet('api/recursos', 'API - recursos do game - localhost:8000/api/recursos', true);

apiGet('api/adicionar-recurso', 'API - adicionar recurso no game - localhost:8000/api/adicionar-recurso');