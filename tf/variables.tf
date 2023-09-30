variable "resource_group_name" {
  description = "Name of the resource group."
  type        = string
  default     = "vacation-planner-sample-rg"
}

variable "location" {
  description = "Azure region to deploy the launchpad in the short form."
  type        = string
  default     = "eastus"
}

variable "appserviceplan_name" {
  description = "Name for the app service plan."
  type        = string
  default     = "vacation-planner-sample-asp"
}

variable "acr_user_identity_name" {
  description = "Name for the managed identity's user identity."
  type        = string
  default     = "acr-user-identity"
}

variable "azurerm_container_registry_name" {
  description = "Name for the azure container registry."
  type        = string
  default     = "vacationplanneracr"
}

variable "azurerm_linux_web_app_name" {
  description = "Name for the azure container registry."
  type        = string
  default     = "vacation-planner-sample-webapp"
}

variable "PORT" {
  description = "Port to expose from container to host."
  type        = string
  default     = "8080"
}

variable "docker_image_name" {
  type = string
  default = "sample-vacation-planner"
}
variable "docker_image_tag" {
  type = string
  default = "latest"
}