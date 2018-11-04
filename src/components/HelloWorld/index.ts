import { Component, Prop, Vue } from 'vue-property-decorator';
import RendererFor from './helloworld.html?style=./helloworld-screen.scss';

@RendererFor
@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
