printjson(db.people.mapReduce(function() {var jobs = []; for (var i in this) { if (!jobs.includes(this.job)) {jobs.push(this.job); emit("job", this.job)} }}, function(id, job) {return job}, {out: {inline: 1}}))