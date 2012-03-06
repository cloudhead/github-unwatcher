
(function(){
    function makelink(url) {
        var token = $('meta[name="csrf-token"]')[0].content;
        var a = document.createElement('a');

        a.href = url;
        a.style.display = "inline-block";
        a.style.marginTop = "-27px";
        a.style.fontSize = "12px";
        a.style.padding = "5px 8px";
        a.style.float = "right";
        a.style.height = "12px";
        a.style.lineHeight = "12px";
        a.className = "minibutton btn-watch watch-button js-toggler-target";
        a.innerHTML = 'Unwatch';
        a.onclick = function (){
            jQuery(a.parentNode).fadeOut();
            jQuery.ajax(url, {type: "post", headers: {"X-CSRF-Token": token}});
            return false;
        };
        return a;
    }

    function geturl(li) {
        var repo = li.querySelector('.repo').innerHTML;
        var user = li.querySelector('.owner').innerHTML;
        var url = ["https://github.com", user, repo, "toggle_watch"].join('/');
        return url;
    }

    Array.prototype.slice.call($('.repo_list li')).forEach(function(li) {
        li.appendChild(makelink(geturl(li)));
    });
})();
