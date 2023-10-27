# NxCloud CI example repo

This repo is based on the [Nx Examples](https://github.com/nrwl/nx-examples) repo 
but setup in a way to illustrate some of the benefits of using Nx and NxCloud together to setup CI.

The e2e targets are setup to serve the app statically from dist:

<img src="static_e2e.png">

this is how the apps are served statically:

```json
    "serve-static": {
      "executor": "@nrwl/web:file-server",
      "options": {
        "buildTarget": "cart:build"
      }
    },
```

This then results in this project graph:

<img src="proj_graph.png">

The DTE solution can then be explained as such: https://youtu.be/NZF0ZJpgaJM?si=gLpTnTdygB1gx7wI&t=516

[Here is an example DTE config](.github/workflows/ci.yml) that is applicable to most CI providers.

In the above yaml, if you remove the line that activate DTE:

```yaml
# - run: npx nx-cloud start-ci-run --stop-agents-after="e2e"
```

it will go from finishing in 3 minutes, to finishing in 9 minutes. That is because we can now parallelise the tasks across machines.
So it also illustrates the CI time savings we get from DTE.

You can also use [the non-DTE CI config](.github/workflows/affected-ci.yml):
- without NxCloud
- with NxCloud

and you should notice a difference of 8-9 minutes down to 1-2 minutes because of caching.
So it can also be used to explain the caching benefits.


