## Pivotal-Tracker

now you can interact with the tracker api in node. Just kicking off the
project.

## Add it to your project

  npm install pivotal-tracker
  

  var Pivotal = require('pivotal-tracker');

## Get a token

    Pivotal.getToken( username,password,function(token){
      // do something with token
      console.log(token);
    });

## Get a project

    Pivotal.getProject( project_id, token, function(tracker){
      console.log(tracker);
      });
    });

## Get current iteration
    Pivotal.getCurrentIteration( project_id, token,function(iteration){
      console.log(iteration.iterations);
    });
