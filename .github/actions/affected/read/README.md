# Read Affected apps

## Purpose
- To read affected result from another workflow.
- Must need to use `affected/write` actions before other git workflow.
- Use **ONLY PULL REQUEST EVENTS**.

## Inputs

| Key           | Purpose                                         | Required | Default                       | Example                                                         |
|---------------|-------------------------------------------------|----------|-------------------------------|-----------------------------------------------------------------|
| artifact_path | The path to the artifact                        | true     | -                             | /actions-runner/cms-web/download-artifact                       |
| workflow      | The workflow file to download the artifact from | false    | verification_pull_request.yml |                                                                 |
| exclude       | The workflow file to exclude from the affected  | false    | -                             | exclude: \| <br /> &nbsp;&nbsp;campaign<br /> &nbsp;&nbsp;guide |                                       


## Outputs

| Key                 | Purpose                                  | Example             |
|---------------------|------------------------------------------|---------------------|
| affected       | Affected projects list for using matricx | [cms-web, research] |
