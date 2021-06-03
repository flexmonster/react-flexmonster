import PropTypes from 'prop-types';
import React from "react";
import Flexmonster from "flexmonster/flexmonster.es5.full";

export class Pivot extends React.Component {

	constructor(props) {
		super(props);
		// create a ref to store the DOM element	
	    this.DOMNodeRef = React.createRef();
	  }
	
	componentDidMount() {
		const DOMNode = this.DOMNodeRef.current;
		this.flexmonster = new Flexmonster({
			...this.props,
			container: DOMNode
		});
	}
	
	shouldComponentUpdate() {
		return false;
	}
	
	componentWillUnmount() {
		this.flexmonster.dispose();
	}

	render() {
		return <div ref={this.DOMNodeRef}>Pivot</div>;
	}
}

Pivot.propTypes = {
	afterchartdraw: PropTypes.func,
	aftergriddraw: PropTypes.func,
	beforegriddraw: PropTypes.func,
	beforetoolbarcreated: PropTypes.func,
	cellclick: PropTypes.func,
	celldoubleclick: PropTypes.func,
	chartclick: PropTypes.func,
	componentFolder: PropTypes.string,
	customizeAPIRequest: PropTypes.func,
	customizeCell: PropTypes.func,
	customizeChartElement: PropTypes.func,
	customizeContextMenu: PropTypes.func,
	datachanged: PropTypes.func,
	dataerror: PropTypes.func,
	datafilecancelled: PropTypes.func,
	dataloaded: PropTypes.func,
	drillthroughclose: PropTypes.func,
	drillthroughopen: PropTypes.func,
	fieldslistclose: PropTypes.func,
	fieldslistopen: PropTypes.func,
	filterclose: PropTypes.func,
	filteropen: PropTypes.func,
	fullscreen: PropTypes.func,
	global: PropTypes.object,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	licenseKey: PropTypes.string,
	loadingdata: PropTypes.func,
	loadinglocalization: PropTypes.func,
	loadingolapstructure: PropTypes.func,
	loadingreportfile: PropTypes.func,
	localizationerror: PropTypes.func,
	localizationloaded: PropTypes.func,
	olapstructureerror: PropTypes.func,
	olapstructureloaded: PropTypes.func,
	openingreportfile: PropTypes.func,
	querycomplete: PropTypes.func,
	queryerror: PropTypes.func,
	ready: PropTypes.func,
	report: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	reportchange: PropTypes.func,
	reportcomplete: PropTypes.func,
	reportfilecancelled: PropTypes.func,
	reportfileerror: PropTypes.func,
	reportfileloaded: PropTypes.func,
	runningquery: PropTypes.func,
	toolbar: PropTypes.bool,
	unauthorizederror: PropTypes.func,
	update: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	accessibility: PropTypes.object,
}

export default Pivot;