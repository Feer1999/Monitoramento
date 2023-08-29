// Importar o Bootstrap e outras bibliotecas necessárias
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const userDataArray = [];

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const downloadJSONBtn = document.getElementById('download-json');
    const downloadTXTBtn = document.getElementById('download-txt');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userData = {
            nome: document.getElementById('nome').value,
            matricula: document.getElementById('matricula').value,
            sexo: document.querySelector('input[name="sexo"]:checked').value,
            funcao: document.getElementById('funcao').value,
            rg: document.getElementById('rg').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            rua: document.getElementById('rua').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            numero: document.getElementById('numero').value,
            dataNascimento: document.getElementById('dataNascimento').value,
        };

        userDataArray.push(userData);
        form.reset();
    });

    downloadJSONBtn.addEventListener('click', function () {
        const jsonContent = JSON.stringify(userDataArray, null, 2);
        downloadFile('userData.json', jsonContent);
    });

    downloadTXTBtn.addEventListener('click', function () {
        const txtContent = userDataArray.map(userData => Object.values(userData).join('\t')).join('\n');
        downloadFile('userData.txt', txtContent);
    });

    document.getElementById('cep').addEventListener('change', async function () {
        const cep = this.value;
        try {
            const response = await axios.get(`viacep.com.br/ws/${cep}/json/`);
            const { logradouro, bairro, localidade } = response.data;
            document.getElementById('rua').value = logradouro;
            document.getElementById('bairro').value = bairro;
            document.getElementById('cidade').value = localidade;
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    });
});

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
