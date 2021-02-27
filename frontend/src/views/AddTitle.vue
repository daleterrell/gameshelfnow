<template>
  <div>
    <h1 class="title">Add Game</h1>

    <div class="field">
      <label class="label" for="gameTitle">Game Title</label>
      <div class="controller">
        <input
          id="gameTitle"
          class="input"
          type="text"
          v-model="game.gameTitle"
          placeholder="Game Title"
        />
      </div>
    </div>
    <div class="field">
      <label class="label" for="gameDesigner">Designer</label>
      <div class="controller">
        <input
          id="Designer"
          class="input"
          type="text"
          v-model="game.Designer"
          placeholder="Designer"
        />
      </div>
    </div>
    <div class="field">
      <label class="label" for="gamePublisher">Publisher</label>
      <div class="controller">
        <input
          id="Publisher"
          class="input"
          type="text"
          v-model="game.Publisher"
          placeholder="Publisher"
        />
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



