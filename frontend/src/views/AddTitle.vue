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
          v-model="game.Title"
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
          v-model="boardgame.Designer"
          placeholder="Designer"
        />
      </div>
    </div>
    <div class="field">
      <label class="label" for="boardegamePublisher">Publisher</label>
      <div class="controller">
        <input
          id="Publisher"
          class="input"
          type="text"
          v-model="boardgame.Publisher"
          placeholder="Publisher"
        />
      </div>
    <div class="field">
        <label class="label">Designer</label>
            <div class="select">
                <select v-model="boardgame.designer.id">      
                    <option v-for="designer in designers" :value="designer.id"
                    :key="designer.id"
                    {{designer.firstName}} {{designer.lastName}}
                    </option>
                </select>
            </div>
    <div class="field">
        <label class="label">Publisher</label>
            <div class="select">
                <select v-model="boardgame.publisher.id">      
                    <option v-for="publisher in publishers" :value="publisher.id"
                    :key="publisher.id"
                    {{publisher.name}} 
                    </option>
                </select>
            </div>
    <div class="field">
        <label class="label">Title</label>
            <div class="select">
                <select v-model="boardgame.title.id">      
                    <option v-for="title in title" :value="title.id"
                    :key="title.id
                    {{title.title}
                    </option>
                </select>
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
  methods: {
    async getDesigner() {
        const {data} = await this.$http.get('http://localhost:8080/api/designer');
        console.log('getDesigner() data', data)
        return data;
      }
  },
   methods: {
    async getPublisher() {
        const {data} = await this.$http.get('http://localhost:8080/api/publisher');
        console.log('getPublisher() data', data)
        return data;
      }
  },
   methods: {
    async getTitle() {
        const {data} = await this.$http.get('http://localhost:8080/api/title');
        console.log('getTitle() data', data)
        return data;
      }
  },
  async mounted() {
      this.designers = await this.getDesigner()
      this.publishers = await this.getPublisher()
      this.title = await this.getTitle()
  }
};
</script>



