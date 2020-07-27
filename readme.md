# React module for Flexmonster Pivot Table & Charts 
[![Flexmonster Pivot Table & Charts](https://www.flexmonster.com/fm_uploads/2020/06/GitHub_fm.png)](https://flexmonster.com)
Website: www.flexmonster.com

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources fast and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository holds the source code for using [Flexmonster Pivot](https://www.flexmonster.com/) in [React](https://reactjs.org/) applications. 

* [Getting started](#getting-started)
* [Usage](#usage)
* [Sample project](#sample-project)
* [License](#license)
* [Support & feedback](#support-feedback)

## <a name="getting-started"></a>Getting Started ##

If you don’t have React app, you can create it by running in the console:

```bash
npx create-react-app my-app
cd my-app
```

Add Flexmonster React module by running in the console:

```bash
npm i react-flexmonster --save
```

Include `FlexmonsterReact` into `App.js`:

```bash
import * as FlexmonsterReact from 'react-flexmonster';
```

Insert a pivot table into `App.js`:

```bash
class App extends Component {
  render() {
    return (
      <div className="App">
        <FlexmonsterReact.Pivot toolbar={true} 
        componentFolder="https://cdn.flexmonster.com/" width="100%" 
        report="https://cdn.flexmonster.com/reports/report.json"/>
      </div>
    );
  }
}
```

Run your application from the console:

```bash
npm start
```

To see the result open your browser on `http://localhost:3000/`.

Refer to the [Flexmonster integration with React](https://www.flexmonster.com/doc/integration-with-react/) guide for more details.

## <a name="usage"></a>Usage ##

All available attributes for `FlexmonsterReact.Pivot` are equivalent to those which are passed to the `new Flexmonster()` API call. Check out [the full list of available attributes](https://www.flexmonster.com/api/new-flexmonster/).

Here is an example how such attributes can be specified:

```bash
<FlexmonsterReact.Pivot toolbar={true} 
  componentFolder="https://cdn.flexmonster.com/" 
  width="100%" 
  report="https://cdn.flexmonster.com/reports/report.json"/>
```

## <a name="sample-project"></a>Sample project ##

See our [sample React project using the Flexmonster React module](https://github.com/flexmonster/pivot-react).

## <a name="license"></a>License ##

Here is [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/). We have free 30 day trial! 

Flexmonster React module is released as a MIT-licensed (free and open-source) add-on to Flexmonster Pivot.

## <a name="support-feedback"></a>Support & feedback ##

Please share your feedback or ask questions via [Flexmonster Forum](https://www.flexmonster.com/forum/).
