

let compareBtn = document.createElement('button');
compareBtn.className = 'btn btn-default';
compareBtn.innerHTML = '<i class="fa fa-stack-overflow with-text"></i> Compare';

compareBtn.onclick = function() {
	let branch = document.querySelector('.branch-name');
	let commit = document.querySelector('#recent-deployments .panel-body table tr:first-child td span[ng-if="project.provider == \'github\'"] a');
	if (branch && commit) {
		let link = commit.href.replace(/commit/,'compare') + '...' + branch.innerText;
		window.open(link, '_blank');
	}
};


let deployBtn = document.querySelector('button[ng-click="showDeployProjectModal()"]');

if (deployBtn) {
	deployBtn.insertAdjacentElement('beforebegin', compareBtn)
}

