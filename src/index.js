import PropTypes from 'prop-types';
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Flexmonster from "flexmonster";

function PivotHooks(props) {
	const flexmonsterRef = useRef()

	useEffect(() => {
		const flexmonster = new Flexmonster({
			...props,
			container: flexmonsterRef.current
		})

		return () => flexmonster.dispose()
	}, [])

	return <div ref={flexmonsterRef}>Pivot</div>
}

PivotHooks.propTypes = {
	afterchartdraw: PropTypes.func,
	aftergriddraw: PropTypes.func,
	beforegriddraw: PropTypes.func,
	beforetoolbarcreated: PropTypes.func,
	cellclick: PropTypes.func,
	celldoubleclick: PropTypes.func,
	componentFolder: PropTypes.string,
	customizeCell: PropTypes.func,
	customizeContextMenu: PropTypes.func,
	datachanged: PropTypes.func,
	dataerror: PropTypes.func,
	datafilecancelled: PropTypes.func,
	dataloaded: PropTypes.func,
	fieldslistclose: PropTypes.func,
	fieldslistopen: PropTypes.func,
	filterclose: PropTypes.func,
	filteropen: PropTypes.func,
	fullscreen: PropTypes.func,
	global: PropTypes.object,
	height: [PropTypes.string, PropTypes.number],
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
	report: [PropTypes.string, PropTypes.object],
	reportchange: PropTypes.func,
	reportcomplete: PropTypes.func,
	reportfilecancelled: PropTypes.func,
	reportfileerror: PropTypes.func,
	reportfileloaded: PropTypes.func,
	runningquery: PropTypes.func,
	toolbar: PropTypes.bool,
	update: PropTypes.func,
	width: [PropTypes.string, PropTypes.number],
}

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
	afterchartdraw: PropTypes.func,
	aftergriddraw: PropTypes.func,
	beforegriddraw: PropTypes.func,
	beforetoolbarcreated: PropTypes.func,
	cellclick: PropTypes.func,
	celldoubleclick: PropTypes.func,
	componentFolder: PropTypes.string,
	customizeCell: PropTypes.func,
	customizeContextMenu: PropTypes.func,
	datachanged: PropTypes.func,
	dataerror: PropTypes.func,
	datafilecancelled: PropTypes.func,
	dataloaded: PropTypes.func,
	fieldslistclose: PropTypes.func,
	fieldslistopen: PropTypes.func,
	filterclose: PropTypes.func,
	filteropen: PropTypes.func,
	fullscreen: PropTypes.func,
	global: PropTypes.object,
	height: [PropTypes.string, PropTypes.number],
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
	report: [PropTypes.string, PropTypes.object],
	reportchange: PropTypes.func,
	reportcomplete: PropTypes.func,
	reportfilecancelled: PropTypes.func,
	reportfileerror: PropTypes.func,
	reportfileloaded: PropTypes.func,
	runningquery: PropTypes.func,
	toolbar: PropTypes.bool,
	update: PropTypes.func,
	width: [PropTypes.string, PropTypes.number],
}

export default Pivot;