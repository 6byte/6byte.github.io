

myself.forEach(e => {
	$('#myself').append(
		`
<div class="col-xl-6">
	<div class="row">
		<div class=" col-12 col-md-6 col-xl-6 col-sm-6   text-center">
			<p >
				${e.svg}
			</p>
		</div>
		<div class="col-12 col-md-6 col-xl-6 col-sm-6 ">
			<div class="card-body ">
				<h5 class="card-title text-center">${e.title}</h5>
				<p class="card-text">
					${e.content}
				</p>
			</div>
		</div>
	</div>
</div>
`
	)

})
mInfo.forEach(e => {
	$('.m-info').append(
		`
		<p class="card-text text-center person-info">
			<span>
				${e.svg}${e.title}
			</span>
			<span>
				${e.content}
			</span>
		</p>
		`
	)
})

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
