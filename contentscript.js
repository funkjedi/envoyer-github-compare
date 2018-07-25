

var compareBtn = document.createElement('button');
compareBtn.className = 'btn btn-default';
compareBtn.innerHTML = '<i class="fa fa-stack-overflow with-text"></i> Compare';

compareBtn.onclick = function() {
	var branch = document.querySelector('.branch-name');
	var commit = document.querySelector('#recent-deployments .panel-body table tr:first-child td span[ng-if="project.provider == \'github\'"] a');
	if (branch && commit) {
		var link = commit.href.replace(/commit/,'compare') + '...' + branch.innerText;
		window.open(link, '_blank');
	}
};


// check inside interval as angular may not have
// initiated yet at the time the extention content script is run
var intervalID = setInterval(function() {
	var deployBtn = document.querySelector('button[ng-click="showDeployProjectModal()"]');
	if (deployBtn) {
		clearInterval(intervalID);
		deployBtn.insertAdjacentElement('beforebegin', compareBtn);
	}
},100)

