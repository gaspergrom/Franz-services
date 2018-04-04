const path = require('path');

module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = document.querySelectorAll("a.has-newNotifications").length;
    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}