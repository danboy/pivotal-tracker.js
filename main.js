var request = require('request')
    , parse = require('xml2json');

Pivotal = {
  getToken: function(username,password,callback){
    self = this;
    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    var token = null;
    request({
        url: 'https://www.pivotaltracker.com/services/v3/tokens/active'
      , headers: {
          'Authorization': auth
        }
    },function(err,resp,body){
      if (!err && resp.statusCode == 200) {
        body = parse.toJson(body,{object: true});
        token = body.token.guid;
        callback(token);
      }
    });
  }
  , getProjects: function(token,callback){
    this.makeRequest(
        'https://www.pivotaltracker.com/services/v3/projects'
      , token
      , function(results){
        callback(results);
      }
    );

  }
  , getProject: function(tracker,token,callback){
    this.makeRequest(
        'https://www.pivotaltracker.com/services/v3/projects/'+tracker
      , token
      , function(results){
        callback(results);
      }
    );

  }
  , getCurrentIteration: function(tracker,token,callback){
    this.makeRequest(
        'https://www.pivotaltracker.com/services/v3/projects/'+tracker+'/iterations/current_backlog'
      , token
      , function(results){
        callback(results);
      }
    );

  }
  , makeRequest: function( url, token, callback ){
    request({
        url: url
      , headers: {
          'X-TrackerToken': token
        }
    },function(err,resp,body){
      if (!err && resp.statusCode == 200) {
        body = parse.toJson(body,{object: true});
        callback(body);
      }
    });
  
  }
}

module.exports = Pivotal;
