

var compareBtn = document.createElement('button');
compareBtn.className = 'btn btn-default';
compareBtn.innerHTML = '<i class="fa fa-stack-overflow with-text"></i> Compare';

compareBtn.onclick = function() {
	var container = document.querySelector('#recent-deployments .card-body table tr:first-child td:nth-child(3) div');
	if (container) {
		var branch = container.innerText.replace(/^.*\((.*)\).*$/, '$1');
		var commit = container.querySelector('a');
		if (commit) {
			var link = commit.href.replace(/commit/,'compare') + '...' + branch;
			window.open(link, '_blank');
		}
	}
};


// check inside interval as angular may not have
// initiated yet at the time the extention content script is run
var intervalID = setInterval(function() {
	var deployBtn = document.querySelector('#app > div > .section-header button.btn-primary');
	if (deployBtn) {
		clearInterval(intervalID);
		deployBtn.insertAdjacentElement('beforebegin', compareBtn);
	}
},100)

