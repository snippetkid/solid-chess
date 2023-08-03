import { PieceProps } from "../../models/interfaces"
export const King = ({ stroke, fill }: PieceProps) => {
    return (
        <svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 45 45"
		>
			<g
				style={{
					fill: "none",
					"fill-rule": "evenodd",
					stroke: stroke,
                    "stroke-dasharray": "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 4,
                    "stroke-width": "0.6"
				}}
			>
				<path
					d="M 22.5,11.63 L 22.5,6"
					style={{ fill: "none", stroke: stroke, "stroke-linejoin": "miter" }}
				/>
				<path
					d="M 20,8 L 25,8"
					style={{ fill: "none", stroke: stroke, "stroke-linejoin": "miter" }}
				/>
				<path
					d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
					style={{
						fill: fill,
						stroke: stroke,
						"stroke-linecap": "butt",
						"stroke-linejoin": "miter",
					}}
				/>
				<path
					d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37"
					style={{ fill: fill, stroke: stroke }}
				/>
				<path
					d="M 12.5,30 C 18,27 27,27 32.5,30"
					style={{ fill: "none", stroke: stroke }}
				/>
				<path
					d="M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5"
					style={{ fill: "none", stroke: stroke }}
				/>
				<path
					d="M 12.5,37 C 18,34 27,34 32.5,37"
					style={{ fill: "none", stroke: stroke }}
				/>
			</g>
		</svg>
    )
}