const path = require('path');

module.exports = (Franz) => {
  function getMessages() {
    let direct = document.querySelectorAll("b.badge span").innerHTML;
    let indirect = 0;
    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}