import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld'; // @ is an alias to /src
import RendererFor from './home.html?style=./home.scss';

@RendererFor
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
