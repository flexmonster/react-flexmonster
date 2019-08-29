import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import "flexmonster/flexmonster.min.css";
import Flexmonster from "flexmonster";

export class Pivot extends React.Component {
	
	componentDidMount() {
		this.flexmonster = new Flexmonster({
			...this.props,
			container: ReactDOM.findDOMNode(this)
		});
	}
	
	shouldComponentUpdate() {
		return false;
	}
	
	componentWillUnmount() {
		this.flexmonster.dispose();
	}

	render() {
		return <div>Pivot</div>;
	}
}

Pivot.propTypes = {
	afterchartdraw: React.PropTypes.func,
	aftergriddraw: React.PropTypes.func,
	beforegriddraw: React.PropTypes.func,
	beforetoolbarcreated: React.PropTypes.func,
	cellclick: React.PropTypes.func,
	celldoubleclick: React.PropTypes.func,
	componentFolder: React.PropTypes.string,
	customizeCell: React.PropTypes.func,
	customizeContextMenu: React.PropTypes.func,
	datachanged: React.PropTypes.func,
	dataerror: React.PropTypes.func,
	datafilecancelled: React.PropTypes.func,
	dataloaded: React.PropTypes.func,
	fieldslistclose: React.PropTypes.func,
	fieldslistopen: React.PropTypes.func,
	filterclose: React.PropTypes.func,
	filteropen: React.PropTypes.func,
	fullscreen: React.PropTypes.func,
	global: React.PropTypes.object,
	height: [React.PropTypes.string, React.PropTypes.number],
	licenseKey: React.PropTypes.string,
	loadingdata: React.PropTypes.func,
	loadinglocalization: React.PropTypes.func,
	loadingolapstructure: React.PropTypes.func,
	loadingreportfile: React.PropTypes.func,
	localizationerror: React.PropTypes.func,
	localizationloaded: React.PropTypes.func,
	olapstructureerror: React.PropTypes.func,
	olapstructureloaded: React.PropTypes.func,
	openingreportfile: React.PropTypes.func,
	querycomplete: React.PropTypes.func,
	queryerror: React.PropTypes.func,
	ready: React.PropTypes.func,
	report: [React.PropTypes.string, React.PropTypes.object],
	reportchange: React.PropTypes.func,
	reportcomplete: React.PropTypes.func,
	reportfilecancelled: React.PropTypes.func,
	reportfileerror: React.PropTypes.func,
	reportfileloaded: React.PropTypes.func,
	runningquery: React.PropTypes.func,
	toolbar: React.PropTypes.bool,
	update: React.PropTypes.func,
	width: [React.PropTypes.string, React.PropTypes.number],
}

export default Pivot;