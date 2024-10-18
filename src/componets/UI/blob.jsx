export default function blob({ fillColor, shadowColor }) {
	return (
		<svg
			className="absolute "
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="500"
			zoomAndPan="magnify"
			viewBox="0 0 375 225"
			height="300"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
		>
			<defs>
				<filter x="0%" y="0%" width="100%" height="100%" id="bb7ca8a73d">
					<feColorMatrix
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
						color-interpolation-filters="sRGB"
					/>
				</filter>
				<mask id="569b1d9498">
					<g filter="url(#bb7ca8a73d)">
						<rect
							x="-37.5"
							width="450"
							fill="#000000"
							y="-22.5"
							height="270"
							fill-opacity="0.2"
						/>
					</g>
				</mask>
				<clipPath id="cbe6268245">
					<path
						d="M 0 2 L 375 2 L 375 185 L 0 185 Z M 0 2 "
						clip-rule="nonzero"
					/>
				</clipPath>
				<clipPath id="2857deefc1">
					<path
						d="M -39.65625 426.980469 L -47.242188 8.546875 L 394.433594 0.539062 L 402.023438 418.972656 Z M -39.65625 426.980469 "
						clip-rule="nonzero"
					/>
				</clipPath>
				<clipPath id="1c0b63db39">
					<path
						d="M -39.65625 426.980469 L -47.242188 8.546875 L 394.433594 0.539062 L 402.023438 418.972656 Z M -39.65625 426.980469 "
						clip-rule="nonzero"
					/>
				</clipPath>
				<clipPath id="647c16d5ab">
					<rect x="0" width="375" y="0" height="185" />
				</clipPath>
				<clipPath id="93597c16ca">
					<path
						d="M 0 47 L 375 47 L 375 225 L 0 225 Z M 0 47 "
						clip-rule="nonzero"
					/>
				</clipPath>
				<clipPath id="869fc9f7ac">
					<path
						d="M -46.898438 471.21875 L -54.488281 52.789062 L 387.191406 44.777344 L 394.777344 463.210938 Z M -46.898438 471.21875 "
						clip-rule="nonzero"
					/>
				</clipPath>
				<clipPath id="42a7befd3d">
					<path
						d="M -46.898438 471.21875 L -54.488281 52.789062 L 387.191406 44.777344 L 394.777344 463.210938 Z M -46.898438 471.21875 "
						clip-rule="nonzero"
					/>
				</clipPath>
			</defs>
			<g mask="url(#569b1d9498)">
				<g transform="matrix(1, 0, 0, 1, 0, 40)">
					<g clip-path="url(#647c16d5ab)">
						<g clip-path="url(#cbe6268245)">
							<g clip-path="url(#2857deefc1)">
								<g clip-path="url(#1c0b63db39)">
									<path
										fill="#4c5454"
										d="M 396.339844 117.648438 C 396.347656 118.40625 396.359375 119.167969 396.375 119.925781 C 396.4375 123.238281 396.5 126.550781 396.5625 129.863281 C 396.648438 132.984375 396.03125 136.035156 395.4375 139.0625 C 393.988281 146.449219 392.167969 153.75 389.777344 160.894531 C 388.167969 165.699219 386.3125 170.410156 384.375 175.085938 C 379.984375 185.671875 374.980469 196 370.945312 206.730469 C 368.355469 213.613281 366.433594 220.671875 365.5 227.992188 C 365.054688 231.503906 364.679688 235.007812 364.515625 238.546875 C 364.421875 240.632812 364.207031 242.71875 364.378906 244.796875 C 364.695312 248.695312 365.03125 252.59375 365.558594 256.476562 C 366.167969 260.984375 366.964844 265.449219 367.820312 269.910156 C 368.527344 273.574219 369.453125 277.1875 370.445312 280.773438 C 372.265625 287.355469 374.375 293.863281 376.808594 300.25 C 379.679688 307.765625 382.195312 315.382812 384.128906 323.191406 C 385.160156 327.367188 385.796875 331.589844 386.253906 335.875 C 386.828125 341.25 386.832031 346.632812 386.824219 352.007812 C 386.8125 359.160156 385.375 366.0625 382.492188 372.644531 C 381.296875 375.371094 379.953125 378.019531 378.554688 380.648438 C 377.207031 383.1875 375.390625 385.378906 373.605469 387.589844 C 371.855469 389.753906 369.996094 391.835938 368.058594 393.84375 C 363.847656 398.203125 359.019531 401.78125 353.902344 404.953125 C 345.789062 409.980469 337.089844 413.789062 328.03125 416.738281 C 323.585938 418.183594 319.007812 419.132812 314.335938 419.65625 C 312.761719 419.835938 311.195312 420 309.617188 420.078125 C 307.210938 419.914062 304.84375 420.324219 302.464844 420.558594 C 299.75 420.828125 297.0625 420.015625 294.351562 420.355469 C 290.546875 420.25 286.804688 419.632812 283.066406 418.996094 C 278.515625 418.226562 273.980469 417.386719 269.539062 416.0625 C 265.34375 414.8125 261.246094 413.308594 257.21875 411.613281 C 253.363281 409.992188 249.511719 408.34375 245.753906 406.511719 C 238.117188 402.789062 230.597656 398.84375 223.179688 394.699219 C 216.429688 390.925781 209.578125 387.34375 202.824219 383.578125 C 196.894531 380.269531 190.84375 377.203125 184.660156 374.410156 C 176.738281 370.832031 168.65625 367.699219 160.117188 365.875 C 155.726562 364.9375 151.304688 364.292969 146.820312 363.898438 C 143.449219 363.601562 140.089844 363.617188 136.753906 363.871094 C 133.171875 364.148438 129.578125 364.390625 126.015625 365.011719 C 122.410156 365.644531 118.75 365.964844 115.121094 366.484375 C 111.933594 366.9375 108.753906 367.464844 105.574219 367.976562 C 101.707031 368.605469 97.847656 369.257812 93.984375 369.886719 C 90.679688 370.425781 87.378906 370.984375 84.070312 371.476562 C 81.570312 371.851562 79.066406 372.269531 76.550781 372.433594 C 71.117188 372.800781 65.703125 373.53125 60.253906 373.5 C 48.652344 373.4375 37.304688 371.839844 26.445312 367.523438 C 20.714844 365.246094 15.277344 362.386719 9.988281 359.226562 C 5.136719 356.328125 0.605469 353.015625 -3.589844 349.207031 C -8.957031 344.332031 -13.609375 338.863281 -17.980469 333.101562 C -24.128906 324.992188 -28.46875 315.917969 -32.246094 306.5625 C -35.164062 299.34375 -37.828125 292.019531 -39.691406 284.441406 C -40.578125 280.824219 -41.296875 277.175781 -41.722656 273.460938 C -42.253906 268.863281 -42.597656 264.269531 -42.675781 259.644531 C -42.738281 255.84375 -42.425781 252.066406 -42.210938 248.277344 C -42.023438 244.988281 -41.585938 241.742188 -41.164062 238.484375 C -40.667969 234.644531 -39.667969 230.917969 -38.476562 227.25 C -36.785156 222.050781 -34.554688 217.078125 -32.066406 212.222656 C -29.867188 207.9375 -27.503906 203.742188 -25.296875 199.460938 C -23.234375 195.460938 -21.441406 191.328125 -19.558594 187.238281 C -16.476562 180.539062 -14.304688 173.539062 -12.316406 166.460938 C -10.773438 160.964844 -9.957031 155.335938 -8.988281 149.738281 C -8.550781 147.21875 -8.203125 144.59375 -8.90625 142.003906 C -9.035156 141.527344 -8.980469 140.996094 -8.992188 140.488281 C -9.0625 137.1875 -9.113281 133.890625 -9.199219 130.589844 C -9.308594 126.15625 -9 121.746094 -8.773438 117.320312 C -8.597656 113.910156 -8.355469 110.5 -8.023438 107.113281 C -7.5625 102.398438 -6.617188 97.746094 -5.425781 93.152344 C -3.941406 87.4375 -2.152344 81.820312 0.363281 76.484375 C 3.222656 70.40625 6.355469 64.453125 10.429688 59.074219 C 15.203125 52.777344 21.347656 48.234375 28.550781 45.011719 C 32.914062 43.058594 37.386719 41.492188 42.105469 40.804688 C 46.550781 40.148438 51.023438 39.992188 55.546875 40.316406 C 63.238281 40.875 70.402344 43.316406 77.558594 45.886719 C 85.4375 48.71875 93.488281 50.945312 101.726562 52.40625 C 104.699219 52.933594 107.734375 53.277344 110.792969 53.175781 C 114.40625 53.054688 118.03125 53.105469 121.644531 52.917969 C 124.734375 52.757812 127.792969 52.246094 130.859375 51.800781 C 134.988281 51.199219 139.082031 50.402344 143.15625 49.527344 C 148.417969 48.398438 153.664062 47.164062 158.6875 45.226562 C 165.125 42.742188 171.503906 40.089844 177.878906 37.445312 C 180.449219 36.375 182.984375 35.195312 185.476562 33.953125 C 190.136719 31.636719 194.757812 29.253906 199.378906 26.871094 C 204.734375 24.109375 210.039062 21.257812 215.421875 18.550781 C 222.269531 15.109375 229.101562 11.613281 236.386719 9.132812 C 242.621094 7.011719 248.945312 5.175781 255.457031 4.15625 C 259.636719 3.503906 263.859375 3.015625 268.117188 3.042969 C 271.171875 2.988281 274.230469 2.929688 277.285156 2.878906 C 288.941406 2.894531 299.726562 6.109375 309.917969 11.636719 C 316.023438 14.953125 321.445312 19.167969 326.65625 23.714844 C 331.480469 27.925781 336.308594 32.125 340.757812 36.726562 C 344.15625 40.234375 347.605469 43.6875 351.203125 46.972656 C 355.882812 51.242188 360.648438 55.414062 365.203125 59.816406 C 369.535156 64.003906 373.507812 68.496094 377.246094 73.21875 C 381.027344 77.992188 384.542969 82.941406 387.445312 88.292969 C 391.390625 95.570312 394.25 103.238281 395.507812 111.464844 C 395.828125 113.523438 396.148438 115.578125 396.339844 117.648438 Z M 396.339844 117.648438 "
										fill-opacity="1"
										fill-rule="nonzero"
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
			<g clip-path="url(#93597c16ca)">
				<g clip-path="url(#869fc9f7ac)">
					<g clip-path="url(#42a7befd3d)">
						<path
							fill="#ffffff"
							d="M 389.09375 161.886719 C 389.105469 162.648438 389.117188 163.40625 389.128906 164.167969 C 389.191406 167.476562 389.253906 170.789062 389.320312 174.101562 C 389.402344 177.222656 388.785156 180.277344 388.191406 183.300781 C 386.742188 190.6875 384.921875 197.992188 382.53125 205.136719 C 380.925781 209.9375 379.070312 214.648438 377.128906 219.328125 C 372.738281 229.910156 367.734375 240.238281 363.699219 250.96875 C 361.109375 257.851562 359.1875 264.910156 358.253906 272.230469 C 357.808594 275.742188 357.433594 279.246094 357.273438 282.785156 C 357.175781 284.871094 356.960938 286.960938 357.132812 289.035156 C 357.453125 292.933594 357.785156 296.832031 358.3125 300.714844 C 358.921875 305.222656 359.71875 309.691406 360.578125 314.152344 C 361.28125 317.816406 362.207031 321.425781 363.199219 325.011719 C 365.023438 331.597656 367.128906 338.105469 369.566406 344.488281 C 372.433594 352.003906 374.953125 359.621094 376.882812 367.429688 C 377.914062 371.605469 378.554688 375.832031 379.007812 380.113281 C 379.582031 385.488281 379.585938 390.871094 379.578125 396.25 C 379.570312 403.398438 378.132812 410.300781 375.246094 416.882812 C 374.050781 419.609375 372.710938 422.257812 371.3125 424.886719 C 369.960938 427.425781 368.144531 429.617188 366.359375 431.828125 C 364.609375 433.996094 362.753906 436.074219 360.8125 438.082031 C 356.601562 442.441406 351.777344 446.019531 346.65625 449.191406 C 338.542969 454.21875 329.847656 458.027344 320.785156 460.976562 C 316.339844 462.421875 311.761719 463.375 307.09375 463.898438 C 305.519531 464.074219 303.949219 464.242188 302.375 464.316406 C 299.96875 464.152344 297.601562 464.566406 295.21875 464.800781 C 292.503906 465.066406 289.820312 464.253906 287.105469 464.59375 C 283.300781 464.488281 279.558594 463.871094 275.820312 463.238281 C 271.269531 462.464844 266.734375 461.628906 262.292969 460.304688 C 258.101562 459.050781 254 457.546875 249.972656 455.855469 C 246.117188 454.234375 242.265625 452.582031 238.507812 450.75 C 230.871094 447.03125 223.351562 443.082031 215.933594 438.9375 C 209.1875 435.167969 202.332031 431.585938 195.582031 427.820312 C 189.648438 424.511719 183.597656 421.441406 177.414062 418.648438 C 169.492188 415.074219 161.410156 411.9375 152.875 410.117188 C 148.480469 409.179688 144.058594 408.53125 139.574219 408.136719 C 136.203125 407.839844 132.84375 407.855469 129.511719 408.113281 C 125.929688 408.386719 122.332031 408.628906 118.769531 409.253906 C 115.164062 409.882812 111.503906 410.203125 107.875 410.722656 C 104.6875 411.175781 101.511719 411.703125 98.328125 412.21875 C 94.464844 412.84375 90.601562 413.496094 86.738281 414.128906 C 83.4375 414.667969 80.132812 415.222656 76.824219 415.71875 C 74.324219 416.089844 71.820312 416.507812 69.304688 416.675781 C 63.875 417.039062 58.457031 417.769531 53.011719 417.742188 C 41.40625 417.675781 30.0625 416.078125 19.199219 411.761719 C 13.46875 409.488281 8.03125 406.625 2.746094 403.464844 C -2.105469 400.570312 -6.640625 397.253906 -10.835938 393.449219 C -16.203125 388.574219 -20.855469 383.101562 -25.222656 377.339844 C -31.375 369.230469 -35.714844 360.15625 -39.492188 350.800781 C -42.410156 343.585938 -45.074219 336.257812 -46.933594 328.679688 C -47.824219 325.0625 -48.542969 321.414062 -48.96875 317.699219 C -49.496094 313.105469 -49.84375 308.507812 -49.917969 303.882812 C -49.984375 300.082031 -49.667969 296.304688 -49.453125 292.519531 C -49.269531 289.226562 -48.832031 285.980469 -48.410156 282.726562 C -47.910156 278.882812 -46.914062 275.160156 -45.71875 271.488281 C -44.027344 266.292969 -41.800781 261.316406 -39.308594 256.464844 C -37.109375 252.179688 -34.75 247.980469 -32.542969 243.703125 C -30.476562 239.703125 -28.6875 235.570312 -26.804688 231.480469 C -23.722656 224.777344 -21.550781 217.777344 -19.5625 210.699219 C -18.015625 205.203125 -17.203125 199.574219 -16.230469 193.976562 C -15.796875 191.457031 -15.449219 188.832031 -16.148438 186.242188 C -16.28125 185.765625 -16.222656 185.234375 -16.234375 184.726562 C -16.308594 181.425781 -16.359375 178.128906 -16.441406 174.832031 C -16.554688 170.398438 -16.246094 165.984375 -16.015625 161.558594 C -15.839844 158.148438 -15.597656 154.742188 -15.265625 151.351562 C -14.804688 146.636719 -13.863281 141.984375 -12.671875 137.390625 C -11.1875 131.679688 -9.398438 126.058594 -6.882812 120.726562 C -4.019531 114.648438 -0.890625 108.691406 3.1875 103.3125 C 7.957031 97.019531 14.101562 92.472656 21.308594 89.25 C 25.671875 87.296875 30.144531 85.734375 34.859375 85.042969 C 39.304688 84.390625 43.78125 84.230469 48.300781 84.558594 C 55.992188 85.113281 63.160156 87.554688 70.3125 90.125 C 78.191406 92.960938 86.246094 95.183594 94.484375 96.648438 C 97.453125 97.175781 100.492188 97.519531 103.546875 97.414062 C 107.164062 97.292969 110.785156 97.347656 114.398438 97.15625 C 117.488281 96.996094 120.550781 96.484375 123.617188 96.039062 C 127.746094 95.4375 131.835938 94.640625 135.910156 93.765625 C 141.171875 92.636719 146.417969 91.402344 151.441406 89.464844 C 157.882812 86.980469 164.257812 84.328125 170.632812 81.683594 C 173.207031 80.617188 175.738281 79.433594 178.234375 78.195312 C 182.890625 75.878906 187.511719 73.496094 192.132812 71.109375 C 197.488281 68.347656 202.796875 65.496094 208.175781 62.792969 C 215.027344 59.347656 221.855469 55.851562 229.140625 53.371094 C 235.375 51.25 241.699219 49.417969 248.210938 48.394531 C 252.394531 47.742188 256.617188 47.253906 260.871094 47.28125 C 263.929688 47.226562 266.984375 47.171875 270.039062 47.117188 C 281.695312 47.132812 292.480469 50.347656 302.671875 55.878906 C 308.78125 59.191406 314.199219 63.40625 319.410156 67.957031 C 324.234375 72.164062 329.0625 76.367188 333.511719 80.964844 C 336.910156 84.472656 340.359375 87.925781 343.960938 91.210938 C 348.636719 95.480469 353.402344 99.652344 357.960938 104.054688 C 362.289062 108.242188 366.265625 112.734375 370 117.457031 C 373.78125 122.234375 377.300781 127.179688 380.199219 132.53125 C 384.144531 139.808594 387.003906 147.476562 388.261719 155.703125 C 388.582031 157.761719 388.902344 159.816406 389.09375 161.886719 Z M 389.09375 161.886719 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}
