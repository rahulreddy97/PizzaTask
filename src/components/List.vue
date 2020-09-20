<template>
  <div class="list" @dragover.prevent>
    
    <div class="title">
      {{ title }}
    </div>
    <div class="cards" v-if="cardCount > 0">
      <card v-for="({ body,number,total }, index) in cards" :body="body" :number="number" :total="total" :index="index" :key="({body,number,total}, index)"></card>
    </div>
    <card-draft></card-draft>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from './Card';
import CardDraft from './CardDraft';


const List = {
  props: ['title', 'cards', 'index'],
  components: {
    Card,
    CardDraft
  },
  computed: {
    cardCount() {
      return this.cards.length;
    }
  }
}

export default List;
</script>

<style lang="scss" scoped>
.list {
  margin: 0 10px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 290px;
  width: 290px;
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 15px;

  .close-button {
    position: absolute;
    top: 6px;
    right: 14px;
    font-size: 28px;
    cursor: pointer;
  }

  .close-button:hover {
    opacity: 0.8;
  }

  .title {
    margin: 5px 0;
    font-size: 24px;
    width: calc(100% - 20px);
    word-break: break-word;
  }
 
  .cards {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
