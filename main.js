function parseMessages() {
  document.querySelectorAll("[data-peer = '291528198']").forEach(e => e.parentNode.removeChild(e));
}

parseMessages();

var targetNode = document.getElementsByTagName('body')[0];

var config = { attributes: true, childList: true, subtree: true };
var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      parseMessages();
    }
  }
};

// Observe
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
