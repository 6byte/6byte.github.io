technology.forEach(e => {
	$('#technology').append(
		`
		<button type="button" class="btn  btn-secondary btn-sm my-2" disabled>
			<span>
				${e.language}
			</span>
			<span class="badge badge-light ">
				${e.level}
			</span>
		</button>
		`
	)
})

contact.forEach(e => {
	$('#contact').append(
		`
		<div class="card-body p-1 " id="contact">
			<div class="contact">
				<span>
					${e.svg}
					${e.title}
				</span>
				<span class="float-right">
					${e.content}
				</span>
			</div>
		</div>
		`
	)
})

cardList.forEach(e => {
	$('#cardList').append(
		`
		<div class="col ">
			<div class="card no-bgcolor my-2 border-0  ">
				<span class="text-center">
					${e.svg}
				</span>
				<div class="card-body">
					<h5 class="card-title text-center">${e.titleSvg}${e.language}</h5>
					<p class="card-text">
						${e.introduce}
					</p>
				</div>
			</div>
		</div>
		`
	)
})

// 模态框
