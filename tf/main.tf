provider "azurerm" {
  use_oidc = true
  features {}
}

# Create the resource group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Create the Linux App Service Plan
resource "azurerm_service_plan" "appserviceplan" {
  name                = var.appserviceplan_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# Create runtime user identity in managed identity
resource "azurerm_user_assigned_identity" "acr_user_identity" {
  name                = var.acr_user_identity_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

# Create the container registry, pass in the App Service Plan ID
resource "azurerm_container_registry" "acr" {
  name                = var.azurerm_container_registry_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = true
  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.acr_user_identity.id]
  }
}

# Assign access role to userAssigned identity
resource "azurerm_role_assignment" "acr_pull" {
  scope                = azurerm_container_registry.acr.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_user_assigned_identity.acr_user_identity.principal_id
}

# Create the web container app, pass in the App Service Plan ID
resource "azurerm_linux_web_app" "webapp" {
  name                = var.azurerm_linux_web_app_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.appserviceplan.id
  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.acr_user_identity.id]
  }
  app_settings = {
    WEBSITES_PORT    = var.PORT
    DOCKER_ENABLE_CI = true
    # DOCKER_REGISTRY_SERVER_URL          = azurerm_container_registry.acr.login_server
    # DOCKER_REGISTRY_SERVER_PASSWORD     = azurerm_container_registry.acr.admin_password
    # DOCKER_REGISTRY_SERVER_USERNAME     = azurerm_container_registry.acr.admin_username
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
    WEBSITES_CONTAINER_START_TIME_LIMIT = "1800"
    WEBSITES_ENABLE_REMOTE_DEBUGGING    = "false"
    SCM_DO_BUILD_DURING_DEPLOYMENT      = "false"
    # DOCKER_CUSTOM_IMAGE_NAME            = "hello:latest"
  }
  site_config {
    always_on                                     = false
    container_registry_use_managed_identity       = "true"
    container_registry_managed_identity_client_id = azurerm_user_assigned_identity.acr_user_identity.client_id
    application_stack {
      docker_image_name        = "${var.docker_image_name}:${var.docker_image_tag}"
      docker_registry_url      = "https://${azurerm_container_registry.acr.login_server}"
      docker_registry_username = azurerm_container_registry.acr.admin_username
      docker_registry_password = azurerm_container_registry.acr.admin_password
    }
  }
}

# https://stackoverflow.com/questions/69925970/how-to-save-terraform-output-variable-into-a-github-action-s-environment-variabl
output "login_server" {
  value = azurerm_container_registry.acr.login_server
}

output "docker_image_name" {
  value = var.docker_image_name
}

output "docker_image_tag" {
  value = var.docker_image_tag
}

output "admin_username" {
  value = azurerm_container_registry.acr.admin_username
}

output "admin_password" {
  sensitive = true
  value     = azurerm_container_registry.acr.admin_password
}
