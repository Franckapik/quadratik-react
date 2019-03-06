import React, {Component} from 'react';
import homeStore from './homeStore'

class Footer extends Component {
  render() {
    return (<footer>
      <span className="cursor" onClick={() => {
          homeStore.width = '100%';
          homeStore.content = 'Cgv';
        }}>Conditions générales de ventes</span>
      <span className="cursor" onClick={() => {
          homeStore.width = '100%';
          homeStore.content = 'Mentions';
        }}>Mentions légales</span>
      <span className="mobile_hide" >®Quadratik.fr 2019</span>
    </footer>)

  }
}

export default Footer;
