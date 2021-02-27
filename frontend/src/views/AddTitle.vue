<template>
  <div>
    <h1 class="title">Add Game</h1>

    <div class="field">
      <label class="label" for="gameTitle">Game Title</label>
      <div class="controller">
        <input id="gameTitle" class="input" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import { GameShelf } from "../api/GameShelf";
const gameshelfApi = new GameShelfApi();
export default {
  data: () => ({
    title: {
      Title: "",
      Designer: {},
      Publisher: {},
    },
  }),
};
</script>



