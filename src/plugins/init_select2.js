import $ from 'jquery'
import select2 from 'select2'

const menuSelect = () => {
  const options = {
    width: '600px'
  }
  $(document).ready(function() {
      $('.dropdown-menu').select2(options);
  });
}



export { menuSelect }
