// Script-as-app template.
function doGet() {
  
  var app = UiApp.createApplication();

  var getInfoButton = app.createButton('Click to send BTC-e Trade GetInfo() POST');
  app.add(getInfoButton);

  var transHistorybutton = app.createButton('Click to send BTC-e Trade TransHistory() POST');
  app.add(transHistorybutton);
    
  var label = app.createLabel().setId('statusLabel').setVisible(false);
  app.add(label);
  
  var handler = app.createServerHandler('getInfoClickHandler');
  handler.addCallbackElement(label);
  getInfoButton.addClickHandler(handler);

  handler = app.createServerHandler('transHistoryClickHandler');
  handler.addCallbackElement(label);
  transHistorybutton.addClickHandler(handler);

  return app;
}

function getInfoClickHandler(e) {

  var result = btceTrade_Query('getInfo');
  
  var app = UiApp.getActiveApplication();

  var label = app.getElementById('statusLabel');
  
  // Compile results string
  var dumpResults = dump_(result, "body", 4);
  
  label.setText(dumpResults);
  label.setVisible(true);

  app.close();
  return app;
}

function transHistoryClickHandler(e) {

  var result = btceTrade_Query('TransHistory', {"count": 1});
  
  var app = UiApp.getActiveApplication();

  var label = app.getElementById('statusLabel');
  
  // Compile results string
  var dumpResults = dump_(result, "body", 4);
  
  label.setText(dumpResults);
  label.setVisible(true);

  app.close();
  return app;
}

function testGetInfo() {
  
  var result = btceTrade_Query('getInfo');

  Logger.log('getInfoQuery: result: ' + result.success);
  Logger.log('getInfoQuery: error: ' + result.error);
  
}

function testTransHistory() {
  
  var result = btceTrade_Query('TransHistory', {'count': 1});

  Logger.log('getInfoQuery: result: ' + result.success);
  Logger.log('getInfoQuery: error: ' + result.error);
  
}

/*
function testTrade() {
  
  // Buy 1 BTC @ 2 USD.
  var result = btceTrade_Query('Trade', {'pair': 1, 'type': 'buy', 'amount': 1, 'rate': 2});

  Logger.log('getInfoQuery: result: ' + result.success);
  Logger.log('getInfoQuery: error: ' + result.error);
  
}
*/
