
var servicesContent = null;
var enterpriseContent = null;
var showContainer = document.getElementById('dataShow');
function getDataJson(data) {
  return fetch(data)
    .then(response => response.json())
    .then(dataRequired => {
      return dataRequired;
    }).catch(error => console.warn(error));;
};
async function showJson() {
  try {
    servicesContent = await getDataJson('services.json');
    enterpriseContent = await getDataJson('enterprise.json');
    let dataShow = new Object;
    Object.keys(servicesContent.data).map(function (key, index) {
      const element = servicesContent.data[key];
      let overCarrier = '';
      let overService = '';
      let underCarrier = '';
      let underService = '';
      for (let [keyEnterprise, valueEnterprise] of Object.entries(enterpriseContent)) {
        if (keyEnterprise == element.over_carrier_service_id) {
          overCarrier = valueEnterprise?.carrier ?? 'Carrier not found';
          overService = valueEnterprise?.service ?? 'Service not found';
        }
        if (keyEnterprise == element.under_carrier_service_id) {
          underCarrier = valueEnterprise?.carrier ?? 'Carrier not found';
          underService = valueEnterprise?.service ?? 'Service not found';
        }
      }
      dataShow[key] = {
        'limit': element.limit,
        'over': {
          'carrier': overCarrier,
          'service': overService,
        },
        'under': {
          'carrier': underCarrier,
          'service': underService,
        }
      }
        ;
    });

    showContainer.innerHTML = syntaxHighlight(JSON.stringify(dataShow, undefined, 3));
  } catch (error) {
    console.log(error);
  }

}
function arrayServicesSet(dataService) {
  try {
    response = [];
    for (const key in dataService.data) {
      if (Object.hasOwnProperty.call(dataService.data, key)) {
        const element = dataService.data[key];
        const limit = element.limit;
        const over_carrier_service_id = element.over_carrier_service_id;
        const under_carrier_service_id = element.under_carrier_service_id;
        response = [...response, {
          service: key,
          limit,
          over_carrier_service_id,
          under_carrier_service_id
        }]
      }
    }
    return response;
  } catch (error) {
    console.log(error);
  }

}

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}



function cleanScreen() {
  showContainer.innerHTML = '';
}
