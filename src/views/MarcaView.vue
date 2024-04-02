<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcasApi from "@/api/marcas";
const marcasApi = new MarcasApi();

const defaultMarca = { id: null, nome: "", nacionalidade: "" || null };
const marcas = ref([]);
const marca = reactive({ ...defaultMarca });

onMounted(async () => {
  marcas.value = await marcasApi.buscarTodasAsMarcas();
});

function limpar() {
  Object.assign(marca, { ...defaultMarca });
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca);
  } else {
    await marcasApi.adicionarMarca(marca);
  }
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar);
}

async function excluir(id) {
  await marcasApi.excluirMarca(id);
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}
</script>

<template>
  <h1>Marcas</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="marca.nome" placeholder="Nome" />
    <input type="text" v-model="marca.nacionalidade" placeholder="Nacionalidade" />

    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="marca in marcas" :key="marca.id">
      <span @click="editar(editora)">
        ({{ marca.id }}) - {{ marca.nome }} - {{ marca.nacionalidade }} -
      </span>
      <button @click="excluir(marca.id)">X</button>
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