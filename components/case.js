import React from "react";

export default class Case extends React.Component {
	render() {
		return (
			<div>
				<div style={{ backgroundColor: this.props.background }} className="flex items-center justify-center h-96 xl:h-test">
					<img className={ this.props.size } src={ this.props.imagePath }/>
				</div>
				<p className="mt-4 text-lg xl:text-xl pr-16 text-black">
					{ this.props.text }
				</p>
			</div>
		)
	}
}
