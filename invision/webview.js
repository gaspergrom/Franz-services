const path = require('path');

module.exports = (Franz) => {
  function getMessages() {
    let direct =  document.querySelector('.notification-bell__mentions___1v3d_').innerHTML;
    let indirect = 0;
    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}