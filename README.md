# Project Title

Vacation Planner 

## Project Link

https://vacation-planner-sample-webapp.azurewebsites.net/

## Description

An web application to plan custom itinerary for vacation with flight options

## Features

* User can search the vacation packages based on
  
   * Name of the destination
     
   * Number of days to travel
     
   * Price range
* User can see the full package details in detailed view
  
* User can see all available flight options for selected package(defaults to cheapest flight of the day)
  
* User can book the trip(Not implemented since its not part of the exercise) 

## Getting Started

### Dependencies

* NodeJS > 18.0
  
* Docker > 24.0
  
* Terraform > 1.5

### Installation

* To install all node modules, please run this on root of the project
```
yarn install
```

* To run the project in dev mode, please run this on root of the project. Once server is started, project can be accessed in local server on http://localhost:3000/
```
yarn dev
```

### Project Structure

This project was created by create-nextjs-app command initially

* pages/
  * All pages and api's
    
* src/
  * components, sample data and utils files
    
* styles/
  * common styles
    
* tf/
  * all terraform files to create azure infra
    
* .Dockerfile
  * A dockerfile to containerize the app(Exposes Port: 80)
    
### Azure infrastructure creation flow

  * Created an azure subscription in free tier
    
  * Created a RBAC accout using azure cli command to provide access to the resources on subscription level. This account is used in github workflow agent to create all neccessary resources using terraform. Ex:
    ```
    az ad sp create-for-rbac --name <acc-name> --role <role-name/id> \
                            --scopes /subscriptions/<subscription-id> \
                            --sdk-auth
    ```

  * Added Federated Credential to RBAC account. This is required for github workflow agent to authenticate RBAC account.
    ```
    az ad app federated-credential create --id <rbac-object-id> --parameters <json-string/file>
    ```
    
  * Added RBAC account credentials to git action secrets

  * And, there is an another resource group created with storage account under the same azure subscription to store terraform state file

  ### Terraform flow to create infrastructure
  
  * Creates a resource group
    
  * Create the Linux App Service Plan
    
  * Create an user identity(dynamically on first time) in managed identity(used to access docker image)
    
  * Assign 'AcrPull' access role to user identity to pull the docker image from registry
    
  * Create the container registry, pass in the App Service Plan ID
    
  * Create linux web container app to deploy our docker container and setup continous deployment on push event to acr registry

And, finally on every push to 'main' branch is setup to trigger the git workflow. 

Git workflow creates/updates the infrastructure completely from scratch, builds the latest docker image and pushes it to acr(that triggers the deployment as configured in terraform)
