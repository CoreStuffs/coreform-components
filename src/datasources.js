import axios from "axios";

var dataSources = [
  {
    //common/mandatory part
    id: "countries",
    title: "Countries",
    loadMode: "always",
    //custom part
    config: {
      type: "rest",
      method: "GET",
      queryableUrl:
        "https://restcountries.eu/rest/v2/name/{{query}}?fields=name;flag;alpha3Code",
      getAllUrl:
        "https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code",
      transform: function(data) {
          var r = {items:[]};
        for (var i = 0; i < data.length; i++) {
          r.items.push({
            key: data[i].alpha3Code,
            text: data[i].name
          });
        }
        return r;
      }
    }
  },
  {
    //common/mandatory part
    id: "currencies",
    title: "Currencies",
    loadMode: "once",
    //custom part
    config: {
      type: "rest",
      method: "GET",
      getAllUrl: "https://openexchangerates.org/api/currencies.json",
      transform: function(data) {
        var results = [];
        for (let [key, value] of Object.entries(data)) {
          results.push({
            id: key,
            text: value
          });
        }
        return results;
      }
    }
  }
];



const customDataAdapter = {
  getDataSources: function(callback) {
    var data = [];
    for (var i = 0; i < dataSources.length; i++) {
      data.push({
        id: dataSources[i].id,
        text: dataSources[i].title,
        loadMode: dataSources[i].loadMode
      });
    }
    callback(data);
  },
  getData: function(sourceId, onSuccess, query) {
    var dataSource;
    for (var i = 0; i < dataSources.length; i++) {
      if (dataSources[i].id === sourceId) {
        dataSource = dataSources[i];
        break;
      }
    }
    if (dataSource) {
      var url = null;
      if (dataSource.config.getAllUrl) url = dataSource.config.getAllUrl;
      if (dataSource.config.queryableUrl && query)
        url = dataSource.config.queryableUrl.replace(/{{query}}/gi, query);
        console.log("url: " + url);
        axios.get(url).then(response => {
            console.log("Found " + typeof(response.data));
            var data = response.data;
            if (dataSource.config.transform) data = dataSource.config.transform(data);
            onSuccess(data);
        })
    //   $.ajax({
    //     url: url,
    //     crossDomain: true,
    //     type: dataSource.config.method,
    //     //contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function(data) {
    //       if (dataSource.config.transform)
    //         data = dataSource.config.transform(data);
    //       onSuccess(data);
    //     }
    //   });

    }
  },
  // eslint-disable-next-line no-unused-vars
  getDataItem: function(sourceId, itemId, onSuccess) {}
};

export {customDataAdapter} 