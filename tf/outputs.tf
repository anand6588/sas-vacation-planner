output "docker_image_name" {
  description = "Name of the docker image"
  value = var.docker_image_name
}

output "docker_image_tag" {
  description = "Name of the docker image tag"
  value = var.docker_image_tag
}

output "login_server" {
  description = "Server url of Azure Container Registry"
  value = azurerm_container_registry.acr.login_server
}

output "admin_username" {
  description = "Login Username of the ACR"
  value = azurerm_container_registry.acr.admin_username
}

output "admin_password" {
  description = "Login password of the ACR"
  sensitive = true
  value     = azurerm_container_registry.acr.admin_password
}
