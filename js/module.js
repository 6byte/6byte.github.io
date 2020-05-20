
mInfo.forEach(e => {
	$('.m-info').append(
		`
			<p class="card-text text-center">
				<span>
					${e.svg}
				</span>
				
				<span>
					${e.title}
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
			<div class="card-body p-3 " id="contact">
				<div >
					<span>
						${e.svg}
					</span>
					<span>
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
				<div class="card no-bgcolor text-center my-2  border-0  ">
					<span>
						${e.svg}
					</span>
					<div class="card-body">
						<h5 class="card-title">${e.language}</h5>
						<p class="card-text">
							<span>
								${e.titleSvg}
							</span>
							${e.introduce}
							</p>
					</div>
				</div>
			</div>
		`
	)

})
