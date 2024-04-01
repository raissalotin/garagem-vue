<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios";
const acessoriosApi = new AcessoriosApi();

const defaultAcessorio = { id: null, descricao: "" };
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorio(acessorio);
  } else {
    await acessoriosApi.adicionarAcessorio(acessorio);
  }
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar);
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorio(id);
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}
</script>

<template>
  <h1>Acessorio</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="acessorio.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="acessorio in acessorios" :key="acessorio.id">
      <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.descricao }} -
      </span>
      <button @click="excluir(acessorio.id)">X</button>
    </li>
  </ul>
</template>


<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .form {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  .form button {
    padding: 8px 15px;
    background-color: #28a745; 
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .form button:hover {
    background-color: #218838; 
  }


  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  li span {
    cursor: pointer;
    flex-grow: 1;
  }

  li button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }

  li button:hover {
    background-color: #c82333;
  }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }
</style>
