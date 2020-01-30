(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(a,e,t){a.exports=t.p+"assets/img/datapackage-m-power-bi.81f4f0c6.gif"},217:function(a,e,t){a.exports=t.p+"assets/img/datapackage-m-excel.81f4f0c6.gif"},260:function(a,e,t){"use strict";t.r(e);var r=t(0),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://github.com/nimblelearn/datapackage-m",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Package M"),r("OutboundLink")],1),a._v(", also known as "),r("em",[a._v("datapackage-m")]),a._v(", is a set of functions written in "),r("a",{attrs:{href:"https://msdn.microsoft.com/query-bi/m/power-query-m-reference",target:"_blank",rel:"noopener noreferrer"}},[a._v("Power Query M"),r("OutboundLink")],1),a._v(" for working with Tabular Data Packages in "),r("a",{attrs:{href:"https://powerbi.microsoft.com/en-us/desktop/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Power BI Desktop"),r("OutboundLink")],1),a._v(" and "),r("a",{attrs:{href:"https://support.office.com/en-us/article/introduction-to-microsoft-power-query-for-excel-6e92e2f4-2079-4e1f-bad5-89f6269cd605",target:"_blank",rel:"noopener noreferrer"}},[a._v("Power Query for Excel"),r("OutboundLink")],1),a._v(" (also known as ‘Get & Transform Data’ in Excel 2016).")]),a._v(" "),r("p",[a._v("datapackage-m makes use of the Data Package, Data Resource, Tabular Data Package, Tabular Data Resource, and Table Schema specifications, enabling you to go from data to insight in Power BI and Excel, faster.")]),a._v(" "),r("p",[a._v("In 2014, while searching the web for high quality open data, we stumbled across the Frictionless Data project. On learning about "),r("router-link",{attrs:{to:"/data-packages/"}},[a._v("Data Packages")]),a._v(", we spent some time getting acquainted with the specs and began to use Tabular Data Packages for some internal projects. datapackage-m then started off as an internal tool at Nimble Learn for working with Tabular Data Packages.")],1),a._v(" "),r("p",[r("img",{attrs:{src:t(216),alt:""}}),r("br"),a._v(" "),r("em",[a._v("How datapackage-m works in Power BI")])]),a._v(" "),r("p",[a._v("datapackage-m now implements "),r("a",{attrs:{href:"https://blog.okfn.org/2017/09/05/frictionless-data-v1-0/",target:"_blank",rel:"noopener noreferrer"}},[a._v("v1 of the Frictionless Data specs"),r("OutboundLink")],1),a._v(" from a Tabular Data Package consumption perspective. By implementing a broad number of the specs, datapackage-m is able to extract the tables from most "),r("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[a._v("Tabular Data Packages")]),a._v(", or Data Packages with tabular resources, in seconds. These tables can be quickly loaded into a Power BI Data Model or an Excel Worksheet (or Data Model), ready for you to analyse.  datapackage-m currently handles Gzip compressed resources and we’re looking into support for Zip. We have  successfully tested datapackage-m with several Data Packages from "),r("a",{attrs:{href:"https://datahub.io/core",target:"_blank",rel:"noopener noreferrer"}},[a._v("Datahub"),r("OutboundLink")],1),a._v(" and the Frictionless Data "),r("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages",target:"_blank",rel:"noopener noreferrer"}},[a._v("Example Data Packages"),r("OutboundLink")],1),a._v(" GitHub repository.")],1),a._v(" "),r("p",[a._v("In working with data, there are often many repetitive tasks required to get data into a state that can be analysed. Even when the requirement is just to profile and assess whether a new dataset is suitable for a given use case, a lot of time can be wasted getting it into good tabular shape. "),r("router-link",{attrs:{to:"/data-packages/"}},[a._v("Data Packages")]),a._v(" are designed to alleviate this issue, and datapackage-m makes them available for use in Power BI and Excel.")],1),a._v(" "),r("p",[a._v("We find that the Frictionless Data specs are simple to use from both a data publisher and data consumer perspective. We’ve seen a great number of other specifications that are feature-rich but too verbose. In contrast to these, the Frictionless Data specs are minimalist and support use cases where Data Packages are created using one’s favourite text editor.")]),a._v(" "),r("p",[r("img",{attrs:{src:t(217),alt:""}}),r("br"),a._v(" "),r("em",[a._v("How datapackage-m works  in Excel")])]),a._v(" "),r("p",[a._v("There’s an ongoing discussion around a Data Resource compression pattern which is important from a data publishing perspective i.e. due to ongoing file storage and bandwidth costs. Once this pattern is agreed upon and published, it would be good to see this added to the "),r("router-link",{attrs:{to:"/specs/data-resource/"}},[a._v("Data Resource")]),a._v(" and "),r("router-link",{attrs:{to:"/specs/tabular-data-resource/"}},[a._v("Tabular Data Resource")]),a._v(" specs not too long after.")],1),a._v(" "),r("p",[a._v("Other than this, we would like to see another Data Package profile that extends the Tabular Data Package with semantic layer metadata. In addition to the Tabular Data Profile properties, this ‘Semantic Data Package’ would have properties for measure definitions, attribute hierarchies, and other semantic layer metadata. Something like this could be used to programmatically generate "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Semantic_data_model",target:"_blank",rel:"noopener noreferrer"}},[a._v("Semantic Data Models"),r("OutboundLink")],1),a._v(" in a data analytics tool of choice and populate it with data from the tabular data directly.")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://okfnlabs.org/blog/2017/12/21/bootstrapping-data-standards-with-frictionless-data.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("There are many existing use cases for Tabular Data Packages"),r("OutboundLink")],1),a._v(", and we see ‘Subject Area’ Tabular Data Packages as a significant additional use case that is worth exploring . By ‘Subject Area’,  we mean a Tabular Data Package that combines relevant Tabular Data Resources from other high quality Tabular Data Packages. This would help to reduce the time spent seeking out related/relevant data for a given area of analysis and could save researchers tonnes of time, for example.")]),a._v(" "),r("p",[a._v("In addition to datapackage-m, Nimble Learn is working on a public-facing project that is focused on publishing pre-integrated open data from various sources as subject area Tabular Data Packages.  In addition to this we  plan on extending datapackage-m to adopt more Frictionless Data specifications. Keep an eye out for all these updates "),r("a",{attrs:{href:"https://github.com/nimblelearn",target:"_blank",rel:"noopener noreferrer"}},[a._v("on GitHub"),r("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);