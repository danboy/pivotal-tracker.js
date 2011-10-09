## Pivotal-Tracker

now you can interact with the tracker api in node. Just kicking off the
project.

## Get a token

    Pivotal.getToken( username,password,function(token){
      // do something with token
      console.log(token);
    });

## Get a project

    Pivotal.getProject(req.params.tracker,req.user.token,function(tracker){
      console.log(tracker);
      Pivotal.getCurrentIteration(req.params.tracker,req.user.token,function(iteration){
        console.log(iteration.iterations);
        res.render('trackers/show',{
          title: 'Projects'
        , tracker: tracker.project
        , iteration: iteration.iterations
        });
      });
    });
