import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ 'button', 'revert' ]

  connect() {
    // console.log("Hello from Batch 689")
  }

  disable () {
    this.buttonTarget.innerText = "Opss.."
    this.buttonTarget.setAttribute = "disable"
    this.revertTarget.style = ""
  }

  enable () {
    this.buttonTarget.innerText = "Click Me!"
    this.buttonTarget.removeAttribute = "disable"
    this.revertTarget.style = "display: none"
  }

}


// data-action="hover->controller#nameaction"
