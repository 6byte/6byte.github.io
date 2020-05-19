
mInfo.forEach(e=>{
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

technology.forEach(e=>{
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

contact.forEach(e=>{
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