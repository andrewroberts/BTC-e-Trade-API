BTC-e-Trade-API
===============

BTC-e.com is a Bitcoin Trading site that provides an API to make trades, get transaction history, etc. This Google Apps Script uses this API.

<a href="https://btc-e.com/">BTC-e.com</a> is a Bitcoin Trading site that provides <a title="BTC-e Trade API" href="https://hdbtce.kayako.com/Knowledgebase/Article/View/26/4/trade-api-en">an API</a> to make trades, get transaction history, etc. I've written<a title="BTC-e Trade API using Google Apps Script" href="https://script.google.com/d/1h0lMczEZ6OXedJxfbuOwOZKdLY5pU1u8aMTwdTKxfiOfTaGCkocphFj7/edit?usp=sharing"> a Google Apps Script that uses this BTC-e Trade API</a>.

As well as seeing the script itself by clicking on <a title="BTC-e Trade API with Google Apps Script" href="https://script.google.com/d/1h0lMczEZ6OXedJxfbuOwOZKdLY5pU1u8aMTwdTKxfiOfTaGCkocphFj7/edit?usp=sharing">the link</a>, I've created <a title="BTC-e Trade API Google Apps Script Web App" href="https://script.google.com/macros/s/AKfycbzIJ5m5uIvHkVoPHjF68BVd0gCC8Iutw3lv4WGsq-TkB1mZChY/exec">a simple web app</a> that can do a 'getInfo' and a 'TransHistory' query. They don't do much at the moment as you need to register on the site and get an API key and a secret key.

To get it working for yourself:
<ul>
<li>Take your own copy of <a title="BTC-e Trade API using Google Apps Script" href="https://script.google.com/d/1h0lMczEZ6OXedJxfbuOwOZKdLY5pU1u8aMTwdTKxfiOfTaGCkocphFj7/edit?usp=sharing">the script</a> (<strong>File>Make a copy</strong>)</li>
<li>Register at <a title="BTC-e Bitcoin Trading" href="http://btc-e.com">BTC-e.com</a> for your own account (if you don't already have one)</li>
<li>In your <a title="BTC-e Bitcoin Trading" href="http://btc-e.com">BTC-e.com</a> account click on <strong>Profile</strong> in the top right-hand corner and then go to <strong>API Keys</strong></li>
<li>Allocate a name for this set of keys, tick <strong>info</strong> and <strong>trade</strong> appropriately and finally <strong>Create</strong></li>
<li>Back in <a title="BTC-e Trade API using Google Apps Script" href="https://script.google.com/d/1h0lMczEZ6OXedJxfbuOwOZKdLY5pU1u8aMTwdTKxfiOfTaGCkocphFj7/edit?usp=sharing">the script</a> copy these two keys into <strong>keys.gs</strong></li>
</ul>
<strong>btceTrade_Query()</strong> contains the main functionality that you are after, and that you can use to create a nicer UI. <strong>webApps.gs</strong> contains a basic web app that you&#8217;ll need to deploy (Publish&gt;Deploy as web app &#8230;) and authorise for yourself to see, and a couple of test functions <strong>testGetInfo() </strong>and <strong>testTransHistory() </strong>that you can run from within the script editor and check the log (View>Logs) for the response from <a title="BTC-e Bitcoin Trading" href="http://btc-e.com">BTC-e.com</a>. All of the other files contains utilities that are needed to get Javascript working on the server-side (one day I'll have a look at getting it as small as the other <a title="BTC-e Trade API" href="https://hdbtce.kayako.com/Knowledgebase/Article/View/26/4/trade-api-en">Trade API examples</a>)</p>
