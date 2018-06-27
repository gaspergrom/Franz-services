const path = require('path');

module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = document.querySelectorAll("#notificationsButton .unreadBadge").length;
    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}